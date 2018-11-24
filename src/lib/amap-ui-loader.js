/**
 * AMap高德地图UI组件库异步版本main-async.js加载器
 */
import utils from "../utils/utils";

let AMapUILoader = (function(global, factory) {
  return factory(global);
}(typeof window !== 'undefined' ? window : this, function(window) {
  let document = window.document;

  // 默认参数
  const DEFAULT_UI_CONFIG = {
    v: "1.0", // UI组件库版本号
    protocol: "https:", // 加载组件库的协议
    hostAndPath: "webapi.amap.com/ui/{v}/main-async.js",
    AMapUIProtocol: undefined, // [ "https:" | "http:" ] 默认情况下，组件加载优先使用与应用页面相同的协议(https:下用https:，http:或者file:下用http:)，如果需要强制https协议（比如file:场景下）
    isAutoInitAMapUI: false // 是否加载完成自动调用initAMapUI初始化, (开启则返回AMapUI实例。关闭则返回initAMapUI函数，且需手动调用该方法并返回AMapUI实例)
  }

  class AMapUILoader {
    constructor(config) {
      // 初始化
      let AMapUILoaderClass = AMapUILoader;
      this.config = utils.assign({
        init: "initAMapUI"
      }, AMapUILoaderClass.config, config);
      // 设置强制加载协议
      if (typeof this.config.AMapUIProtocol === "string") {
        window.AMapUIProtocol = "https:" === this.config.AMapUIProtocol ? "https:" : "http:";
      }
      this.src = this._getScriptSrc();
    }

    /**
     * 加载资源
     * @returns {*}
     */
    load() {
      let config = this.config;
      if (this._checkWhetherAMapUIIsSound()) {
        let callbackFun = () => window.AMapUI;
        let callback = config.isAutoInitAMapUI ? callbackFun() : callbackFun;
        return Promise.resolve(callback);
      }
      let uiScript = document.createElement("script");
      uiScript.charset = "utf-8";
      uiScript.type = "text/javascript";
      uiScript.async = true;
      uiScript.defer = true;
      uiScript.src = this.src;
      let uiPromise = new Promise((resolve, reject) => {
        uiScript.onload = () => {
          let callbackFun = () => window[config.init]() || window.AMapUI;
          let callback = config.isAutoInitAMapUI ? callbackFun() : callbackFun;
          resolve(callback);
        };
        uiScript.onerror = error => reject(error);
      });
      document.head.appendChild(uiScript);
      return uiPromise;
    }

    // 检查AMapUI是否健全
    _checkWhetherAMapUIIsSound() {
      if (window.AMapUI) {
        return true;
      }
      return false;
    }

    _getScriptSrc() {
      let config = this.config;
      let protocol = config.protocol;
      let hostAndPath = config.hostAndPath.replace("{v}", config.v);
      let location = `${protocol}//${hostAndPath}`;
      return location;
    }

    static _initStatic() {
      utils.assign(AMapUILoader, {
        config: DEFAULT_UI_CONFIG
      });
    };
  };
  AMapUILoader._initStatic();

  return AMapUILoader;
}));

export function AMapUILoad(config) {
  let aMapUILoader = new AMapUILoader(config);
  return aMapUILoader.load();
};

export default AMapUILoader;
