name: phpunit-and-cannot-redeclare-class
layout: post
title: PHPUnit and "Cannot redeclare class Config" errors
time: 2009-11-11 17:02:00 +02:00
tags: [programming, php]

I have lost sometime trying to solve these errors so I better document it here. So, if you are running phpunit but getting errors of the sort:<br /><code><br />PHP Fatal error:  Cannot redeclare class Config in /opt/local/lib/php/PEAR/Config.php on line 44<br />PHP Stack trace:<br />PHP   1. {main}() /opt/local/lib/php/bin/phpunit:0<br />PHP   2. PHPUnit_TextUI_Command::main() /opt/local/lib/php/bin/phpunit:52<br />...<br /></code><br />Then you can get rid of this error by simply deleting the Config.php file inside the PEAR directory. Config library inside PEAR directory is not up to date it seems, with many deprecation warnings also being shown. After you remove the Config.php file everything should be good to go.<br /><br />On an unrelated note, "php --ini" shows you the ini files used by php and "php --ri xdebug" for example shows you information about the xdebug module. These commands are indispensable if you are trying to troubleshoot your php problems.
