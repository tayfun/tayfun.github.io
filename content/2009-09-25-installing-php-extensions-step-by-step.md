name: installing-php-extensions-step-by-step
layout: post
title: Installing PHP Extensions - A Step by Step Guide
time: 2009-09-25 15:26:00 +03:00
tags: programming

I recently installed APC (Alternative PHP Cache) on one of our servers and I want to provide a step by step guide so that others can benefit from my experience. We had both php4 and php5 installed in the server and I wanted to install the accelerator for php4 specifically. When I used pecl to install the extension, it ended up in the php5 modules directory. <br /><code><br />$ sudo pecl install apc<br />downloading APC-3.0.19.tgz ...<br />Starting to download APC-3.0.19.tgz (115,735 bytes)<br />.....................done: 115,735 bytes<br />47 source files, building<br />running: phpize<br />Configuring for:<br />PHP Api Version:         20041225<br />Zend Module Api No:      20060613<br />Zend Extension Api No:   220060519<br />[some more output]<br />...<br />install ok: channel://pecl.php.net/APC-3.0.19<br />You should add "extension=apc.so" to php.ini<br /></code><br />Since I wanted to have install APC for php4, I went down the manual way:<br /><span style="font-weight:bold;">Step1:</span> Download and unzip APC<br /><code><br />$ wget http://pecl.php.net/get/APC-3.0.19.tgz<br />$ tar xvzf APC-3.0.19.tgz <br />$ cd APC-3.0.19/<br /></code><br /><span style="font-weight:bold;">Step2:</span> Use phpize to prepare the source code. If you do not have phpize, you can get it from php4-dev (or php5-dev if you are using php5) package on Debian.<br /><code><br />$ phpize<br /></code><br /><span style="font-weight:bold;">Step3:</span> Use ./configure to create library settings etc. Make sure correct php-config is on your path. Then do make. You will have the apc.so module file in the modules directory in the current path. You can copy that to your php modules directory or ask make install to do it.<br /><code><br />$ ./configure<br />$ make<br />$ make install<br /></code><br /><span style="font-weight:bold;">Step4:</span> Ensure that the module is copied to the correct place. As a final step, you need to edit your php.ini file so that the module is loaded:<br /><code><br />extension=apc.so<br /></code><br />That's all, enjoy your new bytecode optimizations. I'll write another post detailing what speedup I was able to observe.