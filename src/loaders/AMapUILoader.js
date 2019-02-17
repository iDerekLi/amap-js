import Loader from "./Loader.js";
import httpJsonp from "http-jsonp";

/**
 * Deafult Configs
 */
const DEFAULT_UI_CONFIG = {
  protocol: "https:", // 请求UI组件库资源协议
  path: "webapi.amap.com/ui/{v}/main-async.js", // 资源地址，异步版本main-async.js
  v: "1.0", // UI组件库版本号
  initAMapUI: "initAMapUI", // 初始化AMapUI钩子（默认initAMapUI = window.initAMapUI）
  isAutoInitAMapUI: false, // 是否加载完成自动调用initAMapUI初始化, (开启则返回AMapUI实例。关闭则返回initAMapUI函数，且需手动调用该方法并返回AMapUI实例。注意：当开启时请确保优先加载AMap JSAPI)
  AMapUIProtocol: undefined, // 请求UI组件协议，默认组件加载优先使用与应用页面相同的协议(https:下用https:，http:或者file:下用http:)，如果需要强制https协议（比如file:场景下）
  crossOrigin: "anonymous", // 请求crossOrigin属性
  keepScriptTag: false // 加载完成后是否保留请求标记
};

/**
 * AMapUILoader
 */
class AMapUILoader extends Loader {
  constructor(config) {
    super(config);
    const _config = Object.assign({}, DEFAULT_UI_CONFIG, config);

    this.v = _config.v;
    this.protocol = _config.protocol;
    this.path = _config.path;
    this.AMapUIProtocol = _config.AMapUIProtocol;
    this.initAMapUI = _config.initAMapUI;
    this.isAutoInitAMapUI = _config.isAutoInitAMapUI;
    this.crossOrigin = _config.crossOrigin;
    this.keepScriptTag = _config.keepScriptTag;

    // 设置强制加载协议
    if (typeof this.AMapUIProtocol === "string") {
      this.setAMapUIProtocol(this.AMapUIProtocol);
    }
  }

  /**
   * 加载资源
   * @returns {Promise|null}
   */
  load() {
    if (this.__loadPromise) return this.__loadPromise;
    this.__loadPromise = new Promise((resolve, reject) => {
      const load = () => {
        this.__loadPromise = null;
        const initAMap = () => {
          if (this.checkCorrectness()) return window.AMapUI;
          window[this.initAMapUI]();
          return window.AMapUI;
        };
        resolve(this.isAutoInitAMapUI ? initAMap() : initAMap);
      };

      if (this.checkCorrectness()) return load();

      const protocol = this.protocol;
      const v = this.v;
      let path = this.path.replace("{v}", v);
      path = path.replace("{v}", v).slice(0, 2) === "//" ? path : "//" + path;
      const url = protocol + path;
      httpJsonp({
        url: url,
        params: this.params,
        callbackProp: false,
        scriptAttr: {
          async: true,
          crossOrigin: this.crossOrigin
        },
        keepScriptTag: this.keepScriptTag,
        load,
        error: e => {
          this.__loadPromise = null;
          reject(e);
        }
      });
    });
    return this.__loadPromise;
  }

  /**
   * 检查AMapUI正确性
   */
  checkCorrectness() {
    if (!window.AMapUI) return false;
    const checkAPI = ["libConf", "uiMods", "docProtocol", "version"];
    for (const key of checkAPI) {
      if (!(key in window.AMapUI)) return false;
    }
    return this.versionCompare(window.AMapUI.libConf.mainVersion, this.v);
  }

  versionCompare(left, right) {
    return left === right;
  }

  setProtocol(protocol) {
    this.protocol = protocol;
    return this;
  }

  setPath(path) {
    this.path = path;
    return this;
  }

  setV(v) {
    this.v = v;
    return this;
  }

  /**
   * UI组件加载协议
   * @param AMapUIProtocol ["https:" | "http:"]
   * @returns {AMapUILoader}
   */
  setAMapUIProtocol(AMapUIProtocol) {
    const protocol = "https:" === AMapUIProtocol ? "https:" : "http:";
    window.AMapUIProtocol = protocol;
    return this;
  }

  setCrossOrigin(crossOrigin) {
    this.crossOrigin = crossOrigin;
    return this;
  }
}

/**
 * Export
 */
export default AMapUILoader;
