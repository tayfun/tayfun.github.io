name: php-warning-module-x-already-loaded
layout: post
title: PHP Warning:  Module X already loaded
time: 2009-10-01 12:22:00 +03:00
tags: programming

I just found the reason for this annoying message. Every time I run PHP, it used to throw me a bunch of errors of the form:<br /><code><br />PHP Warning:  Module 'mysql' already loaded in Unknown on line 0<br /><br />Warning: Module 'mysql' already loaded in Unknown on line 0<br />PHP Warning:  Module 'mysqli' already loaded in Unknown on line 0<br /><br />Warning: Module 'mysqli' already loaded in Unknown on line 0<br />PHP Warning:  Module 'pdo_mysql' already loaded in Unknown on line 0<br /><br />Warning: Module 'pdo_mysql' already loaded in Unknown on line 0<br /></code><br />It was very irritating because I checked and re-checked my php.ini file to see if I was including the aforementioned modules more than once. So, if you are receiving these kinds of errors check to see if your php.ini file has something like<br /><code><br />extension=mysql.so<br />extension=mysqli.so<br />extension=pdo_mysql.so<br /></code><br />more than once. The trouble with PHP is that you could have many php.ini files on your system that you didn't know about. PHP <abbr title="Command Line Interface">CLI</abbr> uses a different file than <abbr title="Common Gateway Interface">CGI</abbr> and I also have many other PHP installations, for example those that came with Aptana IDE.<br /><br />To find the .ini file you are interested in, the best you can do is to run "$ php -i" which basically calls phpinfo() and echoes the output. This will print out the .ini file it is using, allowing you to find the file causing trouble. Here's what I found:<br /><code><br />Configuration File (php.ini) Path => /opt/local/etc/php5<br />Loaded Configuration File => /opt/local/etc/php5/php.ini<br />Scan this dir for additional .ini files => /opt/local/var/db/php5<br />Additional .ini files parsed => /opt/local/var/db/php5/apc.ini,<br />/opt/local/var/db/php5/curl.ini,<br />/opt/local/var/db/php5/mysql.ini,<br />/opt/local/var/db/php5/imagick.ini,<br />/opt/local/var/db/php5/memcache.ini,<br />/opt/local/var/db/php5/pecl_http.ini,<br />/opt/local/var/db/php5/readline.ini,<br />/opt/local/var/db/php5/tidy.ini,<br />/opt/local/var/db/php5/xdebug.ini,<br />/opt/local/var/db/php5/zlib.ini<br /></code><br />Aha! So there's all the other .ini files that are included. I didn't know about this. So for my problem, the simple fix is removing the mysql.ini file from that directory. Everything is fine now. Enjoy :-)