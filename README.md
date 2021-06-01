<h1 align="center">AMapJS</h1>

<p align="center">基于AMap高德地图构建的API加载器。</p>

[![Build Status](https://travis-ci.org/iDerekLi/amap-js.svg?branch=master)](https://travis-ci.org/iDerekLi/amap-js)
[![npm version](https://img.shields.io/npm/v/amap-js.svg?style=flat-square)](https://www.npmjs.com/package/amap-js)
[![npm downloads](https://img.shields.io/npm/dm/amap-js.svg?style=flat-square)](https://www.npmjs.com/package/amap-js)
[![npm license](https://img.shields.io/npm/l/amap-js.svg?style=flat-square)](https://github.com/iderekli/amap-js)

<p align="center">
  🔥 <a href="https://iderekli.github.io/amap-js">文档网站</a>
  &nbsp;&nbsp;
  💡 <a href="https://derekli.gitee.io/amap-js">国内镜像文档</a>
</p>

## 特性

- 开箱即用的高质量 Loader。
- 友好指定 API 版本。
- 支持按需引入。
- 支持插件模块加载。
- 可以 Loader 队列加载。
- 允许多次执行加载操作，网络资源不会重复请求。

## 安装

```bash
# 通过 npm 安装
npm i amap-js -S

# 通过 yarn 安装
yarn add amap-js
```

## 快速入手

```javascript
import AMapJS from 'amap-js';
// or
// import { AMapLoader, AMapUILoader, LocaLoader, ... } from 'amap-js';

// 创建AMapLoader
const loader = new AMapJS.AMapLoader({
  key: '您申请的高德Key值',
  version: '2.0',
  plugins: [],
});

// 调用 load 方法完成加载并调用执行回调。
loader
  .load()
  .then(() => {
    // 加载完成
    console.log(AMap);
  })
  .catch(e => {
    // 加载失败
  });
```

AMapJS 支持按需引入、CDN 引入等方式，详细说明见 [快速上手](https://derekli.gitee.io/amap-js/guide/quickstart.html).

## 浏览器支持

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| :--------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: |
|                                         Latest ✔                                         |                                          Latest ✔                                           |                                         Latest ✔                                         |                                       Latest ✔                                        |                                      Latest ✔                                      |                                                             9+ ✔                                                             |

AMapJS **支持** 现代浏览器以及所有兼容 ECMAScript 5 的浏览器.

## 许可

MIT
