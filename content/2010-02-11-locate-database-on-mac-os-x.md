name: locate-database-on-mac-os-x
layout: post
title: Locate Database on Mac OS X
time: 2010-02-11 11:11:00 +02:00
tags: rants

OK, I'm here for a quick tip. I use <code>locate</code> to find files and folders a lot, especially when I'm using a system I'm not very familiar with. Mac OS X is one such system, since I've only been using it for the last few months. The problem is, Mac's have everything scattered around, and in places where a regular Linux user would not look. Take <code>updatedb</code> command for example, it is found on most Linux distributions and can be invoked quite easily on the command line. For the Mac OS X, it is hidden in the directory <code>/usr/libexec/</code> which is not even in the root path! And to compound that, its name is <code>locate.updatedb</code>, oh thanks Apple! <br /><br />How on earth am I supposed to find this program like that? [ I bet you didn't think about that eh, Steve Jobs? Just kidding :) ]<br /><br />Anyhow, here's some commands to make your life easier:<br /><code><br />$ sudo ln -s  /usr/libexec/locate.updatedb /usr/bin/updatedb<br />$ sudo updatedb<br /></code><br />Now you can run <code>updatedb</code> like you would on a Linux box.
