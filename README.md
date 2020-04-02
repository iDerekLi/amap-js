# AMapJS

[![Build Status](https://travis-ci.org/iDerekLi/amap-js.svg?branch=master)](https://travis-ci.org/iDerekLi/amap-js)
[![npm version](https://img.shields.io/npm/v/amap-js.svg?style=flat-square)](https://www.npmjs.com/package/amap-js)
[![npm downloads](https://img.shields.io/npm/dm/amap-js.svg?style=flat-square)](https://www.npmjs.com/package/amap-js)
[![npm license](https://img.shields.io/npm/l/amap-js.svg?style=flat-square)](https://github.com/iderekli/amap-js)

AMapJS 是AMap高德地图API加载器。可帮助开发者加载高德地图相关sdk，在模块化应用、异步编程中使用sdk更加灵活便捷。

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

使用npm:

```bash
npm install --save amap-js
```

使用yarn:

```bash
yarn add amap-js
```

使用cdn:

```html
<script type="text/javascript" src="https://unpkg.com/amap-js"></script>
```

## 快速入手

### AMap JSAPI的加载:

```javascript
import AMapJS from "amap-js";

// 创建AMapJSAPI Loader
var AMapLoader = new AMapJS.AMapLoader({
  key: '您申请的key值',
  version: '1.4.15', // 版本号， 默认1.4.15
  plugins: [],
});

// 调用load方法加载loader并调用执行回调。
AMapLoader.load()
  .then(loader => {
    // 请求成功
  })
  .catch(e => {
    // 请求失败
  });
```

**加载插件**
```javascript
// 请确保 loader.load() 加载完毕
AMapLoader.loadPlugin(['AMap.ToolBar'])
  .then(() => {
    console.log(AMap.ToolBar);
  })
  .catch(e => {})
```

### AMap UI的加载:

```javascript
import AMapJS from "amap-js";

var AMapLoader = new AMapJS.AMapLoader({
  key: '您申请的key值',
  version: '1.4.15',
  plugins: [],
});

// 创建AMapUI Loader
var AMapUILoader = new AMapJS.AMapUILoader({
  version: '1.0',
});

AMapLoader.load().then(() => {
  AMapUILoader.load().then(loader => {
    loader.initAMapUI(); // 初始化AMapUI
    // 其他逻辑
    console.log(AMap, AMapUI);
  }).catch(e => {});
}).catch(e => {});
```

**加载模块**
```javascript
// 请确保 loader.load() 加载完毕
// loadUI 加载UI模块
AMapUILoader.loadUI(['overlay/SimpleMarker'])
  .then(([SimpleMarker]) => {})
  .catch(e => {});

// loadUI 加载模块
AMapUILoader.loadModule(['ui/overlay/SimpleMarker', 'lib/$'])
  .then(([SimpleMarker, $]) => {})
  .catch(e => {});
```

### load加载:

```javascript
import AMapJS from "amap-js";

var AMapLoader = new AMapJS.AMapLoader({
  key: '您申请的key值',
  version: '1.4.15',
  plugins: [],
});

var AMapUILoader = new AMapJS.AMapUILoader({
  version: '1.0',
});

AMapJS.load([AMapLoader, AMapUILoader])
  .then(([AMapLoader, AMapUILoader]) => {
    AMapUILoader.initAMapUI();
    // 其他逻辑
  })
  .catch(e => {});
```

### 按需引入

```javascript
import { AMapLoader } from 'amap-js';

// 其他操作...
```

## 手册

### Loaders

- AMapLoader - 高德地图JSAPI加载器
- AMapUILoader - 高德地图UI组件库加载器

### Outher

- load - 加载Loader

## API

### AMapLoader

高德地图JSAPI加载器。

| 构造函数 | 说明 |
| :------ | :------ |
| AMapLoader(options:AMapLoaderOptions) | 构造一个高德地图JSAPI加载器，通过AMapLoaderOptions设置加载器属性。 |  
 
| AMapLoaderOptions | 说明 | 类型 | 默认值 |
| :------ | :------ | :------ | :------ |
| key | 您申请的高德key值 | String | - |
| version | 高德地图 JSAPI 版本号 | String | 1.4.15 |
| plugins | 加载 JSAPI 提供的众多的插件 | Array | [] |  

| 方法 | 说明 | 返回值 |
| :------ | :------ | :------ |
| load() | 加载高德地图JSAPI | Promise |
| loadPlugin(plugins: []) | 加载 JSAPI 提供的众多的插件，使用前确保 JSAPI 加载完成 | Promise |

### AMapUILoader

高德地图UI组件库加载器。

| 构造函数 | 说明 |
| :------ | :------ |
| AMapUILoader(options:AMapUILoaderOptions) | 构造一个高德地图UI组件库API加载器，通过AMapUILoaderOptions设置加载器属性 |  
 
| AMapUILoaderOptions | 说明 | 类型 | 默认值 |
| :------ | :------ | :------ | :------ |
| version | UI组件库版本号 | String | 1.0 |

| 方法 | 说明 | 返回值 |
| :------ | :------ | :------ |
| load() | 加载高德地图UI组件库 | Promise |
| loadModule(unames: []) | 加载 UI组件库 提供的众多的模块，使用前确保 UI组件库 加载完成 | Promise |
| loadUI(unames: []) | (推荐)加载 UI组件库 提供的特定UI模块，使用前确保 UI组件库 加载完成 | Promise |

### load

| 方法 | 说明 | 返回值 |
| :------ | :------ | :------ |
| load(loaders: Loader<Array>) | 加载Loader，在不具备ES6环境中不支持直接解构 | Promise |

## 许可

MIT
