# AMapUILoader

AMap UI组件库加载器(UI组件库基于高德地图JavaScript API)。

## 基础用法

:::demo AMapUILoader 提供加载AMapUI组件库，通过设置 `version` 来确定所需API信息，之后调用 `load` 方法完成加载。当加载成功后先需调用 `amapuiLoader.initAMapUI()` 进行API初始化(注意：`initAMapUI` 仅初始化一次，后续调用无副作用)。

```html
<div id="map" style="height: 300px;"></div>
<script>
// 创建AMapJSAPI Loader
const amapLoader = $AMapLoader
// 创建AMapUI Loader
const amapuiLoader = $AMapUILoader

async function entry() {
  await amapLoader.load();
  await amapuiLoader.load();
  amapuiLoader.initAMapUI(); // 初始化AMapUI
  //引入SimpleMarker，loadUI的路径参数为模块名中 'ui/' 之后的部分
  const [ SimpleMarker ] = await amapuiLoader.loadUI(['overlay/SimpleMarker']);

  // 其他逻辑
  const map = new AMap.Map('map', { zoom: 4 });
  //创建SimpleMarker实例
  new SimpleMarker({
      map: map,
      position: map.getCenter(),
      iconLabel: 'Hi',
      iconTheme: 'default',
      iconStyle: 'red',
  });
}
entry();
</script>
```
:::

## 组件加载

使用 `loader.loadUI` 加载组件

```javascript
const loader = AMapUILoader.loadUI(['overlay/SimpleMarker'])
  .then(([SimpleMarker]) => {
    // 其他逻辑
  })
  .catch(e => {});
```

## DomLibrary

部分UI依赖 [jQuery](http://jquery.com/) 或者 [Zepto](http://zeptojs.com/)（参见具体UI的使用说明），需要设置DomLibrary的引用。如果使用的UI组件中并未涉及DomLibrary，可以跳过此项，不过，建议开发者统一设置，方便后续使用。
详情参见 [AMapUI Docs](https://lbs.amap.com/api/javascript-api/guide/amap-ui/intro#domLibrary)

使用 `loader.loadModule` 加载模块

```javascript
const loader = AMapUILoader.loadModule(['lib/$', 'ui/overlay/SimpleMarker'])
  .then(([$, SimpleMarker]) => {
    // $ 即为UI组件库最终使用的DomLibrary
    // SimpleMarker 即为UI组件库的组件API，UI组件需填写ui/前缀。
    // 其他逻辑
  })
  .catch(e => {});
```

:::tip
如果不使用 DomLibrary, 加载组件推荐使用 [loadUI](#组件加载)
:::

## API

### Constructor

| 构造函数 | 说明 |
| :------ | :------ |
| AMapUILoader(options: <[options](#options)>) | 构造一个高德地图UI组件库加载器 |

### Options

| 参数 | 说明 | 类型 | 默认值 |
| :------ | :------ | :------ | :------ |
| version | UI组件库版本号 | String | [1.0](https://lbs.amap.com/api/amap-ui/changelog) | 

### Methods

| 方法名 | 说明 | 参数 | 返回值 |
| :------ | :------ | :------ | :------ |
| load | 加载高德地图UI组件库 | - | Promise(loader: <[AMapUILoader](#constructor)>) |
| loadUI | (推荐)加载 UI组件库 提供的特定UI模块，使用前确保 UI组件库 加载完成 | Array | Promise(unames: []) |
| loadModule | 加载 UI组件库 提供的众多的模块，使用前确保 UI组件库 加载完成 | Array | Promise(unames: []) |

## 更新日志

[AMapUI 历史版本](https://lbs.amap.com/api/amap-ui/changelog)
