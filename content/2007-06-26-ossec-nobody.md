name: ossec-nobody
layout: post
title: Rule: 40101 + OSSEC + nobody
time: 2007-06-26 18:48:00 +03:00

OSSEC sistem loglarını inceleyerek bir gariplik durumunda bana mail atar. Her sabah kural 40101 yüzünden bana mail atarak nobody kullanıcısının sisteme girdiğinden şikayet ediyordu. Biraz inceleyerek bu kuralın neden tetiklendiğini öğrendim.<br /><br />40101. kural ossec/rules/attack_rules.xml dosyası içerisinde tanımlanmış. Bu kurala göre sakıncalı sistem kullanıcılarının hiçbir zaman sisteme login olmamaları gerekiyor, "nobody" kullanıcısı da bunlardan biri. /var/log/auth.log dosyasına baktığımda her sabah 6:25'de bu "sakıncalı" kullanıcının login olduğunu gördüm. İlk işim cron'daki zamanlanmış görevlere bakmak oldu. Günde bir defa olduğu için cron.daily dizini içerisindeki betiklerden biri olması muhtemeldi ve nitekim her gün 6'yı 25 geçe çalışan "find" isimli ve locate komutunun kullandığı veritabanını güncelleyen betiğin "nobody" kullanıcısı olarak çalıştığını gördüm. Yani aslında bir nevi yanlış alarm. Yine de sanırım kuralı değiştirmeyeceğim, ileride bir gün doğru alarm da olabilir.
