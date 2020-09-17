---
home: true
heroImage: false
heroText: AMapJS
tagline: 基于AMap高德地图构建的API加载器。
actionText: 快速上手 →
actionLink: ./guide/quickstart
features:
  - title: 易用
    details: 开箱即用，最少的配置帮助你专注于开发。
  - title: 灵活
    details: 更加友好的指定 API 版本。
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
// 创建AMap Loader
const loader = new AMapJS.AMapLoader({
  key: '您申请的高德Key值',
  version: '2.0',
  plugins: [],
});

// 调用 load 方法完成加载并调用执行回调。
loader.load()
  .then(() => {
    // 请求成功
    console.log(loader.AMap); // => window.AMap === loader.AMap
  })
  .catch(e => {
    // 请求失败
  });
```
