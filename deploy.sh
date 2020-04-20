#!/bin/bash
set -ex

harp compile . /tmp/kusalakari.org
rsync -azhv --delete /tmp/kusalakari.org/ ninegene1:/var/www/kusalakari.org/public/
ssh ninegene1 -- "cd /var/www/kusalakari.org/ && git add . && git commit -m 'script deploy from $(hostname)'"
