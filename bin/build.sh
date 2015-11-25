#!/usr/bin/env bash

rm -rf public/
mkdir public
cp src/html/index.html public/
PROD_BUILD=1 ./node_modules/.bin/webpack --progress --colors
