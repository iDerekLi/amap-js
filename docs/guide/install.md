# 安装

### 通过 npm 安装

```bash
# 通过 npm 安装
npm i amap-js -S

# 通过 yarn 安装
yarn add amap-js
```

## 使用 AMapJS

### 完整引入

```javascript
import AMapJS from 'amap-js';
```

### 按需引入

```javascript
import { AMapLoader } from 'amap-js';
```

[完整列表](https://github.com/iDerekLi/amap-js/blob/master/src/index.js)

### 通过 CDN 引入

使用 AMapJS 最简单的方法是直接在 html 文件中引入 CDN 链接，之后你可以通过全局变量 `AMapJS` 访问到所有API。
目前可以通过[unpkg.com/amap-js](https://unpkg.com/amap-js/lib/amap-js.js)获取到最新版本的资源。

```html
<script type="text/javascript" src="https://unpkg.com/amap-js/lib/amap-js.min.js"></script>

<script>
  console.log(AMapJS);
</script>
```

## 兼容性

AMapJS 支持所有的现代浏览器和 IE9+。
