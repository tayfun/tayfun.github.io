#!/usr/bin/env python
from os import listdir
import re

yaml_begin = re.compile("^---\s*\n")
yaml_end = re.compile("---\s*\n")

for filename in listdir('content'):
    with open('content/%s' % filename, 'r') as myfile:
        content = myfile.read()
    if len(yaml_end.findall(content)) < 2:
        print("Skipping file %s (two delimiters not found)" % filename)
        continue
    if len(yaml_begin.findall(content)) == 0:
        print("Skipping file %s (first delimiter not found)" % filename)
        continue
    content = yaml_begin.sub('', content, 1)
    content = yaml_end.sub('\n', content, 1)
    with open('content/%s' % filename, 'w') as myfile:
        myfile.write(content)
