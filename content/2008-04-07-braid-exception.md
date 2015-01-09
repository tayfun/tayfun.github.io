name: braid-exception
layout: post
title: Braid Exception
time: 2008-04-07 01:23:00 +03:00

If you are trying to use Braid, but keep getting errors of the sort:<br /><br /><code>braid: Setting up remote branch and fetching data.<br />braid: Error occured: <br />braid: Resetting braid/track to 1bb3e1a35699157e0035055306ad456f8c09b67c.<br />braid: Checking out branch 'master'.<br />braid: An exception has occured:  ()</code><br /><br />It means you are missing git-core and git-svn packages on your system. On Ubuntu/Debian it's as simple as:<br /><br /><code>sudo aptitude install git-core git-svn</code><br /><br />To continue your work.
