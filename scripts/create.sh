#!/bin/bash


mkdir ${1// /-}
cd ${1// /-}
git init
gh repo create hornedout-law/${1// /-} --public
echo "{\"1\": $1 }">log.json
echo "/node_modules">.gitignore
git add .
git commit -m "first log commit"
git branch -M main
git remote add origin git@github.com:hornedout-law/${1// /-}.git
git push -u origin main
