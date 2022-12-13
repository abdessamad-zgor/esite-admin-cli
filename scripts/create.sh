#!bin/bash

title = $1
dirname= ${title/" "/-}

mkdir $dirname
cd $dirname
git init
gh repo create $dirname --public
echo "{\"title\": $title }">log.json
echo "/node_modules">.gitignore
git add .
git commit -m "first log commit"
git branch -M main
git remote add origin git@github.com:hornedout-law/$dirname.git
git push -u origin main
