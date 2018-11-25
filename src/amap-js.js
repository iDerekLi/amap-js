/*!
 * AMapJS v0.1.1
 *
 * Copyright (c) 2018 Derry Li
 * Released under the MIT License - https://github.com/derry-li/amap-js/LICENSE
 *
 * https://github.com/derry-li/amap-js
 */
import AMapJSAPILoader from "./lib/amap-jsapi-loader";
import AMapUILoader from "./lib/amap-ui-loader";

let AMapJS = (function(global, factory) {
  return factory(global);
}(typeof window !== 'undefined' ? window : this, function(window) {
  // 加载器群组
  let loaders = {
    /**
     * AMap JSAPI加载器
     */
    AMapJSAPILoader: AMapJSAPILoader,
    /**
     * AMap UI组件库加载器
     */
    AMapUILoader: AMapUILoader
  };

  let load = function(loaders) {
    let loadersPromise = [];
    loaders.forEach(item => {
      let loader;
      if ("object" === typeof item && item.load) {
        loader = item.load();
      }

      let loadersType = Object.prototype.toString.call(loader);
      if ("[object Promise]" === loadersType || loader instanceof Promise) {
        loadersPromise.push(loader);
        return;
      }
      throw Error(`${item} 不是一个Promise对象或者由它的load函数包装得到的一个Promise对象`);
    });
    return Promise.all(loadersPromise);
  };

  let AMapJS = {
    version: "0.1.1",
    load: load,
    loaders: loaders
  };
  window.AMapJS = AMapJS;
  return AMapJS;
}));

export default AMapJS;
