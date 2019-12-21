name: nagios-for-monitoring
layout: post
title: Nagios for Monitoring
time: 2009-12-10 17:21:00 +02:00
tags: linux

<h2>Why is monitoring important?</h2><br />Monitoring the health of your web applications is of utmost importance because, well, measuring puts you on the map and it tells you how well you are doing. Measuring performance, finding about bottlenecks and getting notified of troubles as fast as possible is something every web developer craves about. In addition to this, by having data/statistics about your application you can quickly determine if a modification you have just made is good or bad. In web development -as in many other fields- there are no silver bullets. A cookbook solution which may as well work for 90% of web applications may not be suitable for your case. Your so-called performance improvement might not affect at all, or worse it might start a new set of problems. This is why you should have a weekly/monthly/yearly data for your web application where you can see the patterns and anomalies.<br /><br /><h2>Nagios (and others?)</h2><br />We needed a flexible web monitoring solution for <a href="http://www.JotForm.com">JotForm</a>. We had used several other commercial products before but they were never good enough. I knew about Nagios (and Ganglia along with it) from my work at METU Computer Center and had good thoughts about it. Nagios in the meantime have moved on to version 3.2 and got quite complicated. I wanted to use Tobi Oetiker's graphing toolbox (MRTG and RRDtool) with Nagios and have some graphics ready as well. This is because it is always much more easier to visualize data using graphics, finding patterns becomes a less cumbersome task. The trouble with this is that it is not easy to configure Nagios to generate and use these graphs.<br /><br />There are many <a href="http://exchange.nagios.org/directory/Addons/Graphing-and-Trending/">add-ons for Nagios for generating graphs and trend analysis</a>. Most of these are either really old or lacking documentation or both. I decided to check out other similar software which might make the experience a bit more pleasant. Surely enough there are many packages/programs that use Nagios and promise an easier solution. <a href="http://www.opsview.org/">Opsview</a> for example packages Nagios with a user interface developed with Catalyst Web Framework. There is also a Nagios fork called <a href="http://www.icinga.org/">Icinga</a> which has a really nice GUI developed using ExtJS (the grid view is noticed from ExtJS directly :)). Icinga seemed to be a good alternative to Nagios as well.<br /><br /><h2>Installing Nagios and pnp4nagios Add-on</h2><br />So why did I choose Nagios and not for example Opsview or Icinga? Well, I thought I didn't really delve into the complexity of Nagios and so I wouldn't really appreciate the simplicity behind these other tools. Also, I would like to be in charge of my software and since these other tools basically hide Nagios' complexity which I didn't like. It would have been a different story if there were a contender to Nagios that was written from scratch. I looked to the Debian repositories for Nagios but it was too old there (1.6 in repository whereas the current version is 3.2!). So, I downloaded Nagios and went to look for add-ons as well.<br /><br />I came across pnp4nagios add-on which is relatively new but actively maintained and used this add-on to enhance Nagios. I will now be describing my experiences involving the installation of Nagios 3.2 and pnp4nagios 0.6 on a Debian box. I think most of the instructions will fit into any other Linux distribution so I hope these will be helpful for others as well. I think I also will come back to these instructions whenever a need arises.<br /><br />Download Nagios core <b>and</b> the Plugins. To install Nagios you need a web server (of course!) and gd library if you also want various CGIs too. Repository name for the gd library on the Debians is libgd2-xpm-dev so go on and install it beforehand. Nagios documentation is hidden behind various pages on the website but you wont be experiencing much trouble if you go through <a href="http://nagios.sourceforge.net/docs/3_0/quickstart.html">quickstart installation guide</a>. I followed the <a href="http://nagios.sourceforge.net/docs/3_0/quickstart-fedora.html">Fedora guide</a> since there were no instructions specific to Debian that was up to date. Try to use the default locations as it will be handy for configuring add-ons later on.<br /><br />One problem I had with Nagios was with two CGIs called trends.cgi and statusmap.cgi. They didn't get to compile first time and I had to tinker around the configuration options and the Makefile to see what was going on. I'm not sure what else I did but I think I installed libjpeg-dev and libpng-dev that were not installed before. In the end I had them compiled and copied them to the sbin directory under nagios and they worked.<br /><br />One command that is really helpful is asking nagios to check the configuration file:<br /><br /><code>$ sudo /usr/local/nagios/bin/nagios -v /usr/local/nagios/etc/nagios.cfg</code><br /><br />After the installation you can see what default settings can show you by going to the web interface. If you are looking for some nice graphs at this point you will be disappointed because there will be no graphs waiting for you. For that, you need to install add-ons and pnp4nagios seems to be one good solution for that. I installed <a href="http://docs.pnp4nagios.org/pnp-0.6/start">PNP 0.6 according to the nice documentation</a> provided which is really nice because documentation is what sucks for most open source products. I did the configuration and integrated the web front end with nagios. <br /><br />The configuration verification command that I presented for nagios earlier on has a PNP counterpart that is really useful. Like the nagios version, it checks the configuration files for errors and reports them to you. Very useful for catching that typo you made:<br /><br /><code>$ sudo /usr/local/pnp4nagios/libexec/verify_pnp_config.pl -m "sync"</code><br /><br />After you install PNP, you need to restart the Nagios daemon:<br /><br /><code> $ sudo /etc/init.d/nagios restart </code><br /><br />If everything went according to plan, you should have a working installation of Nagios along with some pretty nice graphs. Now go on to the <a href="http://nagios.sourceforge.net/docs/3_0/monitoring-linux.html">configuration part and start monitoring other servers</a>.