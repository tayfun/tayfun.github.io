#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Tayfun Sen'
SITENAME = u'Rastgele Düşünceler'

PATH = 'content'

TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = u'tr'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 5

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
FILENAME_METADATA = '(?P<date>\d{4}-\d{2}-\d{2})-(?P<slug>.*)'

OUTPUT_RETENTION = ('.git')

ARTICLE_LANG_SAVE_AS = DRAFT_LANG_SAVE_AS = PAGE_LANG_SAVE_AS = \
    CATEGORY_SAVE_AS = TAG_SAVE_AS = AUTHOR_SAVE_AS = ''

LOAD_CONTENT_CACHE = False
ARTICLE_URL = ARTICLE_SAVE_AS = '{date:%Y}/{date:%m}/{slug}.html'
# ARTICLE_SAVE_AS = '{date:%Y}/{date:%m}/{slug}.html'
