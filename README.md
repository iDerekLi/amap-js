# AMapJS

AMap高德地图API加载器。

[![Build Status](https://travis-ci.org/iDerekLi/amap-js.svg?branch=master)](https://travis-ci.org/iDerekLi/amap-js)
[![npm version](https://img.shields.io/npm/v/amap-js.svg?style=flat-square)](https://www.npmjs.com/package/amap-js)
[![npm downloads](https://img.shields.io/npm/dm/amap-js.svg?style=flat-square)](https://www.npmjs.com/package/amap-js)
[![npm license](https://img.shields.io/npm/l/amap-js.svg?style=flat-square)](https://github.com/iderekli/amap-js)


## 特性
- 支持 NPM 和 UMD 两种方式使用。
- 支持指定 API 版本。
- 支持插件模块加载。
- 支持Promise。
- 支持按需引入。
- 允许多次执行加载操作，网络资源不会重复请求。

## 浏览器支持

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 9+ ✔ |

AMapJS **不支持** IE8 及以下版本。但它支持所有兼容 ECMAScript 5 的浏览器。

## 安装

```bash
# 通过 npm 安装
npm i amap-js -S

# 通过 yarn 安装
yarn add amap-js
```

## 文档

参考 [🔥 文档网站](https://iderekli.github.io/amap-js)

## 快速入手

```javascript
import AMapJS from 'amap-js';

// 创建AMapJSAPI Loader
const loader = new AMapJS.AMapLoader({
  key: '您申请的高德Key值',
  version: '1.4.15',
  plugins: [],
});

// 调用 load 方法完成加载并调用执行回调。
loader.load()
  .then(({ AMap }) => {
    // 请求成功
    console.log(AMap);
  })
  .catch(e => {
    // 请求失败
  });
```

## 许可

MIT
