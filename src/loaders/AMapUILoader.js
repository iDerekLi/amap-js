/**
 * AMapUI Loader
 */
import Loader from "./Loader";

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
    if (this.checkCorrectness()) {
      const callback = () => window.AMapUI;
      return Promise.resolve(this.isAutoInitAMapUI ? callback() : callback);
    }
    const uiScript = document.createElement("script");
    uiScript.charset = "utf-8";
    uiScript.type = "text/javascript";
    uiScript.async = true;
    uiScript.defer = true;
    uiScript.crossOrigin = this.crossOrigin;
    uiScript.src = this.getRequestURL();
    return new Promise((resolve, reject) => {
      if (typeof uiScript.onload !== "undefined") {
        uiScript.onload = () => {
          if (!this.keepScriptTag) this.removeScriptTag(uiScript);
          const callback = () => window[this.initAMapUI]() || window.AMapUI;
          resolve(this.isAutoInitAMapUI ? callback() : callback);
        };
      } else {
        uiScript.onreadystatechange = () => {
          if (
            uiScript.readyState == "loaded" ||
            uiScript.readyState == "complete"
          ) {
            uiScript.onreadystatechange = null;
            if (!this.keepScriptTag) this.removeScriptTag(uiScript);
            const callback = () => window[this.initAMapUI]() || window.AMapUI;
            resolve(this.isAutoInitAMapUI ? callback() : callback);
          }
        };
      }
      uiScript.onerror = error => {
        if (!this.keepScriptTag) this.removeScriptTag(uiScript);
        reject(error);
      };
      document.getElementsByTagName("head")[0].appendChild(uiScript);
    });
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

  toRequestURL() {
    const protocol = this.protocol;
    const v = this.v;
    const path = this.path.replace("{v}", v);
    const location = `${protocol}//${path}`;
    return location;
  }

  /**
   * 获取请求地址
   */
  getRequestURL() {
    return this.toRequestURL();
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
