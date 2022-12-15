#!/bin/bash

basetemp="/home/abdessamadz/work/portfolio/esite/admin-cli/templates/base/**"

mkdir ${1// /-}
cd ${1// /-}
git init
gh repo create hornedout-law/${1// /-} --public
echo "{\"title\": $1 }">log.json
echo "/node_modules">.gitignore
cp $basetemp .
git add .
git commit -m "first log commit"
git branch -M main
git remote add origin git@github.com:hornedout-law/${1// /-}.git
git push -u origin main
