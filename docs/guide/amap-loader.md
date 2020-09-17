# AMapLoader

AMap JSAPI 加载器。

## 基础用法

:::demo AMapLoader 提供加载AMap JSAPI，通过设置 `key`, `version`, `plugins` 来确定所需API信息。之后调用 `load` 方法完成加载。当 `load` 方法加载成功后 AMap 会注入到 loader 中即 `loader.AMap = window.AMap`。

```html
<div id="map" style="height: 300px;"></div>
<script>
// 创建AMap Loader
const loader = $AMapLoader
  
loader.load()
  .then(({ AMap }) => {
    // 其他逻辑
    new AMap.Map('map');
  })
  .catch(e => {});
</script>
```
:::

:::warning
由于低版本 AMap JS API与 顶层作用域 `window.AMap` 进行强关联，这里建议相同 Loader 只创建一次实例并且保证唯一版本，可以避免加载异常与使用错误问题。
:::

## 使用插件

使用 loader 加载插件

```javascript
const loader = new AMapJS.AMapLoader({
  key: '$AMapKey',
  version: '$AMapVersion',
  plugins: ['AMap.ToolBar', 'AMap.Driving'],
});
```

使用 loader.loadPlugin 加载插件，请确保 loader.load() 加载完毕

```javascript
loader.loadPlugin(['AMap.ToolBar', 'AMap.Driving'])
  .then(({ AMap }) => {
    console.log(AMap.ToolBar);
  })
  .catch(e => {});
```

示例

:::demo 使用 `loadPlugin` 加载AMap插件，示例引入工具条、比例尺、定位、鹰眼和基本图层插件。
```html
<div id="map2" style="height: 300px;"></div>

<script>
const loader = $AMapLoader

async function entry() {
  await loader.load();
  await loader.loadPlugin([
    'AMap.ToolBar',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.MapType',
    'AMap.Geolocation',
  ]);
  const { AMap } = loader;
  const map = new AMap.Map('map2');
  // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
  map.addControl(new AMap.ToolBar());

  // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
  map.addControl(new AMap.Scale());

  // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
  map.addControl(new AMap.OverView({isOpen:true}));
 
  // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
  map.addControl(new AMap.MapType());
 
  // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
  map.addControl(new AMap.Geolocation());
}
entry();
</script>
```
:::

## API

### Constructor

| 构造函数 | 说明 |
| :------ | :------ |
| AMapLoader(options: <[options](#options)>) | 构造一个高德地图JSAPI加载器 |

### Options

| 参数 | 说明 | 类型 | 默认值 |
| :------ | :------ | :------ | :------ |
| key | 您申请的高德key值 | String | - |
| version | 高德地图 JSAPI 版本号 | String | [1.4.15](https://lbs.amap.com/api/javascript-api/changelog) |
| plugins | 加载 JSAPI 提供的众多的插件 | Array | [] |  

### Methods

| 方法名 | 说明 | 参数 | 返回值 |
| :------ | :------ | :------ | :------ |
| load | 加载高德地图JSAPI | - | Promise(loader: <[AMapLoader](#constructor)>) |
| loadPlugin | 加载 JSAPI 提供的众多的插件，使用前确保 JSAPI 加载完成 | plugins | Promise(loader: <[AMapLoader](#constructor)>) |

## 更新日志

[AMap 历史版本](https://lbs.amap.com/api/javascript-api/changelog)
