---
title: load
---

# AMapJS.load(loaders, queue)

- 参数：
    - `{ Array } loaders`
    - `{ boolean } queue`
- 返回值：Promise<[loader.load()]>
- 用法：

加载多个 loader，不需要手动逐一调用 `loader.load` 方法，如果传入一个loader那么它会自动加载 `loader.load`, 否则必须是 `Promise`。
第一个参数传递loader列表, 第二个参数传递是否启动队列加载(默认值 `true`) 当设置 `true` 从前到后依次加载并按传递顺序返回接轨，当设置 `false` 同是加载并按传递顺序返回结果

:::warning
AMapJS.load (v2.1.0之前仅支持同时加载)。
:::

- 示例

```javascript
const amapLoader = $AMapLoader
const amapuiLoader = $AMapUILoader

AMapJS.load([amapLoader, amapuiLoader])
  .then(([amapLoader, amapuiLoader]) => {
    // 其他逻辑
  })
   .catch(e => {});
```

## 基础用法

:::demo AMapJS.load 加载多个 loader。

```html
<div id="map" style="height: 300px;"></div>
<script>
// 创建AMapJSAPI Loader
const amapLoader = $AMapLoader
// 创建AMapUI Loader
const amapuiLoader = $AMapUILoader

async function entry() {
  // load 方法从前到后依次加载
  // 由于 AMapUI 依赖 AMap，所以 amapLoader 放置在 amapuiLoader 前面
  await AMapJS.load([amapLoader, amapuiLoader]);

  // 其他逻辑
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
