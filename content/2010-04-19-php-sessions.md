name: php-sessions
layout: post
title: PHP Sessions
time: 2010-04-19 11:13:00 +03:00
tags: php, programming

I recently found out that the directory we kept PHP session files had more than 2 million files. Now that's a lot of files and even though it is less than ~55 million maximum allowed on a typical linux system, we had to act fast. On Linux boxes number of files allowed is determined by the number of inodes and this can be viewed with the following command: <br /><code><br />$ df -i <br /></code><br />Which will give you number of inodes you are using and how much more you can use.<br /><br />I went through <a href="http://us.php.net/manual/en/session.configuration.php">PHP documents on sessions</a> and checked our PHP configuration file php.ini. It turns out that Debian systems does not want PHP to do its garbage collection itself and tries to remove old sessions using a simple cron job. The problem was we were using another directory for storing sessions and not the default "/var/lib/php5". So PHP wasn't removing old sessions because "session.gc_probability" was set to 0 by Debian and Debian cron job wasn't removing these sessions because the sessions were not in their default location. We enabled PHP's garbage collector and modified the cron job so that it uses the correct folder now. Now we have two checks in place for removing old sessions.<br /><br />This is something to keep in mind if you find yourself with a lot of session files. Hope this helps others.