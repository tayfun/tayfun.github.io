name: javascript-dunyann-en-fazla-yanls
layout: post
title: JavaScript: Dünyanın en fazla yanlış anlaşılan programlama dili
time: 2009-02-04 22:30:00 +02:00

<span style="font-weight: bold;">Yazarı:<a href="http://crockford.com/"> Douglas Crockford</a><br />Çevirmen: Tayfun Şen<br />Orj. URL: <a href="http://javascript.crockford.com/javascript.html">http://javascript.crockford.com/javascript.html</a><br /></span><br />JavaScript, ya da diğer adlarıyla Mocha, LiveScript, JScript veya ECMAScript, dünyadaki en popüler programlama dillerinden biridir. Hemen hemen dünyadaki tüm kişisel bilgisayarlarda en azından bir tane JavaScript yorumlayıcısı (interpreter) kurulu ve etkin olarak kullanımdadır. JavaScript'in popülerliği tamamen onun WWW için betik dili olmasından ileri gelir.<br /><br />Popülerliğine rağmen çok az insan onun dinamik, objeye yönelik, genel kullanıma uygun bir programlama dili olduğunu bilir. Bu nasıl gizli kalmıştır? Neden bu dil bu kadar yanlış anlaşılmıştır?<br /><h2>İsim</h2>Java- öneki JavaScript'in bir şekilde Java ile ilişkili olduğunu, Java'nın alt kümesi olduğunu düşündürüyor. Öyle görünüyor ki bu isim karışıklık yaratmak için özellikle seçilmişti, ve karışıklıktan da yanlış anlamalar doğuyor. JavaScript yorumlanan Java değildir. Java farklı bir dildir. JavaScript farklı.<br /><br />JavaScript ile Java arasında söz dizimi yönünden benzerlikler vardır, nasıl ki Java ile C arasında da aynı benzerlik varsa. Ama Java nasıl ki C'nin alt kümesi değilse JavaScript de Java'nın alt kümesi değildir. Aslında JavaScript Java'nın tasarlandığı (ilk adıyla Oak) işler için daha iyi ve uygundur.<br /><br />JavaScript Java'nın geliştirildiği Sun Microsystems şirketinde değil, Netscape'de geliştirildi. İlk ismi LiveScript idi, ama bu isim yeterince kafa karıştırıcı değildi.<br /><br />-Script soneki bunun bir betik dili olduğunu, tam anlamıyla bir programlama dili olmadığını çağrıştırıyor. Ama aslında bu sadece bir özelleşme meselesi. C ile karşılaştırıldığında JavaScript performansa karşılık dinamiklik ve ifade gücü kazanmıştır.<br /><h2>C kıyafetlerinde Lisp</h2>JavaScript'in -köşeli parantezleri ve biçimsiz 'for' ifadesi ile- C'ye benzeyen sözdizimi onun herhangi bir yordamsal (procedural) dil gibi görünmesine sebep olabilir. Bu aslında bir yanılgıdır çünkü JavaScript aslında Lisp ve Scheme gibi fonksiyonel dillere C veya Java'dan daha fazla benzer. JavaScript'in liste yerine dizileri (array) ve özellik listeleri yerine de objeleri vardır. Fonksiyonlar birinci sınıftır. Closure'lara sahiptir. Lambda fonksiyonlarına o kadar parantez eşlemeye gerek kalmadan sahip olabilirsiniz.<br /><h2>Evrimi</h2>JavaScript Netscape Navigator tarayıcısında çalışmak için tasarlanmıştı. Yaygınlaşması üzerine neredeyse tüm tarayıcılarda standard araçlardan biri oldu. Bundan dolayı JavaScript çok değişti, farklı özellikler kazandı. JavaScript ağla ilgili olmayan birçok uygulama için uygun bir dildir.<br /><h2>Değişiklikler</h2>JavaScript'in ilk sürümleri oldukça zayıftı. İstisna işlemek, iç fonksiyonlar ve miras (exception handling, inner functions, inheritance) gibi özellikler yoktu. Şimdi JavaScript tamamen objeye yönelik bir dildir. Ama JavaScript'e ilişkin çoğu yargı onun toy zamanlarından kalmaktadır.<br /><br />JavaScript'in gelişmesine katkıda bulunan ECMA komitesi dil için eklentiler geliştiriyor. Bu iyi niyetli de olsa JavaScript'in en büyük problemlerinden birini büyütüyor: Daha şimdiden JavaScript'in birçok sürümü var. Bu insanların kafasını karıştırıyor.<br /><h2>Tasarım hataları</h2>Hiçbir dil mükemmel değildir. JavaScript'in de kendine has tasarım hataları vardır, örneğin +'yı hem toplama hem birleştirme için kullanarak tip zorlaması yapmak ve hataya sıkça neden olan ve bu yüzden sakınılması gereken 'with'. Ayrılmış kelime (reserved words) kuralları çok sıkı. Otomatik noktalı virgül ekleme büyük bir hataydı, basit şekilli düzenli ifadeler yazımı da öyle. Bu hatalar programlama hatalarına yol açtılar ve bu dilin tüm tasarımını töhmet altında bıraktı. Neyse ki iyi bir 'lint' programı ile bu hataların çoğu giderilebilir.<br /><br />Dilin tasarımı temelde oldukça iyi. İlginç olan şu ki ECMAScript komitesi bu hataları gidermekle ilgilenmiyor. Yapmak istedikleri şey yeni hatalar eklemek sanki.<br /><h2>Kötü JavaScript yorumlayıcıları</h2>Eski JavaScript yorumlayıcıları çok hata içeriyordu. Bu, dile kötü etki yaptı. Bunu daha da kötüleştiren şey bu yorumlayıcıların kötü tarayıcılarla gelmeleriydi.<br /><h2>Kötü kitaplar</h2>Piyasadaki hemen hemen tüm kitaplar çok kötü. Hatalara, kötü örneklere sahipler ve kötü alışkanlıkları yayıyorlar. Dilin önemli bölümleri ya kötü açıklanıyor ya da hiç. Onlarca JavaScript kitabı inceledim ve sadece bir tanesini tavsiye edeibilirim: David Flanagan'dan "JavaScript: The Definitive Guide".<br /><h2>Standart altı standart</h2>ECMA dilin resmi beyannamesini (specification) yayınlar. Bu beyanname çok düşük kalitededir. Okumak ve anlamak çok zor. Bu durum aslında kötü kitaplar sorunu ile bağlantılı çünkü yazarlar bu dökümanı okuyarak kendilerini geliştiremediler. ECMA ve TC39 komitesi kendilerinden utanmalılar.<br /><h2>Amatörler</h2>JavaScript yazan çoğu insan programcı değiller. İyi program yazmak için gerekli eğitime ve disipline sahip değildirler. JavaScript o kadar güçlü bir ifade yeteneğine sahiptir ki onlar yine de yararlı şeyler yazabiliyorlar. Bundan dolayı JavaScript'in sadece amatörlere hitap ettiği ve profesyonel programlama için uygun olmadığı düşüncesi yayıldı. Bu tamamen gerçek dışıdır.<br /><h2>Objeye Yöneliklik</h2>JavaScript objeye yönelik midir? Objelere sahiptir ve metodları ile objelerin üzerinde işlem yapabilir. Objeler başka objelere sahip olabilirler. JavaScript'te sınıf kavramı yoktur ama constructor metodları sınıfların yaptığı şeyleri yapabilirler (çeşitli veri ve metodları kapsamak gibi). JavaScript'te objeye yönelik miras kavramı yoktur, ama prototype temelli miras vardır.<br /><br />Obje sistemleri inşa etmenin iki yolu miras ve birleştirmedir. JavaScript ikisini de yapabilir, ama dinamik doğası sayesinde birleştirmede daha iyidir.<br /><br />Bazıları JavaScript'in bilgi saklama yeteneğine sahip olmadığından gerçekten objeye yönelik olmadığını söylerler. Yani, objeler özel metod ve verilere sahip olamazlar, her şey kamuya açık, genel (public) olmak zorundadır.<br /><br />Ama aslında olay şudur ki JavaScript objelerinin özel veri ve metodları olabilir. Yine de az insan bunu anlar çünkü JavaScript dünyanın en yanlış anlaşılan dilidir.<br /><br />Bazıları JavaScript'in gerçekten objeye yönelik bir dil olmadığını söylerler, çünkü miras yeteneği yoktur. Ama aslında JavaScript sadece klasik mirası desteklemekle kalmaz, diğer tekrar kod kullanma özelliklerini de destekler.<br /><br /><br />2001, Douglas Crockford.