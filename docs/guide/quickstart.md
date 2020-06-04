# 快速入手

## 最简单的例子

:::warning
文档示例代码中使用 ES2015 语法。
如果你还没能掌握 ES2015，[点击这里](https://babeljs.io/docs/learn-es2015/)！
:::

安装 [AMapJS](./install.md) 之后，让我们来创建一个 Loader:

```javascript
// 创建AMapJSAPI Loader
const loader = $AMapLoader

// 调用 load 方法完成加载并调用执行回调。
loader.load()
  .then(loader => {
    // 请求成功
    console.log(loader.AMap); // -> AMap (loader.AMap === window.AMap === true)
  })
  .catch(e => {
    // 请求失败
  });
```

then 回调返回 loader 实例，后续 loader 会包含相应结果。

:::warning
由于低版本 AMap JS API与 顶层作用域 `window.AMap` 进行强关联，这里建议相同 Loader 只创建一次实例并且保证唯一版本，可以避免加载异常与使用错误问题。
:::
