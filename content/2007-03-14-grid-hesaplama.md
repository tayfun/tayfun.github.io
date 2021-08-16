name: grid-hesaplama
layout: post
title: Grid Hesaplama
time: 2007-03-14 18:04:00 +02:00
tags: teknoloji

Bilgisayarımda Globus toolkiti derlenirken günlüğüme bir yazı daha yazayım dedim. Grid hesaplama dersi alıyorum bu dönem ve yarına bir ödevim var. Yumurta teorisine uyarak son güne kadar bekledim. Bakalım yetiştirebilecek miyim.<br /><br />Şimdi temel bilgilere geçelim. Grid hesaplama temel olarak bir sürü bilgisayarı tek bir iş için çalıştırmak demek. Biraz "Küme Hesaplama" (Cluster Computing) kavramına benziyor ama Grid Hesaplama aslında kümelerin kümesi biraz da. Bu ne demek, bu Grid Hesaplama uçlarının her birinin dağıtık olarak dünyanın farklı yerlerinde bulunabilmesi anlamına geliyor. Yani Grid Hesaplama kullanarak işinizin bir bölümünü Türkiye'de, bir bölümünü dünyanın diğer ucu olan Japonya'da yaptırabilirsiniz. Bunun ne önemi var demeyin, hesaplama gücünüz çok büyük oranda artıyor. Bu da birçok bilimcinin istediği bir şey. Öyle algoritmalar varki tek bilgisayarda aylarca sürecekken grid ile tahammül edilebilir bir zamanda bitiriliyor.<br /><br />Peki bir işiniz var, Grid üzerinde çalıştırmak istiyorsunuz, ne yapmanız gerekiyor? Öncelikle algoritmanızı kontrol edip paralel çalışabilir şekilde değiştirmeniz gerekiyor. Algoritmanızı paralel hale getirdikten sonra MPI veya paralel çalışma için geliştirilmiş kütüphane yardımı ile programınızı paralelleştirmelisiniz. Bundan sonrası bürokrasi oluyor, Ulakbim Grid takımına başvurup kullanıcı adı ve şifre alıyorsunuz ve canavar bir işlem gücünü kullanmaya başlıyorsunuz. Grid'e başvururken yapmak istediklerinizin birtakım kriterlere uyması gerektiğini söylememe gerek yok sanırım.<br /><br />Daha fazla bilgi için <a href="http://www.grid.org.tr">Tübitak Grid Sayfası</a>