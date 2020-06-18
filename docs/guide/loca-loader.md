# LocaLoader

数据可视化 JSAPI 加载器。

## 基础用法

:::demo `LocaLoader` 提供加载 `Loca` JSAPI，通过设置 `key`、`version` 来确定所需API信息，之后调用 `load` 方法完成加载。`Loca` 依赖 JS-API，因此首先需要加载 JS-API，再引入 `Loca`。

```html
<div id="map" style="height: 300px;"></div>
<script src="//a.amap.com/jsapi_demos/static/citys.js"></script>
<script>
// 创建AMap Loader
const amapLoader = $AMapLoader;

// 创建Loca Loader
const locaLoader = $LocaLoader;

async function entry() {
  const { AMap } = await amapLoader.load(); // 加载AMap API
  const { Loca } = await locaLoader.load(); // 加载Loca API

  // 创建地图实例
  const map = new AMap.Map('map', {
    mapStyle: 'amap://styles/grey',
    zoom: 4.5,
    center: [108.9082, 37.9452],
  });

  // 创建可视化图层——绘制散点图层
  const layer = new Loca.ScatterPointLayer({
    map: map,
  });

  // 传入原始数据
  layer.setData(citys, {
    lnglat: 'lnglat', // 指定坐标数据的来源，数据格式: 经度在前，维度在后，数组格式。
  });

  // 配置样式
  layer.setOptions({
    unit: 'px',
    style: {
      radius: 1.2, // 圆形半径，单位像素
      color: '#14B4C9', // 填充颜色
      borderWidth: 0.5, // 边框宽度
      borderColor: '#14B4C9', // 边框颜色
    },
  });

  // 数据渲染
  layer.render();
}
entry();
</script>
```

:::

:::warning
由于 `Loca` JSAPI与顶层作用域 `window.Loca` 进行强关联，这里建议相同 Loader 只创建一次实例并且保证唯一版本，可以避免加载异常与使用错误问题。
:::

## API

### Constructor

| 构造函数                                   | 说明                          |
| :----------------------------------------- | :---------------------------- |
| LocaLoader(options: <[options](#options)>) | 构造一个Loca JSAPI 加载器 |

### Options

| 参数     | 说明                      | 类型   | 默认值  |
| :------ | :----------------------- | :----- | :----- |
| key     | 您申请的高德 key 值         | String | -     |
| version | Loca JSAPI 版本号       | String | [1.3.2](https://lbs.amap.com/api/loca-api/changelog) |

### Methods

| 方法名     | 说明                                                   | 参数    | 返回值  |
| :--------- | :--------------------------------------------------- | :------ | :------ |
| load       | 加载Loca JSAPI                                     | -       | Promise(<[LocaLoader](#Constructor)>) |

## 更新日志

[Loca 历史版本](https://lbs.amap.com/api/loca-api/changelog)
