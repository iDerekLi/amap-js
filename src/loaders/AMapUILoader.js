/**
 * AMapUI Loader
 */
import Loader from "./Loader.js";
import httpJsonp from "http-jsonp";

// 默认参数
const DEFAULT_UI_CONFIG = {
  v: "1.0", // UI组件库版本号
  protocol: "https:", // 加载UI组件库的协议
  path: "webapi.amap.com/ui/{v}/main-async.js", // 异步版本main-async.js
  crossOrigin: "anonymous",
  AMapUIProtocol: undefined, // [ "https:" | "http:" ] 默认情况下，组件加载优先使用与应用页面相同的协议(https:下用https:，http:或者file:下用http:)，如果需要强制https协议（比如file:场景下）
  initAMapUI: "initAMapUI", // window["initAMapUI"] 钩子
  isAutoInitAMapUI: false, // 是否加载完成自动调用initAMapUI初始化, (开启则返回AMapUI实例。关闭则返回initAMapUI函数，且需手动调用该方法并返回AMapUI实例。注意：当开启时请确保先加载AMap JSAPI)
  keepScriptTag: false // 加载完成后是否保留脚本标签
};

class AMapUILoader extends Loader {
  constructor(config) {
    super(config);
    const _config = Object.assign({}, DEFAULT_UI_CONFIG, config);

    this.v = _config.v;
    this.protocol = _config.protocol;
    this.path = _config.path;
    this.crossOrigin = _config.crossOrigin;
    this.AMapUIProtocol = _config.AMapUIProtocol;
    this.initAMapUI = _config.initAMapUI;
    this.isAutoInitAMapUI = _config.isAutoInitAMapUI;
    this.keepScriptTag = _config.keepScriptTag;

    // 设置强制加载协议
    if (typeof this.AMapUIProtocol === "string") {
      this.setAMapUIProtocol(this.AMapUIProtocol);
    }
  }

  /**
   * 加载资源
   * @returns {*}
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

  // 检查AMapUI正确性
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

  /**
   * 删除脚本标签
   */
  removeScriptTag(el) {
    el.parentNode.removeChild(el);
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
  setCrossOrigin(crossOrigin) {
    this.crossOrigin = crossOrigin;
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
}

export default AMapUILoader;
