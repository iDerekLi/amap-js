---
home: true
heroImage: false
heroText: AMapJS
tagline: AMapJS 是AMap高德地图API加载器。帮助开发者快速加载高德地图相关API，在模块化应用、异步编程中使用API更加灵活便捷。
actionText: 快速上手 →
actionLink: ./guide/quickstart
features:
  - title: 易用
    details: 代码简洁易用，最少的配置帮助你专注于开发。
  - title: 灵活
    details: 更加灵活指定API版本、插件模块加载。
  - title: 模块化
    details: 支持按需引入，允许多次执行加载操作，网络资源不会重复请求。
footer: MIT Licensed | Copyright © 2018-present Derek Li
---

## 快速开始

安装

```bash
# 通过 npm 安装
npm i amap-js -S

# 通过 yarn 安装
yarn add amap-js
```

使用AMap

```javascript
// 创建AMapJSAPI Loader
const loader = new AMapJS.AMapLoader({
  key: '您申请的高德Key值',
  version: '1.4.15', // 版本号， 默认1.4.15
  plugins: [],
});

// 调用 load 方法完成加载并调用执行回调。
loader.load()
  .then(loader => {
    // 请求成功
    console.log(loader.AMap);
  })
  .catch(e => {
    // 请求失败
  });
```
