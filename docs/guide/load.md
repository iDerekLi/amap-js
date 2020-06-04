# load

加载Loader

## 基础用法

AMapJS.load 同时加载多个 loader，不需要手动逐一调用 `loader.load` 方法，如果传入一个loader那么它会自动加载 `loader.load`, 否则必须是 `Promise`。

```javascript
const amapLoader = $AMapLoader
const amapuiLoader = $AMapUILoader

AMapJS.load([amapLoader, amapuiLoader])
  .then(([amapLoader, amapuiLoader]) => {
    amapuiLoader.initAMapUI();
    // 其他逻辑
  })
   .catch(e => {});
```

示例

:::demo AMapJS.load 同时加载多个 loader。

```html
<div id="map" style="height: 300px;"></div>
<script>
// 创建AMapJSAPI Loader
const amapLoader = $AMapLoader
// 创建AMapUI Loader
const amapuiLoader = $AMapUILoader

async function entry() {
  await AMapJS.load([amapLoader, amapuiLoader]);

  // 其他逻辑
  amapuiLoader.initAMapUI(); // 初始化AMapUI
  const [ SimpleMarker ] = await amapuiLoader.loadUI(['overlay/SimpleMarker']);
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

## API

### Constructor

| 构造函数 | 说明 |
| :------ | :------ |
| AMapUILoader(options: <[options](#options)>) | 构造一个高德地图UI组件库加载器 |

### Options

| 参数 | 说明 | 类型 | 默认值 |
| :------ | :------ | :------ | :------ |
| version | UI组件库版本号 | String | 1.0 | 

### Methods

| 方法名 | 说明 | 参数 | 返回值 |
| :------ | :------ | :------ | :------ |
| load | 加载高德地图UI组件库 | - | Promise |
| loadUI | (推荐)加载 UI组件库 提供的特定UI模块，使用前确保 UI组件库 加载完成 | Array | Promise |
| loadModule | 加载 UI组件库 提供的众多的模块，使用前确保 UI组件库 加载完成 | Array | Promise |
