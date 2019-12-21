name: adm-adm-postgresqlde-tam-metin-arama
layout: post
title: Adım Adım PostgreSQL'de Tam Metin Arama (Full Text Search)
time: 2009-03-03 01:07:00 +02:00

<span style="font-weight: bold;">[Uyarı: Bu uzun dökümandan en fazla yarar sağlamak için rahat bir zamanda okuyunuz. Dökümanın tamamı Tayfun Şen tarafından yazılmıştır. ]</span><br /><br /><br />Bu dökümanda <a href="http://www.postgresql.org/">PostgreSQL</a> veritabanı üzerinde Türkçe tam metin arama özelliklerinin nasıl kullanılabileceğini anlatacağım. Önce sürüm meselesini bir aradan çıkaralım. Tam metin arama özellikleri son PostgreSQL sürümleri ile birlikte oldukça iyileştirildi. Bundan dolayı ben şu anda son kararlı sürüm olan 8.3.6 sürümünü kullanacağım. İşletim sistemi olarak tercihim Linux, ve dağıtım olarak da <a href="http://www.debian.org/">Debian</a> öneriyorum. Tabi herhangi bir Linux dağıtımı işinizi görecektir. Eğer zavallı bir Vindoz kullanıcısı iseniz anlatacaklarımı biraz değiştirmeniz gerekebilir (siz en iyisi Linux'a geçin :)).<br /><br />Eğer yeni bir kurulum yaptıysanız root kullanıcısı olun ve eğer veritabanı sunucusu çalışmıyorsa onu başlatın. Bunun için, örneğin Debian'da,<br /><code><br />peanutbutter:/home/tayfun# /etc/init.d/postgresql-8.3 start<br />Starting PostgreSQL 8.3 database server: main.<br /></code><br />demeniz yeterli.<br /><br />Bundan sonra <br /><code><br />peanutbutter:/home/tayfun# su postgres<br /></code> <br />ile postgres kullanıcısına geçiş yapın. postgres kullanıcısı veritabanı üzerinde tam yetkiye sahip bir yönetici kullanıcısıdır. Bu yönetici kullanıcısı olduktan sonra psql ile veritabanına bağlanabilirsiniz:<br /><code><br />postgres@peanutbutter:/home/tayfun$ psql<br />Welcome to psql 8.3.6, the PostgreSQL interactive terminal.<br /><br />Type:  \copyright for distribution terms<br />     \h for help with SQL commands<br />     \? for help with psql commands<br />     \g or terminate with semicolon to execute query<br />     \q to quit<br /></code><br />Veritabanı yaratmadan önce localization ve i18n hakkında bahsetsem iyi olacak. Eğer Türkçe veri saklayacaksanız veritabanınızın Türkçe karakter kodlamasını kullanması gerekiyor. PostgreSQL, MySQL kadar esnek bir karakter kodlama özelliklerine sahip değil. Bu yüzden her veritabanı kümesi (cluster) için<br />başlangıçta (initdb ile) verilan LC_COLLATE ve LC_CTYPE gibi önemli yerelleştirme değerleri daha sonra değiştirilemez. PostgreSQL varsayılan olarak<br />sistem locale değerini kullanıyor. Benimki UTF-8 olduğu için veritabanım da bu kodlamayı kullanıyor. Debian'da locale değerini 'locale' komutu ile öğrenebilirsiniz:<br /><code><br />tayfun@peanutbutter:~$ locale<br />LANG=en_US.UTF-8<br />LC_CTYPE="en_US.UTF-8"<br />LC_NUMERIC="en_US.UTF-8"<br />LC_TIME="en_US.UTF-8"<br />LC_COLLATE="en_US.UTF-8"<br />LC_MONETARY="en_US.UTF-8"<br />LC_MESSAGES="en_US.UTF-8"<br />LC_PAPER="en_US.UTF-8"<br />LC_NAME="en_US.UTF-8"<br />LC_ADDRESS="en_US.UTF-8"<br />LC_TELEPHONE="en_US.UTF-8"<br />LC_MEASUREMENT="en_US.UTF-8"<br />LC_IDENTIFICATION="en_US.UTF-8"<br />LC_ALL=<br /></code><br /><br />Şimdi bir veritabanı yaratalım ve bağlanalım:<br /><code><br />postgres=# create database deneme;<br />postgres=# \c deneme<br /></code><br />Burada durup PostgreSQL'in bize tam metin arama için sağladığı güzelliklere değinelim. Eğer <a href="http://www.postgresql.org/docs/8.3/interactive/textsearch-tables.html">PostgreSQL dökümanlarını okursanız</a> tsvector ve tsquery gibi iki veri yapısını sıklıkla duyacaksınız. Bunlardan tsvector dökümanınızı arama yapmaya uygun halde tutar, tsquery ise arama yaparken kullandığınız sorgular için tasarlanmıştır.<br /><br />Şimdi tam metin için örnek bir veritabanı tablosu oluşturalım. Bu tabloya ntvmsnbc'deki bazı haber metinlerini ekleyeceğim. Tablomuzda tipik olarak başlık, özet, anahtar kelimeler, tam metin, yazar gibi alanlar olacak.<br /><code><br />deneme=# create table metin (baslik varchar(100), ozet text, anahtar_kelimeler varchar(200), tam_yazi text, yazar varchar(200));<br /></code><br />Şimdi biraz veri yükleyelim:<br /><code><br />deneme=# insert into metin values ('İhracat yüzde 35 geriledi', 'İhracat Şubat ayında yüzde 35 düşerek 6.9 milyar dolar olarak gerçekleşti. Otomotiv ihracatında yüzde 55 azalma yaşandı.', 'ihracat, otomotiv, gerileme, kriz', 'Krizin etkisiyle pazarlardaki daralmayla ihracatta kan kaybı devam ediyor. Türkiye İhracatçılar Meclisi (TİM) verilerine göre Şubat ayında ihracat önceki yılın aynı dönemine göre yüzde 35 düşüşle 6.9 milyar dolar oldu. Ocak-Şubat döneminde ihracat yüzde 31''lik azalışla 13.9 milyar dolar olarak gerçekleşti. Son 12 aylık ihracat verilerinde ise yüzde 8.1 artış yaşandı. Böylece toplam yıllık ihracat 121.7 milyar dolar oldu. Türkiye İhracatçılar Meclisi (TİM) Başkanı Mehmet Büyükekşi, Şubat ayı ihracat rakamlarını açıklamak için Uludağ İhracatçı Birlikleri''nde düzenlediği basın toplantısında, otomotiv sektörünün geçen ay 1 milyar 98 milyon dolarlık ihracat gerçekleştirerek, dış satımda sektörler arasında liderliğini sürdürdüğünü ve 1 milyar dolar ihracat yapan tek sektör olduğunu belirtti. Otomotivi 984 milyon dolar ile demir - çelik ve 967 milyon dolar ile hazır giyim ve konfeksiyon sektörlerinin takip ettiğini anlatan Büyükekşi, tarım ve hayvancılık grubu sektörlerinin ihracatının ise Şubat ayında yüzde 3.31 gerilerken, toplam ihracat içinde yüzde 14.39''luk pay aldığını bildirdi.', 'Ajanslar');<br /><br /><br />deneme=# insert into metin values ('Şahin: Sözlerim maksadını aştı', 'Adalet Bakanı Şahin, "Hükümetle zıtlaşan yerel yönetimler her projelerini Ankara’dan geçiremiyor" sözleri için "Yanlış ve maksadını aşan bir ifadedir" dedi.', 'şahin, adalet bakanı, şantaj, rant', 'TBMM''de konuşan muhalefet milletvekilleri Adalet Bakanı Mehmet Ali Şahin''in hafta sonu Antalya''da söylediği "Hükümetimizle kavga eden, zıtlaşan yerel yönetimler her projelerini Ankara’dan geçiremiyor. Maalesef bu Türkiye’nin gerçeği" sözlerini eleştirdi. Kürsüye gelen Adalet Bakanı Şahin, eleştirileri anlayışla karşıladığını belirtti. Adalet Bakanı Şahin, şöyle konuştu: "Orada yaptığım konuşmalarda genel olarak vermek istediğim mesaj şuydu; bir yerel yönetimin, bir belediyenin, bir belediye başkanın, başka belediyelerin veya  merkezi yönetimin yardımı olmadan çözemeyeceği bir takım sorunları vardır. O nedenle belediye başkanı olarak seçeceğiniz arkadaşın, diğer belediyelerle, diğer kuruluşlarla diyaloğu devam ettirecek, onların da yardımını alabilecek, onlarla birlikte çalışabilecek kapasitede arkadaşlar olması gerektiğini ifade ettim. Bunu söylerken, şu partiden, bu partiden ayrımı yapmadım. Ama Gazipaşa''da ''Eğer seçeceğiniz belediye başkanı bizim partiden olursa memnun olurum'' anlamına gelen bir ifade kullandım. Yerel yöneticilerin büyükşehir belediyesi ve merkezi hükümetle de uyum halinde, diyalog halinde olmasının yararlı olacağını düşündüm. Beni buraya getiren neydi? Ben Antalya milletvekiliyim ve kabinede görev yapıyorum. Antalya''da bazı ilçe ve beldeleri ziyaret ediyorum. Mesela bazı ilçeler var ki, henüz altyapıları, kanalizasyon sorunları bile büyük ölçüde çözülmedi. Ben bizim partiden olmayan bu belediyelerin bulunduğu yerlere gittiğimde mevcut belediye başkanı arkadaşlarımla bir diyalog kurayım, acaba birlikte burada bir çözüm üretebilir miyiz'' dediğimde, bazı ilçeler var ki bu belediye başkanlarıyla ben maalesef 3-4 yıldır tanışma şerefine nail olamadım. Ben bunu bazı yerlerde eleştirdim. ''Keşke bu belediye başkanı arkadaşlarımla diyalog kurabilsek, başka partiden olabilir ama belki buradaki sorunlara birlikte çözüm üretebiliriz'' diye bir takım konuşmalar da yaptım."', 'ajanslar');<br /><br /><br />deneme=# insert into metin values ('Gül dava açtı, Arıtman ısrarlı', 'Cumhurbaşkanı Gül ve CHP’li Arıtman arasındaki tartışma yeni bir boyut kazandı. Cumhurbaşkanı tazminat davası açtı, Arıtman ısrarlı açıklamalarını sürdürdü: Nüfus kütükleri Türk olduğunu kanıtlayamaz.', 'canan arıtman, gül, saçmalıklar, politikacıların zeka seviyesi', 'Cumhurbaşkanı Gül, “Hakkımda bir yalan yaymak istiyorlar” iddiasıyla, kendisi için “Annesinin kökenine bir bakın” diyen CHP milletvekili Canan Arıtman hakkında 1 YTL''lik manevi tazminat davası açtı. Gül''ün etnik kökenleri konusunda açıklama yapmasına sebep olan iddiaları ileri süren Arıtman ise, bugün de “Nüfus kütüklerinden köken belli olmaz” diyerek ısrarlı tavrını sürdürdü. CHP İzmir Milletvekili Canan Arıtman, 1915 olayları için başlatılan “Özür diliyorum” kampanyasına tepki göstermediği gerekçesiyle Cumhurbaşkanı Abdullah Gül''ü eleştirmiş, “Tabii ki destekler, annesinin kökenine bir bakın” demişti.<br /><br />Arıtman''ın bu açıklamasından sonra önce sessiz kalan Cumhurbaşkanı Gül, pazar günü yazılı açıklama yaparak kendisi hakkında yayılmak istenen bir yalanı düzeltmek istediğini belirtti. Gül, açıklamasında “Kayseri’nin yerlisi olan annem tarafından Satoğlu, babam tarafından Gül sülalelerinden gelen ailemizin yüzyıllara uzanan kayıtlı geçmişi Müslüman ve Türk''tür. Buna ailemizin geçmişten günümüze birlikte titizlikle işlenen soy ağacımız, mevcut resmi nüfus kütükleri ve gelmiş geçmiş Kayseri''li hemşehrilerimiz şahittir” ifadesini kullanmıştı.', 'NTV-MSNBC');<br /></code><br />Şimdi tablomuzda üç tane satır var. Verilerimizi de eklediğimize göre bu tabloda tam metin arama nasıl yapabiliriz? Aslında çok zor birşey değil. Örnek tablomuzdaki tam yazı alanınında sorgumuzu şöyle gerçekleştirebiliriz:<br /><code><br />deneme=# select baslik from metin where to_tsvector(tam_yazi) @@ to_tsquery('söz');<br />           baslik           <br />--------------------------------<br />Şahin: Sözlerim maksadını aştı<br />(1 row)<br /><br />deneme=# select baslik from metin where to_tsvector(tam_yazi) @@ to_tsquery('kütük');<br />           baslik           <br />--------------------------------<br />Gül dava açtı, Arıtman ısrarlı<br />(1 row)<br /></code><br />Bu iki sorguda da tam_yazi alanı to_tsvector fonksiyonu yardımı ile tsvector haline ve sorgu için kullanacağımız kelimeler ('söz' ve 'kütük') to_tsquery fonksiyonu ile tsquery haline getiriliyor. Bundan sonra @@ operatörü ile sorgumuzu çalıştırabiliyoruz. Sorgularımızı gerçekleştirirken boolean operatörleri kullanabiliriz, &amp;, | ve ! sembolleri yardımı ile. Örnek bir sorgu şöyle olabilir:<br /><code><br />deneme=# select baslik from metin where to_tsvector(tam_yazi) @@ to_tsquery('türkiye');<br />           baslik           <br />--------------------------------<br />İhracat yüzde 35 geriledi<br />Şahin: Sözlerim maksadını aştı<br />(2 rows)<br /></code><br />ama<br /><code><br />deneme=# select baslik from metin where to_tsvector(tam_yazi) @@ to_tsquery('türkiye &amp; çözüm');<br />           baslik           <br />--------------------------------<br />Şahin: Sözlerim maksadını aştı<br />(1 row)<br /></code><br />ts_vector ve ts_query veri yapılarının nasıl tutulduğunu görmek ister misiniz? Bunu şu şekilde görebilirsiniz:<br /><code><br /># select to_tsvector(tam_yazi) from metin where baslik='Şahin: Sözlerim maksadını aştı';<br /><br />'3':211 'e':19 'p':105,219 'u':138 '-4':212 'be':146 'et':104 'he':170 'in':11 'mi':200 'ne':149 'on':92,96 'so':13 'ali':9 'ayr':111 'ben':150,178,209,218 'bil':174 'bir':58,61,63,74,127,191,197,241 'biz':120,179 'dan':26 'haf':12 'hal':1<br />...<br />...<br />...<br /></code><br />Bu SQL sorgusunun sonucu olarak köklerine ayrılmış kelimeleri ve her birinin dökümandaki yerini göreceksiniz. Örnek olarak 'bir' kelimesi 58, 61, 63. sırada görülmüş (ve daha birçok yerde).<br /><br />Bunu daha basit şekilde de deneyebiliriz:<br /><code><br />deneme=# select to_tsvector('deneme cümlemiz bu olsun. olsun!');      <br />to_tsvector      <br />---------------------------<br />'ol':4,5 'dene':1 'cümle':2<br />(1 row)<br /></code><br />Burada da görüldüğü gibi 'deneme' ve 'olsun' kelimelerimiz köklerine ayrıldı.<br /><br />ts_query yapısını da benzer bir şekilde deneyebiliriz.<br /><br />Dikkatli okuyucular az önce tabloya karşı yaptığımız sorgularda tam yazı alanlarının canlı olarak tsvector'e çevrildiğini farketmişlerdir. tsvector'ün yapısı incelendiğinde bunun maliyetli bir işlem olduğu görülebilir. Peki bunu nasıl daha kolay ve verimli bir hale sokabiliriz?<br /><br />Bunun aslında iki yolu var. İlk yöntem ile sadece bir index tanımlaması yaparak aramalarımızı hızlandırabiliriz. Bunun için index'imizi to_tsvector(tam_yazi) olarak tanımlamamız gerekiyor. İkinci yöntemde ise tabloya bir alan ekleyip o alana tsvector'leri doldurabiliriz. Bu yöntemleri biraz daha detaylı inceleyelim.<br /><br />İkinci yöntemimizden başlarsak, fazladan bir alan ile tsvector yapılarımızı saklamak maliyeti yüksek bir yöntem. Bunun nedeni tablonuzu büyütmesi ve bu alanın güncel tutulması için gerekecek trigger benzeri yapılarının verimlilik sorunları. Yine de bu yöntemi uygulamak istersek şu şekilde yapabiliriz:<br /><br />Öncelikle trigger yazmamız gerekiyor. Bir dosya yaratın ve içine şunları yazın:<br /><code><br />CREATE OR REPLACE FUNCTION norm_text (<br />  text_to_normalize text<br />) RETURNS text AS $$<br />DECLARE<br />normalized_string   text;<br />BEGIN<br />  select translate(text_to_normalize, 'çğıöşüÇĞÖŞÜİ', 'cgiosuCGOSUI')<br />  into normalized_string;<br /><br />  return normalized_string;<br /><br />END;<br />$$ LANGUAGE plpgsql IMMUTABLE;<br /><br /><br />CREATE OR REPLACE FUNCTION lexeme_trigger ()<br />RETURNS trigger AS $$<br />begin<br />  new.lexemes :=<br />      setweight(to_tsvector('turkish', coalesce(norm_text(new.baslik), '')), 'A'<br />) ||<br />      setweight(to_tsvector('turkish', coalesce(norm_text(new.anahtar_kelimeler)<br />, '')), 'B') ||<br />      setweight(to_tsvector('turkish', coalesce(norm_text(new.ozet), '')), 'C')<br />||<br />      setweight(to_tsvector('turkish', coalesce(norm_text(new.tam_yazi), '')), '<br />D');<br />  return new;<br />end<br />$$ LANGUAGE plpgsql;<br /></code><br />(İleride değinilecek ama burada bahsetmekte fayda var: turkish ile köklere ayırma yapılacaktır, eger yanlış işler yapıyorsa bu ayırma işlemi, sözlük zinciri yaratılabilir).<br /><br />Burada tek uyguladığımız sadece bir trigger değil, tam metin aramanın başka bir özelliğinden de yararlanıyoruz. Bu özellik ağırlıklandırma. setweight fonksiyonu ile tablodaki alanlara ağırlıklar veriyoruz. A harfinden D'ye doğru ağırlık azalıyor. En önemli alan olan başlık bilgisi en fazla ağırlığa sahip, bu sayede sorgunun birden fazla satırda eşleniği varsa eşlenen alanların ağırlığına göre bir sıralama yapılacak.<br /><br />Bunun dışında ilk tanımlanan fonksiyon norm_text, adından da anlaşılacağı gibi yazı normalisation yapıyor. PostgreSQL'de MySQL gibi gelişmiş collation seçenekleri yok, accent insensitive eşleme yapabilmek için kendi fonksiyonumuzu yazmamız gerekiyor. norm_text bunu yapıyor, Türkçe karakterleri değiştiriyor. Bu sayede kırmızı aradığımızda kirmizi'lari da bulacağız. Eğer bu türden bir özelliğe ihtiyacımız yoksa bu fonksiyonu ve kullanıldığı yerleri kaldırabiliriz. Accent insensitive arama yapmak istiyorsak hem tsvector oluştururken, hem de tsquery oluştururken bu fonksiyonu kullanmak durumundayız.<br /><br />Bu trigger ve normalisation fonksiyonunun tanımının yapıldığı dosyayı PostgreSQL'e vermemiz gerekiyor. Ama öncesinde bu trigger'ın yazıldığı dilin (plpgsql) etkin olması gerek:<br /><code><br />deneme=# create LANGUAGE plpgsql;<br /></code><br />Şimdi fonksiyonumuzun bulunduğu dosyayı verebiliriz:<br /><code><br />deneme=> \i ~tayfun/yonca/norm_text.sql<br />CREATE FUNCTION<br /></code><br />Artık tsvector'lerin tutulacağı alanı oluşturabilir<br /><code><br />deneme=> alter table metin add column lexemes tsvector;<br /></code><br />ve trigger'ı yaratabiliriz:<br /><code><br />deneme=> CREATE TRIGGER lexemeupdate BEFORE INSERT OR UPDATE ON metin FOR EACH ROW EXECUTE PROCEDURE lexeme_trigger();<br /></code><br />Artık her metin eklemesinde lexeme kolonu tsvector ile güncellenecektir. Bundan sonra bu alanı kullanarak tam metin arama yapabiliriz. Eski satırlarımızı güncellemek için:<br /><code><br />deneme=# update metin set lexemes =<br />deneme-# setweight(to_tsvector('turkish', coalesce(norm_text(baslik), '')), 'A') ||<br />deneme-# setweight(to_tsvector('turkish', coalesce(norm_text(anahtar_kelimeler), '')), 'B') ||<br />deneme-# setweight(to_tsvector('turkish', coalesce(norm_text(ozet), '')), 'C') ||<br />deneme-# setweight(to_tsvector('turkish', coalesce(norm_text(tam_yazi), '')), 'D');<br />UPDATE 3<br /></code><br />Eski veri de arama yapmaya uygun hale getirildiğine göre, sorgulara başlayabiliriz:<br /><code><br />deneme=# select baslik from metin where lexemes @@ to_tsquery('sah');<br />           baslik           <br />--------------------------------<br />Şahin: Sözlerim maksadını aştı<br />(1 row)<br /></code><br />Eğer veritabanındaki lexemes alanı incelenirse kelimelerin köklerine ayrıştırılmış oldukları görünür. Bundan başka kelimelerin (lexeme'lerin) yanında hangi bölümde (A, B, C ve D) oldukları da belirtilmiştir. Türkçe köklere ayırmanın bazı gariplikleri vardır:<br /><code><br />deneme=# select to_tsvector('turkish', 'cümle');<br />to_tsvector<br />-------------<br />'ç':1<br />(1 row)<br /></code><br />Bundan dolayı 'ç' harfi arandığında içinde 'cümle' kelimesi geçen satırlar getirilecektir. Belki biraz daha az garip örnekler:<br /><code><br />deneme=# select to_tsquery('turkish', 'kelime');<br />to_tsquery<br />------------<br />'kel'<br />(1 row)<br /><br />deneme=# select to_tsquery('turkish', 'araba');<br />to_tsquery<br />------------<br />'arap'<br />(1 row)<br /></code><br />Son örnekte görüldüğü üzere 'arap' kelimesi arandığında içinde 'araba' geçen satırlar da eşlenecektir. Varsayılan olarak Türkçe arama yapılması için:<br /><code><br />deneme=> set default_text_search_config=turkish;<br /></code><br />komutu kullanılabilir.<br /><br />tsvector yapılarında lexeme yanında bulunan pozisyon bilgileri "proximity ranking" sıralaması için kullanılmaktadır.<br /><br />Dillerde aramaya katmanın pek mantıklı olmadığı kelimelere stop words denmektedir (Türkçe'de 'bu', 'şu', 've', 'mesela' gibi..) Bu kelimeler /usr/share/postgresql/8.3/tsearch_data/ benzeri bir klasörde bulunmaktadır, buraya aramada kullanılmasını istemediğiniz yeni kelimeleri ekleyebilirsiniz.<br /><br />Eğer Türkçe arama yapmak istemiyorsanız, yeni bir sözlük dizisi oluşturmanız gerekir. Bu konuya daha sonra tekrar değineceğim.<br /><br />Tam metin arama yollarından ikincisi, yani ayrı bir tablo alanında tsvector bilgilerini tutma tekniğini gördük. Şimdi anlatacağımız bir numaralı teknik ise direk index oluşturmaktan geçiyor:<br /><code><br />deneme=# CREATE INDEX metin_idx1 ON metin USING gin((<br />setweight(to_tsvector('turkish', coalesce(norm_text(baslik), '')), 'A') ||<br />setweight(to_tsvector('turkish', coalesce(norm_text(anahtar_kelimeler), '')), 'B') ||<br />setweight(to_tsvector('turkish', coalesce(norm_text(ozet), '')), 'C') ||<br />setweight(to_tsvector('turkish', coalesce(norm_text(tam_yazi), '')), 'D')));<br /><br />CREATE INDEX<br /></code><br />Artık baslik, anahtar kelimeler, ozet ve tam_yazi alanları üzerinde tanımlı bir indeksleme mekanizması devrededir. Bu sayede büyük veritabanları için devasa verimlilik artışları mümkündür. Esasında önceki teknikte verilen fazladan kolon üzerinde de index tanımı mümkündür, bunun yanında tek tek diğer kolonlar üzerinde index oluşturmak da bu kolonlarda tam metin arama yapılacaksa faydalı olabilir:<br /><code><br />CREATE INDEX metin_baslik_idx ON metin USING gin(<br />to_tsvector('basit', norm_text(baslik)));<br /><br />CREATE INDEX metin_ozet_idx ON metin USING gin(<br />to_tsvector('basit', norm_text(ozet)));<br /><br />CREATE INDEX metin_anahtarlar_idx ON metin USING gin(<br />to_tsvector('basit', norm_text(anahtar_kelimeler)));<br /><br />CREATE INDEX metin_tam_yazi_idx ON metin USING gin(<br />to_tsvector('basit', norm_text(tam_yazi)));<br /><br />CREATE INDEX metin_yazar_idx ON metin USING gin(<br />to_tsvector('basit', norm_text(yazar)));<br /></code><br />Burada dikkat edilirse 'basit' isimli bir sözlük zincirini kullandık, 'turkish' yerine. Bunu daha tanımlamadığımız için hata almış olabilirsiniz. Eğer Türkçe eklere ayırma gibi özellikleri istemiyorsanız yeni bir basit sözlük zinciri oluşturmanız faydalı olur:<br /><code><br />deneme=> CREATE TEXT SEARCH DICTIONARY public.simple_turk (<br />  TEMPLATE = pg_catalog.simple,<br />STOPWORDS = turkish<br />);<br /><br />deneme=> CREATE TEXT SEARCH CONFIGURATION public.basit (COPY = pg_catalog.turkish);<br /><br />deneme=> alter text search configuration basit alter mapping for asciihword, asciiword, hword, hword_asciipart, hword_part, word with simple_turk;<br /></code><br />Tüm bunları yaptıktan sonra basit isimli yeni bir sözlük zincirimiz yaratıldı. Bu sözlük kümesi pek bir kök ayrımı yapmıyor, bunu şu şekilde test edebiliriz:<br /><code><br />deneme=# SELECT * FROM ts_debug('public.basit', 'fdeenem tayfun türkçe mi birşey üğöç');<br /> alias   |    description    |  token  | dictionaries  | dictionary  |  lexemes<br />-----------+-------------------+---------+---------------+-------------+-----------<br />asciiword | Word, all ASCII   | fdeenem | {simple_dict} | simple_dict | {fdeenem}<br />blank     | Space symbols     |         | {}            |             |<br />asciiword | Word, all ASCII   | tayfun  | {simple_dict} | simple_dict | {tayfun}<br />blank     | Space symbols     |         | {}            |             |<br />word      | Word, all letters | türkçe  | {simple_dict} | simple_dict | {türkçe}<br />blank     | Space symbols     |         | {}            |             |<br />asciiword | Word, all ASCII   | mi      | {simple_dict} | simple_dict | {mi}<br />blank     | Space symbols     |         | {}            |             |<br />word      | Word, all letters | birşey  | {simple_dict} | simple_dict | {}<br />blank     | Space symbols     |         | {}            |             |<br />word      | Word, all letters | üğöç    | {simple_dict} | simple_dict | {üğöç}<br />(11 rows)<br /></code><br />Bundan sonra şu şekilde daha karmaşık aramalar yapabiliriz:<br /><code><br />deneme=> select * from metin where to_tsvector('basit', norm_text(tam_yazi)) @@ to_tsquery('basit', norm_text('ab')) AND to_tsvector('basit', norm_text(anahtar_kelimeler)) @@ to_tsquery('basit', norm_text('politikacı'));<br /></code><br />Her alanda belirli kelimeleri bulmak bu şekilde daha hızlı ve kolay olacaktır çünkü her alanda index'imiz vardır.<br /><br /><br />Eğer varsayılan tam metin arama dili olarak Türkçe'yi kullanmak istiyorsanız ('turkish' olarak verilen argüman yerine) bu ayarı direk veritabananı için düzenleyebilirsiniz:<br /><code><br />deneme=# alter database deneme set default_text_search_config = turkish;<br /></code><br /><h2>EXPLAIN ve EXPLAIN ANALYZE ile Testler</h2><br />Explain komutunu kullanarak bir sql sorgusunun tahmini nasıl çalıştırılacağını görebilirsiniz. 'explain analyze' ise sorguyu gerçekten çalıştırır ve sonuçları verir. Sorgu planlayıcısına (query planner) komut vererek indexler varken sequential scan yapmamasını sağlayabilirsiniz:<br /><br />Explain kullandığınızda index yaratmamıza rağmen halen seq. scan (sıralı tarama) yapıldığını görüp şaşırabilirsiniz:<br /><code><br />deneme=#  explain select * from metin where to_tsvector('basit', norm_text(tam_yazi)) @@ to_tsquery('basit', norm_text('ab'));<br />                                    QUERY PLAN                                     <br />---------------------------------------------------------------------------------------<br />Seq Scan on metin  (cost=0.00..2.79 rows=1 width=336)<br /> Filter: (to_tsvector('basit'::regconfig, norm_text(tam_yazi)) @@ '''ab'''::tsquery)<br />(2 rows)<br /></code><br />İşin aslı şu ki, sorgu planlayıcımız tabloda az miktarda veri olduğunu görüyor ve index kullanmak (ağaç yapıları ve hash kodlaması) yerine sıralı bir şekilde teker teker kontrol etmenin daha hızlı olacağını düşünüyor. Aslında yanılıyor da sayılmaz, bizim veritabanımız çok küçük, adam hash hesaplayana veya ağaç (B-tree?) ile uğraşana kadar hepsini teker teker kontrol edebilir. Biz testlerde bunun böyle olmamasını istiyoruz. Bunun için manuel olarak sıralı tarama özelliğini kapatabiliriz:<br /><code><br />deneme=> set enable_seqscan = false ;<br />deneme=> show enable_seqscan;<br /></code><br />Bu komut ile sorgu planlayıcının elinden sıralı tarama aracını almış oluyoruz, o da artık diğer alternatiflere bakmak zorunda. Yukarıda Seq. Scan yapılan sorguyu aynen tekrarladığımızda:<br /><code><br />deneme=# set enable_seqscan = false;<br />SET<br />deneme=#  explain select * from metin where to_tsvector('basit', norm_text(tam_yazi)) @@ to_tsquery('basit', norm_text('ab'));<br />                                      QUERY PLAN                                       <br />-------------------------------------------------------------------------------------------<br />Index Scan using metin_tam_yazi_idx on metin  (cost=0.25..8.52 rows=1 width=336)<br /> Index Cond: (to_tsvector('basit'::regconfig, norm_text(tam_yazi)) @@ '''ab'''::tsquery)<br />(2 rows)<br /></code><br />Süper, index'imiz veritabanımız büyüdükçe sorgu planlayıcı tarafından daha da kullanılacak.<br /><br /><br /><h2>Sıralama ve İşaretlemeler</h2><br /><br />Peki herhangi bir aramada sıralamayı nasıl değiştirebiliriz? Ve hangi alanların eşleştiğiini nasıl öğreniriz?<br /><br />Sıralama konusu basitce şöyle:<br /><code><br />deneme=# select baslik, ts_rank(lexemes, to_tsquery('basit', 'Turkiye')) as rank from metin where lexemes @@ to_tsquery('basit', 'Turkiye');<br />        baslik           |   rank  <br />---------------------------+-----------<br />İhracat yüzde 35 geriledi | 0.0759909<br />(1 row)<br /></code><br />Burada tek yapılan ts_rank fonksiyonu ile tsvector ve aranılan sorgu kelimeleri arasındaki ilişki puanını seçmek. Bu basit örnek kullanılarak puana göre sıralama yapılabilir.<br /><br />Bunun dışında bir web sayfasında ilişki kurulan veri ile sorgunun nerelerde eşleştiğini işaretlemek sıkça kullanılan bir yöntem. Örneğin google, sorgularında eşlenen kelimeleri kalın harflerle veya sarı arka planda gösterebiliyor. Bunu PostgreSQL de -biraz sınırlı olsa da- yapabiliyor. ts_headline fonksiyonu bu işe yarıyor:<br /><code><br />deneme=# select ts_headline('basit', tam_yazi, to_tsquery('basit', 'mesela'))  from metin where lexemes @@ to_tsquery('basit', 'mesela');<br />                                                   ts_headline                                                   <br />---------------------------------------------------------------------------------------------------------------------<br /><b>Mesela</b> bazı ilçeler var ki, henüz altyapıları, kanalizasyon sorunları bile büyük ölçüde çözülmedi. Ben bizim<br />(1 row)<br /></code><br />ts_headline fonksiyonunun çok ilginç özellikleri var. Varsayılan olarak &lt;b&gt; ile etiketlenen eşleşmeyi değiştirebilirsiniz, kaç tane kelimenin verileceğini ayarlayabilirsiniz.<br /><br />ts_headline fonksiyonu arka planda tsvector verisini kullan<span style="font-weight:bold;">M</span>Iyor. tsvector'de pozisyon da tutulduğu için insan aksini düşünebilir ama ts_headline her seferinde baştan eşleşme yerlerini buluyor. Bu yüzden çok hızlı olduğu söylenemez. Eğer sizin istediğiniz esneklikte değilse başka bir yöntem ile (PHP?) işaretleme sağlanabilir.<br /><br /><h2>Sınırlamalar</h2><br />tsvector veri yapısının büyüklüğü en fazla 1 MB olmalı ve tsvector'deki pozisyon bilgisi 16383'den büyük olmamalı, yani bir dökümanda en fazla 16383 tane kelime bulunabilir.<br /><br />Eğer PostgreSQL'in tam metin arama yetenekleri sizi kesmezse daha esnek olan <a href="http://www.sphinxsearch.com/">Sphinx</a>'i deneyebilirsiniz.<br /><br /><br />Kolay gelsin.<br /><br /><br /><br />Referanslar:<br />PostgreSQL resmi dökümanları, örneğin: <a href="http://www.postgresql.org/docs/8.3/interactive/textsearch-intro.html">http://www.postgresql.org/docs/8.3/interactive/textsearch-intro.html</a><br />Tam metin sorgu bölümü için: <a href="http://www.postgresql.org/docs/8.3/interactive/textsearch.html">http://www.postgresql.org/docs/8.3/interactive/textsearch.html</a>