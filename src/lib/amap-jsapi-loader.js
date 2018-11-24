/**
 * AMap高德地图JSAPI加载器
 */
import queryParams from "../utils/queryParams";
import utils from "../utils/utils";

let AMapJSAPILoader = (function(global, factory) {
  return factory(global);
}(typeof window !== 'undefined' ? window : this, function(window) {

  let document = window.document;

  // 默认参数
  const DEFAULT_JSAPI_CONFIG = {
    key: null, // 您申请的key值
    v: "1.4.8", // 版本号
    protocol: "https:", // 脚本加载协议
    hostAndPath: "webapi.amap.com/maps", // 请求地址
    callback: "onAMapLoaded" // 回调函数名
  }

  class AMapJSAPILoader {
    constructor(config) {
      // 初始化
      let AMapJSAPILoaderClass = AMapJSAPILoader;
      this.config = utils.assign({}, AMapJSAPILoaderClass.config, config);
      this.src = this._getScriptSrc();
    }

    /**
     * 加载资源
     * @returns {Promise<any>}
     */
    load() {
      if (this._checkWhetherAMapIsSound()) {
        return Promise.resolve(window.AMap);
      }
      let config = this.config;
      let jsapi = document.createElement("script");
      jsapi.charset = "utf-8";
      jsapi.type = "text/javascript";
      jsapi.async = true;
      jsapi.defer = true;
      jsapi.src = this.src;
      let jsapiPromise = new Promise((resolve, reject) => {
        window[config.callback] = () => resolve(window.AMap);
        // jsapi.onload = () => resolve(window.AMap);
        jsapi.onerror = error => reject(error);
      });
      document.head.appendChild(jsapi);
      return jsapiPromise;
    }

    // 检查AMap是否健全
    _checkWhetherAMapIsSound() {
      if (window.AMap && window.AMap.Map) {
        return true;
      }
      return false;
    }

    _getScriptSrc() {
      let config = this.config;
      let params = queryParams({
        v: config.v,
        key: config.key,
        callback: config.callback
      });
      let protocol = config.protocol;
      let hostAndPath = config.hostAndPath;
      let location = `${protocol}//${hostAndPath}?${params}`;
      return location;
    }

    static _initStatic() {
      utils.assign(AMapJSAPILoader, {
        config: DEFAULT_JSAPI_CONFIG
      });
    };
  };
  AMapJSAPILoader._initStatic();

  return AMapJSAPILoader;
}));

export function AMapJSAPIload(config) {
  let aMapJSAPILoader = new AMapJSAPILoader(config);
  return aMapJSAPILoader.load();
};

export default AMapJSAPILoader;
