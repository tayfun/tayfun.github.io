name: latex-makefile
layout: post
title: Latex Makefile
time: 2009-03-13 18:25:00 +02:00

I'm currently in the process of writing my thesis. I had created my own Makefile but <a href="http://xpt.sourceforge.net/tools/latexmake/">this one here</a> is one Makefile I'm happy that I found about. It has many latex utilities I had not known before (like texi2dvi) and it makes everything much easier for the latex writer.<br /><br />I've made some customizations so that evince is fired instead of xdvi and I've set the environment variable stuff inside the Makefile. I've also changed the default target (using .DEFAULT_GOAL special variable). Change as you please, and enjoy writing your work (instead of pulling your hair because of Latex!).
