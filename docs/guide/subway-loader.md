# SubwayLoader

地铁图 JSAPI 加载器。

## 基础用法

```html
<div id="mysubway" style="height: 300px;"></div>
<script>
// 创建Subway Loader
const subwayLoader = $SubwayLoader;

subwayLoader.load()
  .then(({ subway }) => {
    // 创建地铁图
    const mysubway = subway("mysubway", {
      adcode: "1100"
    });
  });
</script>
```

## API

### Constructor

| 构造函数                                   | 说明                          |
| :----------------------------------------- | :---------------------------- |
| SubwayLoader(options: <[options](#options)>) | 构造一个Subway JSAPI 加载器 |

### Options

| 参数     | 说明                      | 类型   | 默认值  |
| :------ | :----------------------- | :----- | :----- |
| key     | 您申请的高德 key 值         | String | -     |
| version | Subway JSAPI 版本号       | String | [1.0](https://lbs.amap.com/api/subway-api/changelog) |

### Methods

| 方法名     | 说明                                                   | 参数    | 返回值  |
| :--------- | :--------------------------------------------------- | :------ | :------ |
| load       | 加载Subway JSAPI                                     | -       | Promise(loader: <[SubwayLoader](#constructor)>) |

## 更新日志

[Subway 历史版本](https://lbs.amap.com/api/subway-api/changelog)
