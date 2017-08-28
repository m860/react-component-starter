#!/usr/bin/env bash

# $1 - project name
# $2 - project path

if [ -z "$1" ];then
    echo "请输入项目名称"
    exit
fi

if [ -z "$2" ];then
    echo "请输入项目路径"
    exit
fi

if [ ! -d "$2" ];then
    mkdir "$2"
fi

cp -r ./src "$2"
cp -r ./test/ "$2"
cp ./.babelrc "$2"
cp ./.eslintrc "$2"
cp ./.gitignore "$2"
cp ./.npmignore "$2"
cp ./build.sh "$2"
cp ./index.js "$2"
cp ./LICENSE "$2"
cp ./package.json "$2"
cp ./README.md "$2"
cp ./webpack.config.js "$2"