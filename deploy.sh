#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build


# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:abc-club/js-paradise.git master:gh-pages

git init
git add -A
git commit -m 'deploy'
git push
git subtree push --prefix dist origin gh-pages