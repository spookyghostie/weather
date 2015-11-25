#!/usr/bin/env bash

rm -rf public/
mkdir public
cp src/html/index.html public/
./node_modules/.bin/webpack -d --progress --colors --watch
