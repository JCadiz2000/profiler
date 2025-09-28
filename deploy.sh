#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run generate

# navigate into the build output directory
cd .output/public

# if you are deploying to https://<USERNAME>.github.io
# echo 'yourusername.github.io' > CNAME

git init
git checkout -b gh-pages
git add -A
git commit -m "deploy"

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:JCadiz2000/profiler.git gh-pages

cd -
