name: no-space-left-on-device
layout: post
title: No space left on device?
time: 2009-06-06 02:01:00 +03:00

Today I was trying to install a PHP module but I kept getting "no space left" errors. This was interesting because my disks were not full in terms of both space and the number of inodes as evidenced by "df -k" and "df -i" commands. Then I found out that <a href="http://www.linuxquestions.org/questions/linux-general-1/cp-no-space-left-on-device-but-df-does-not-agree-21996/">file system errors</a> might be a cause for this. I didn't want to check mounted disks using fsck program so I used <a href="http://www.kernelhardware.org/linux-force-disk-check-fsck/">this page</a> as a reference to easily check the file system on the next boot simply by creating a forcefsck file inside the root directory. After the file system check, I can confirm that the error went away. <br /><br />I suppose file system checking should be one of the first things one should check in such a irregularity.
