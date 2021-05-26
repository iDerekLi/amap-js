# build version
VERSION='2.1'
REPO='/amap-js/'

mkdir temp_web

# build dev site
# vuepress build docs
cross-env repo=$REPO v='*' vuepress build docs
cross-env repo=$REPO v=$VERSION vuepress build docs

cd temp_web
git clone --depth 1 -b gh-pages --single-branch https://github.com/iDerekLi/amap-js.git && cd amap-js

mkdir $VERSION
rm -rf *.html *.js *.css *.map assets guide
rm -rf $VERSION/**
cp -rf ../../docs/.vuepress/dist/amap-js/** .
cp -rf  ../../docs/.vuepress/dist/amap-js_version/** $VERSION/
git add -A .
git commit -m "deploy"
git push origin gh-pages
cd ../..

rm -rf temp_web
echo "DONE, Bye~"
exit 0
