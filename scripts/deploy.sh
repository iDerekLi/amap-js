# build version
AMapJSVersion="v2"

# build dev site
cross-env yarn docs:build
cross-env v=$AMapJSVersion yarn docs:build

# Pull remote code
mkdir temp_web
cd temp_web
git clone --depth 1 -b gh-pages --single-branch https://github.com/iDerekLi/amap-js.git
cd amap-js

# Merge code
rm -rf *.html *.js *.css *.map assets guide
rm -rf $AMapJSVersion/**
cp -rf ../../docs/.vuepress/dist/last/** .
mkdir $AMapJSVersion
cp -rf  ../../docs/.vuepress/dist/$AMapJSVersion/** $AMapJSVersion/

# Push origin
if [ -n "$(git status -s)" ];then
  git config user.name "Derek Li"
  git config user.email "lideyu888@163.com"
  git add -A .
  git commit -m "deploy"
  git push origin gh-pages
else
  echo "nothing to commit, working tree clean"
fi

# Clean Temp
cd ../../
rm -rf temp_web

# Done
echo "DONE, Bye~"
exit 0
