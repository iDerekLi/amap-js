# amap-js

[![build status](https://img.shields.io/travis/derry-li/amap-js.svg?style=flat-square)](https://travis-ci.org/derry-li/amap-js)
[![npm version](https://img.shields.io/npm/v/amap-js.svg?style=flat-square)](https://www.npmjs.com/package/axios)
[![npm downloads](https://img.shields.io/npm/dm/amap-js.svg?style=flat-square)](https://www.npmjs.com/package/amap-js)
[![npm license](https://img.shields.io/npm/l/amap-js.svg?style=flat-square)](https://www.npmjs.com/package/amap-js)

> amap-js是AMap高德地图加载模块。帮助您加载高德sdk，这对于在组件化应用程序中非常有帮助。

## 安装
使用npm:
```
npm install amap-js --save
```
使用yarn:
```
yarn add amap-js
```
使用cdn:
```
<script type="text/javascript" src="https://unpkg.com/amap-js/dist/amap-js.min.js"></script>
```
### 兼容性
AMapJS **不支持** IE8 及以下版本，因为 AMapJS 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。


## 示例


### 单独使用:
加载高德地图 JS API:
```
import AMapJS from "amap-js";

// 创建AMap JS加载器
let aMapJSAPILoader = new AMapJS.loaders.AMapJSAPILoader({
  key: "您申请的key值",
  v: "1.4.8"
});

aMapJSAPILoader.load().then(AMap => {
  // 其他逻辑
});
```

使用AMap UI组件库:
```
import AMapJS from "amap-js";
// 创建AMap JS加载器
let aMapJSAPILoader = new AMapJS.loaders.AMapJSAPILoader({
  key: "您申请的key值",
  v: "1.4.8"
});

// 创建AMap UI组件库加载器
let aMapUILoader = new AMapJS.loaders.AMapUILoader({
  v: "1.0"
});

aMapJSAPILoader.load().then(aMap => {
  aMapUILoader.load().then(initAMapUI => {
    const AMap = aMap;
    const AMapUI = initAMapUI(); // 这里调用initAMapUI初始化并返回AMapUI
    // 其他逻辑
  });
});
```


### 使用AMapJs.load加载：
```
import AMapJS from "amap-js";
let { AMapJSAPILoader, AMapUILoader } = AMapJS.loaders;

// 创建AMap JS加载器
let aMapJSAPILoader = new AMapJSAPILoader({
  key: "您申请的key值",
  v: "1.4.8"
});

// 创建AMap UI组件库加载器
let aMapUILoader = new AMapUILoader({
  v: "1.0"
});

// 使用AMapJs.load添加加载器
let AMapLoad = AMapJS.load([aMapJSAPILoader, aMapUILoader]);
AMapLoad.then(([aMap, initAMapUI]) => {
  const AMap = aMap;
  const AMapUI = initAMapUI(); // 这里调用initAMapUI初始化并返回AMapUI
   // 其他逻辑
});
```


### async/await写法：
AMapJSAPILoader、AMapUILoader以及AMapJS.load。
它们的返回值是一个Promise，这使我们可以很方便的使用ES7的语法**async/await**。
```
// ...
let AMap;
let AMapUI;
async mounted() {
  AMap = await aMapJSAPILoader.load();
  let initAMapUI = await aMapJSAPILoader.load();
  AMapUI = initAMapUI();
  
  // 其他逻辑
}
```


## AMApJS API

| 属性 | 类型 | 说明 |
| :------ | :------ | :------ |
| loaders | Object | Loader加载器。 |

| 方法 | 返回值 | 说明 |
| :------ | :------ | :------ |
| load([loaders]) | Promise | then()接收一个Array顺序接收每个loader.load()的数据 |



## Loader API

### AMapJSAPILoader
高德地图JSAPI加载器。

| 构造函数 | 说明 |
| :------ | :------ |
| AMapJS.loaders.AMapJSAPILoader(config:AMapJSAPILoaderConfig) | 构造一个高德地图JSAPI加载器，通过AMapJSAPILoaderConfig设置加载器属性。 |

| AMapJSAPILoaderConfig | 类型 | 说明 |
| :------ | :------ | :------ |
| key | String | 您申请的高德key值 |
| v | String | 高德地图JS API版本号，默认"1.4.8" |
| protocol | String | 加载脚本协议，默认https: |
| callback | String | 回调函数名，默认onAMapLoaded |

| 方法 | 返回值 | 说明 |
| :------ | :------ | :------ |
| load( ) | Promise | 加载高德地图JSAPI。then接收AMap对象 |


### AMapUILoader
高德地图UI组件库。

| 构造函数 | 说明 |
| :------ | :------ |
| AMapJS.loaders.AMapUILoader(config:AMapUILoaderConfig) | 构造一个高德地图UI组件库加载器，通过AMapUILoaderConfig设置加载器属性。 |

| AMapUILoaderConfig | 类型 | 说明 |
| :------ | :------ | :------ |
| v | String | 高德UI组件库版本号，默认"1.0" |
| protocol | String | 加载组件库的脚本协议，默认https: |
| AMapUIProtocol | String\undefined | [ "https:" \ "http:" ] 默认情况下，组件加载优先使用与应用页面相同的协议(https:下用https:，http:或者file:下用http:)，如果需要强制https协议（比如file:场景下） |
| isAutoInitAMapUI | Boolean | 调用load()后，then接收的initAMapUI方法首次调用是否自动完成加载AMapUI实例的初始化创建, (开启后调用则直接返回AMapUI实例。关闭后调用则需先进行initAMapUI()初始化并返回AMapUI实例) |

| 方法 | 返回值 | 说明 |
| :------ | :------ | :------ |
| load( ) | Promise | 加载高德地图UI组件库。then接收initAMapUI方法 |



## 许可
MIT
