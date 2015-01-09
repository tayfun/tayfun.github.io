name: could-not-open-pythonstartup-no-such
layout: post
title: "Could not open PYTHONSTARTUP: No such file"
time: 2009-02-11 23:10:00 +02:00

If you have set up your PYTHONSTARTUP environment variable to point to ~/.pythonrc.py in your .bashrc file or something similar but you get errors of the sort:<br /><code><br />tayfun@olive:~$ python<br />Python 2.5.2 (r252:60911, Jan  4 2009, 17:40:26) <br />[GCC 4.3.2] on linux2<br />Type "help", "copyright", "credits" or "license" for more information.<br />Could not open PYTHONSTARTUP<br />IOError: [Errno 2] No such file or directory: '~/.pythonrc.py'<br />>>> <br /></code><br />even though your file is there, simply set your environment variable with the full path, ie. /home/tayfun/.pythonrc.py in my case. <br /><br />Hope this helps you if you stumbled into this error too :)
