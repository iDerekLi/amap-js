# AMapJS

[![Build Status](https://travis-ci.org/iDerekLi/amap-js.svg?branch=master)](https://travis-ci.org/iDerekLi/amap-js)
[![npm version](https://img.shields.io/npm/v/amap-js.svg?style=flat-square)](https://www.npmjs.com/package/amap-js)
[![npm downloads](https://img.shields.io/npm/dm/amap-js.svg?style=flat-square)](https://www.npmjs.com/package/amap-js)
[![npm license](https://img.shields.io/npm/l/amap-js.svg?style=flat-square)](https://github.com/iderekli/amap-js)

AMapJS是AMap高德地图加载模块。帮助您加载高德地图相关sdk，在模块化应用、异步编程中使用sdk更加灵活便捷。

## 特性
- 异步加载sdk。
- 支持Promise返回sdk。
- 支持预加载。

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
<script type="text/javascript" src="https://unpkg.com/amap-js/dist/amap-js.min.js"></script>
```

## 示例

### AMap JS API的加载:

```javascript
import AMapJS from "amap-js";

// 创建AMapJSAPI Loader
var aMapJSAPILoader = new AMapJS.AMapJSAPILoader({ key: "您申请的key值" });

// 加载loader并执行then回调。
aMapJSAPILoader.load().then(function(AMap) {
  // 其他逻辑
});
```

或者:

```javascript
// 创建AMapJSAPI Loader
var aMapJSAPILoader = new AMapJS.AMapJSAPILoader({
  key: "您申请的key值",
  v: "1.4.12", // 版本号
  params: {}, // 请求参数
  protocol: "https:" // 请求协议
});

aMapJSAPILoader.load()
  .then(function(AMap) {
    // 请求成功
  })
  .catch(function(e) {
    // 请求失败
  })
  .finally(function() {
    // 总是执行
  });
```

### AMap UI组件库的加载:

```javascript
import AMapJS from "amap-js";

// 创建AMapJSAPI Loader
var aMapJSAPILoader = new AMapJS.AMapJSAPILoader({ key: "您申请的key值" });

// 创建AMapUI Loader
var aMapUILoader = new AMapJS.AMapUILoader();

aMapJSAPILoader.load().then(function(AMap) {
  aMapUILoader.load().then(function(initAMapUI) {
    var AMapUI = initAMapUI(); // 这里调用initAMapUI初始化并返回AMapUI。
    // 其他逻辑
  });
});
```

或者:

```javascript
// 创建AMapJSAPI Loader
var aMapJSAPILoader = new AMapJS.AMapJSAPILoader({ key: "您申请的key值" });

// 创建AMapUI Loader
var aMapUILoader = new AMapJS.AMapUILoader({
  v: "1.0", // UI组件库版本号
  protocol: "https:", // UI组件库请求协议
  AMapUIProtocol: "https:" // UI组件请求协议
});

aMapJSAPILoader.load().then(function(AMap) {
  aMapUILoader.load().then(function(initAMapUI) {
    var AMapUI = initAMapUI(); // 这里调用initAMapUI初始化并返回AMapUI
    // 其他逻辑
  });
});
```

自动完成initAMapUI:

```javascript
// 创建AMapJSAPI Loader
var aMapJSAPILoader = new AMapJS.AMapJSAPILoader({ key: "您申请的key值" });

// 创建AMapUI Loader
var aMapUILoader = new AMapJS.AMapUILoader({
  v: "1.0", // UI组件库版本号
  isAutoInitAMapUI: true // 开启自动完成初始化
});

aMapJSAPILoader.load().then(function(AMap) {
  aMapUILoader.load().then(function(AMapUI) {
    // 其他逻辑
  });
});
```

注意：开始自动完成初始化后，aMapUILoader.load()方法请置于aMapJSAPILoader.load()之后调用。
原因`AMApUI`依赖于`AMAp`。

### AMapJS.load()加载Loader：

```javascript
import AMapJS from "amap-js";

// 创建AMapJSAPI Loader
var aMapJSAPILoader = new AMapJS.AMapJSAPILoader({ key: "您申请的key值" });

// 创建AMapUI Loader
var aMapUILoader = new AMapJS.AMapUILoader();

// 使用AMapJS.load方法同时加载多个Loader
AMapJS.load([aMapJSAPILoader, aMapUILoader]).then(function([AMap, initAMapUI]) {
  var AMapUI = initAMapUI(); // 这里调用initAMapUI初始化并返回AMapUI
   // 其他逻辑
});
```

这里(`[AMap, initAMapUI]`)是EcmaScript6中的解构，如不支持请替换成环境支持的写法即可或者使用callback方式。

支持callback方式返回结果集:

```javascript
// ...
AMapJS.load([aMapJSAPILoader, aMapUILoader], function(AMap, initAMapUI) { // then
  var AMapUI = initAMapUI(); // 这里调用initAMapUI初始化并返回AMapUI
  // 其他逻辑
});
```

### 预加载

```javascript
// 创建AMapJSAPI Loader
var aMapJSAPILoader = new AMapJS.AMapJSAPILoader({ key: "您申请的key值" });

// 创建AMapUI Loader
var aMapUILoader = new AMapJS.AMapUILoader();

// 预加载aMapJSAPI和aMapUI
var aMapJSAPILoad = aMapJSAPILoader.load();
var aMapUILoad = aMapUILoader.load();

// 使用
aMapJSAPILoad.then(function(AMap) {
  aMapUILoad.then(function(initAMapUI) {
    var AMapUI = initAMapUI(); // 这里调用initAMapUI初始化并返回AMapUI
    // 其他逻辑
  });
});
```

或者使用AMapJS.load()：

```javascript
var load = AMapJS.load([aMapJSAPILoader, aMapUILoader]);
load.then(function([AMap, initAMapUI]) {
  var AMapUI = initAMapUI(); // 这里调用initAMapUI初始化并返回AMapUI
  // 其他逻辑
});
```

## 手册

### Loaders

- AMapJSAPILoader   -   高德地图JSAPI加载器
- AMapUILoader      -   高德地图UI加载器

### Loader \ load

- Loader            -   加载器基类
- load([loaders]) - 同时加载多个Loaders。

## AMapJS API

#### AMapJSAPILoader

高德地图JSAPI加载器。

| 构造函数 | 说明 |
| :------ | :------ |
| AMapJS.AMapJSAPILoader(config:AMapJSAPILoaderConfig) | 构造一个高德地图JSAPI加载器，通过AMapJSAPILoaderConfig设置加载器属性。 |  
 
| AMapJSAPILoaderConfig | 说明 | 类型 | 默认值 |
| :------ | :------ | :------ | :------ |
| protocol | 请求资源协议 | "https:"\ "http:"\ "" | https: |
| path | 资源地址 | String | webapi.amap.com/maps |
| key | 您申请的高德key值，(实例化后该属性存在`params`中) | String | - |
| v | 高德地图JS API版本号，(实例化后该属性存在`params`中) | String | 1.4.12 |
| params | 请求资源参数 | Object | null |
| callbackProp | 指定params中的属性作为callback接口属性 | String | callback |
| callbackName | callback接口的名称，如果`callbackProp`指定一个存在的值则该属性无效。(实例化后该值存在params中) | String | 随机生成 |
| crossOrigin | 请求crossOrigin属性 | String | anonymous |
| keepScriptTag | 加载完成后是否保留请求标记 | Boolean | false |  

| 方法 | 说明 | 返回值 |
| :------ | :------ | :------ |
| load() | 加载高德地图JSAPI。then接收AMap对象 | Promise |
| checkCorrectness() | 检查AMapJSAPI正确性 | Boolean |
| setProtocol(protocol: protocol) | 设置请求资源协议 |  |
| setPath(path: path) | 设置资源地址 |  |
| setParams(params: params) | 设置请求资源参数 |  |
| setKey(key: key) | 设置高德地图Key |  |
| setV(v: v) | 设置高德地图JSAPI版本号 |  |
| setCrossOrigin(crossOrigin: crossOrigin) | 设置CrossOrigin属性 |  |

### AMapUILoader

高德地图UI组件库API加载器。

| 构造函数 | 说明 |
| :------ | :------ |
| AMapJS.loaders.AMapUILoader(config:AMapUILoaderConfig) | 构造一个高德地图UI组件库API加载器，通过AMapUILoaderConfig设置加载器属性。 |  
 
| AMapUILoaderConfig | 说明 | 类型 | 默认值 |
| :------ | :------ | :------ | :------ |
| protocol | 请求UI组件库资源协议 | "https:"\ "http:"\ "" | https: |
| path | 资源地址 | String | webapi.amap.com/ui/{v}/main-async.js |
| v | UI组件库版本号 | String | 1.0 |
| initAMapUI | 初始化AMapUI钩子（默认initAMapUI = window.initAMapUI） | String | initAMapUI |
| isAutoInitAMapUI | 是否加载完成自动调用initAMapUI初始化, (开启则返回AMapUI实例。关闭则返回initAMapUI函数，且需手动调用该方法并返回AMapUI实例。注意：当开启时请确保优先加载AMap JSAPI) | Boolean | false |
| AMapUIProtocol | 请求UI组件协议，默认组件加载优先使用与应用页面相同的协议(https:下用https:，http:或者file:下用http:)，如果需要强制https协议（比如file:场景下） | https:\ http:\ undefined | undefined |
| crossOrigin | 请求crossOrigin属性 | String | anonymous |
| keepScriptTag | 加载完成后是否保留请求标记 | Boolean | false |

| 方法 | 说明 | 返回值 |
| :------ | :------ | :------ |
| load() | 加载高德地图UI组件库。then接收initAMapUI方法(isAutoInitAMapUI: true接收AMapUI) | Promise |
| checkCorrectness() | 检查AMapUI正确性 | Boolean |
| setProtocol(protocol: protocol) | 设置请求UI组件库资源协议 |  |
| setPath(path: path) | 设置资源地址 |  |
| setV(v: v) | 设置UI组件库版本号 |  |
| setAMapUIProtocol(protocol: AMapUIProtocol) | 设置请求UI组件协议 |  |
| setCrossOrigin(crossOrigin: crossOrigin) | 设置请求crossOrigin属性 |  |

### Loader
加载器基类

| 构造函数 | 说明 |
| :------ | :------ |
| AMapJS.Loader() | 构造一个加载器 |

| 方法 | 说明 | 返回值 |
| :------ | :------ | :------ |
| load() |  | undefined |

### loader

| 方法 | 说明 | 返回值 |
| :------ | :------ | :------ |
| load(loaders: Loader< Array >, [cbThen, cbCatch, cbFinally]< Function >) | 加载Loader。callback结果集为(a, b, c...), Promise结果集为([a, b, c...])在不具备ES6环境中不支持直接解构 | Promise |


## 许可
MIT
