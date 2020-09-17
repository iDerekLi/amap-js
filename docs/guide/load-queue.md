---
title: LoadQueue
---

# LoadQueue(manifest, queue)

- 参数：
    - `{ Array } manifest`
    - `{ boolean } queue`
- 用法

```javascript
// 创建队列
const queue = new AMapJS.LoadQueue([
  {
    id: 'AMap',
    resolve: () => Promise.resolve(...)
  },
  {
    id: 'AMapUI',
    resolve: () => Promise.resolve(...)
  }
])

// 加载成功获取数据
queue.load().then(() => {
  // 获取队列所有数据
  const { AMap, AMapUI } = queue.getResult();
  // 或，获取指定数据
  // const AMap = queue.getItem('AMap');
  // const AMapUI = queue.getItem('AMapUI');
})
```

## 示例

:::demo AMapJS.LoadQueue 加载多个 loader。

```html
<div id="map" style="height: 300px;"></div>
<script>
  // 创建AMap Loader
  const amapLoader = $AMapLoader
  // 创建AMapUI Loader
  const amapuiLoader = $AMapUILoader

  // 创建队列
  const queue = new AMapJS.LoadQueue([
    {
      id: 'AMap',
      resolve: async () => {
        await amapLoader.load()
        return amapLoader.AMap
      }
    },
    {
      id: 'AMapUI',
      resolve: async () => {
        await amapuiLoader.load()
        return amapuiLoader.AMapUI
      }
    },
    { 
      id: 'SimpleMarker',
      resolve: async () => {
        const [ SimpleMarker ] = await amapuiLoader.loadUI(['overlay/SimpleMarker'])
        return SimpleMarker
      }
    },
  ])

  async function entry() {
    // load 方法从前到后依次加载
    await queue.load();

    // 根据id获取对应结果
    const { AMap, SimpleMarker } = queue.getResult();

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
