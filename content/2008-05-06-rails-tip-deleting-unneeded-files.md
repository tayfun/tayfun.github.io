name: rails-tip-deleting-unneeded-files
layout: post
title: Rails tip - Deleting unneeded files
time: 2008-05-06 10:18:00 +03:00

If you want to remove all files associated with a model of yours, that is removing the controller, migration, tests etc. than you can use the script/destroy command to do just that. The argument to remove all the files is "scaffold" so that:<br /><code>ruby script/destroy scaffold pages</code><br />would do.<br />Run destroy with -p flag to see which files would be affected.<br /><br />Note that if you already have set up an application than you would need a little more work to reconfigure your database. You would have a lot of data in your other tables so you cannot drop the database and re-migrate it again. In that case, it's better to connect to the database directly and drop the unneeded table.<br /><br />[UPDATE: It seems that sometimes destroy script is unable to delete the related line in routes.rb file. In that case, you'll notice it because your application won't work, edit the file and put it in correct form.]
