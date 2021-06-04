# build version
AMapJSVersion="v2"

# build dev site
cross-env yarn docs:build
cross-env v=$AMapJSVersion yarn docs:build

mkdir temp_web
cd temp_web

git clone --depth 1 -b gh-pages --single-branch https://github.com/iDerekLi/amap-js.git
cd amap-js

rm -rf *.html *.js *.css *.map assets guide
rm -rf $AMapJSVersion/**
cp -rf ../../docs/.vuepress/dist/last/** .
mkdir $AMapJSVersion
cp -rf  ../../docs/.vuepress/dist/$AMapJSVersion/** $AMapJSVersion/
git add -A .
git commit -m "deploy"
git push origin gh-pages
cd ../../

rm -rf temp_web
echo "DONE, Bye~"
exit 0
