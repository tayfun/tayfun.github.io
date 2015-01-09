name: dns-ve-vpn-nedir
layout: post
title: "DNS, DPI ve VPN nedir?"
time: 2014-03-22T20:30:36+02:00
tags: ["teknoloji"]


AKP, pislikler ortaya saçılmasın diye twitter'ı yasaklamaya çalışıyor. Öyle görünüyor ki seçimlerden sonra da özgürlüklere baskı devam edecek. Ülkemizdeki herkes birer ağ uzmanı oldu neredeyse, ama gerçekte DNS, VPN ne anlama geliyor? Hükümetin son sansür yasası ile hazırlıklarını bitirdiği Deep Packet Inspection, yani DPI, neler getiriyor?

DNS Nedir?
---------

Önce temelden başlayalım, ve basitleştirerek anlatayım. Google Chrome tarayıcısında adres çubuğuna www.google.com yazdığınızda bilgisayarınızın ilk yaptığı işlerden biri, DNS sunucusuna gidip bu web sayfasının bulunduğu bilgisayarın adresini almak olur. Bu adres, tahmin ettiğiniz üzere IP adresidir ve noktalarla ayrılan 4 tane rakamdan oluşur.

BTK'nın uzun zamandır yaptığı sansür DNS üzerinden çalışıyordu. Örnek olarak twitter.com adresine girmek istediğinizde varsayılan olarak TTNET DNS sunucularını kullanıyorsunuz. TTNET ise size twitter'ın gerçek IP adresi yerine mavi sansür sayfasının bulunduğu IP adresini bilgisayarınıza iletiyor. Bu yüzden siz twitter sayfası yerine sansür sayfasına ulaşmış oluyordunuz.

Bunu alt etmek çok zor değil. Zaten 2 seneden fazla devam eden youtube yasağı sırasında halkımız DNS uzmanı olmuştu. 8.8.8.8 veya 8.8.4.4 şeklindeki sansür yapmayan google DNS sunucuları kullanınca twitter'a erişebilir olduk.

Bu sabahtan itibaren Google DNS sunucuları da yasaklandı. Bizim bilgisayarımız twitter.com adresinin IP numaralarını isterken çeşitli paketler yolluyordu. BTK, bu sabahtan itibaren bu paketlerin geçmesini engellemeye başladı. Bundan dolayı tekrar twitter'a girememeye başladık.

OpenDNS, Yandex ve daha bir çok kurumun DNS'leri halen kullanılabilir. Ancak DNS adreslerini değiştirmesini bilmeyen pek çok insan var, bunun yanında mobil cihazlarda bazen DNS değiştirmek çok çok zor olabiliyor.

DPI Nedir?
--------

Son çıkan yasa ile toptan site kapatmak yerine belirli adresleri hızlıca kapatmanın hukuku dayanağı yapıldı. Ancak adres bazlı yasaklar teknik açıdan çok zor ve mahremiyet yönünden çok sakıncalı. Adres bazlı filtreleme yapmak için kablodan geçen tüm paketlerin içeriğine bakmak ve eğer sansürlenmek istenen adres varsa o paketleri geçirmemek gerekiyor. Eğer herhangi bir şifreleme yöntemi kullanmıyorsanız kredi kart bilgilerinizden e-postalarınıza bir çok konuda devletin bizi gözetliyor olması anlamına geliyor bu. Aynı zamanda internetimizin de yavaşlaması demek bu ve ben son zamanlarda sıkça karşılaştığım bağlantı ve SSL hatalarının bundan olduğunu düşünüyorum.

VPN Nedir?
---------

Bu noktada VPN sahneye çıkıyor. VPN özel bir ağ yazılımı sayesinde internete çıkışlarınızı belirli bir bilgisayardan gerçekleştirmeniz anlamına geliyor. Örnek olarak ABD'de bulunan bir VPN sunucusu kiraladığınızda internet bağlantınız o bilgisayar üzerinden gerçekleştiriliyor. Twitter'a ABD'den bağlanıyormuş gibi görünüyorsunuz ve dolayısıyla Türkiye'deki sansürden etkilenmiyorsunuz. Eğer kişisel bilgisayarınız ile VPN sunucusu arasında şifreleme yöntemi kullanıyorsanız, o zaman büyük biraderin gözlerinden kaçmış oluyorsunuz. Tabii yine kesin kurtuluş yok, eğer bir dava söz konusu olur ve VPN hizmeti aldığınız servise mahkeme kararı giderse bu şirket sizin bilgilerinizi devlete verebilir. Yine de yasaklardan kurtulmak için iyi bir seçenek.

İnternette bir çok VPN hizmeti sağlayan şirket var. Bunlara bir göz atmanızı öneriyorum. AKP'nin kasetleri çıkıp pislikler ortaya saçıldıkça özgürlüklerin üzerine daha fazla gideceklerdir diye düşünüyorum. "Hiçbir korkuya benzemez halkını satanların korkusu", değil mi?
