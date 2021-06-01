# CustomLoader

自定义加载器。

## 基础用法

```javascript
import { Loader } from "amap-js";
// 创建自定义加载器
class CustomLoader extends Loader {
  constructor() {
    super();
  }

  async load() {
    // 加载...
  }
}

// 使用
const loader = new CustomLoader();
loader
  .load()
  .then(() => {})
  .catch(() => {});
```

## 示例

定制一个集成 AMap 和 AMapUI 的加载器

:::demo `MyAMapLoader` 是一个自定义加载器，集成 AMap 和 AMapUI 的加载器, `entry()` 方法是加载示例。注意：由于AMapUI依赖于AMap，本示例使用 `Promise.all()` 并行同时载入，所以需要使用 `aMapUILoader.async = true` 异步版本api, 并在加载成功后调用一次 `aMapUILoader.initAMapUI()` 即可，`aMapUILoader.initAMapUI()` 接管了官网说明的 `window.initAMapUI()` 所以更推荐小伙伴们使用 `aMapUILoader.initAMapUI()`。

```html
<div id="map" style="height: 300px;"></div>
<script>
  // import { Loader, AMapLoader, AMapUILoader } from "./amap-js.js";
  const { Loader, AMapLoader, AMapUILoader } = AMapJS;

  // 自定义一个集成 AMap 和 AMapUI 的加载器
  class MyAMapLoader extends Loader {
    constructor(options) {
      super();
      this.aMapLoader = new AMapLoader(options.AMap);
      this.aMapUILoader = new AMapUILoader(options.AMapUI);
      this.promise = null;
    }

    load() {
      if (this.promise) return this.promise;
      this.promise = new Promise(async (resolve, reject) => {
        this.aMapUILoader.async = true; // 确保AMapUI可以异步加载.
        Promise.all([this.aMapLoader.load(), this.aMapUILoader.load()])
          .then(() => {
            this.aMapUILoader.initAMapUI();
            resolve();
          })
          .catch(error => {
            this.promise = null;
            reject(error);
          });
      });
      return this.promise;
    }

    // 加载AMap插件
    loadPlugin(plugins) {
      return this.aMapLoader.loadPlugin(plugins);
    }

    // 加载UI组件
    loadUI(unames) {
      return this.aMapUILoader.loadUI(unames);
    }
  }

  // 使用示例
  async function entry() {
    const loader = new MyAMapLoader({
      AMap: {
        key: "$AMapKey",
        version: "$AMapVersion",
        plugins: ["AMap.ToolBar"]
      },
      AMapUI: {
        version: "$AMapUIVersion"
      }
    });

    await loader.load();

    // 加载插件
    await loader.loadPlugin(["AMap.OverView"]);
    // 加载UI组件
    const [SimpleMarker] = await loader.loadUI(["overlay/SimpleMarker"]);

    // 其他逻辑
    const map = new AMap.Map("map", { zoom: 4 });
    map.addControl(new AMap.ToolBar());
    map.addControl(new AMap.OverView({isOpen:true}));

    //创建SimpleMarker实例
    new SimpleMarker({
      map: map,
      position: map.getCenter(),
      iconLabel: "Hi",
      iconTheme: "default",
      iconStyle: "red"
    });
  }
  entry();
</script>
```

:::
