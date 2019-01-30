/**
 * AMapJSAPI Loader
 */
import Loader from "./Loader.js";
import queryParams from "../utils/queryParams.js";

const RANDOM = Math.ceil(Math.random() * Math.pow(10, 16));

// 默认参数
const DEFAULT_JSAPI_CONFIG = {
  protocol: "https:", // 脚本加载协议
  path: "webapi.amap.com/maps", // 资源地址
  key: "", // 您申请的key值 (实例化后该属性存在params中)
  v: "1.4.12", // 版本号 (实例化后该属性存在params中)
  callback: `onAMapJS${RANDOM}`, // 回调函数名 (实例化后该属性存在params中)
  params: null,
  crossOrigin: "anonymous",
  keepScriptTag: false // 加载完成后是否保留脚本标签
};

class AMapJSAPILoader extends Loader {
  constructor(config) {
    super(config);
    const _config = Object.assign({}, DEFAULT_JSAPI_CONFIG, config);

    this.protocol = _config.protocol;
    this.path = _config.path;
    this.params = {
      key: _config.key,
      v: _config.v,
      callback: _config.callback,
      ..._config.params
    };
    this.crossOrigin = _config.crossOrigin;
    this.keepScriptTag = _config.keepScriptTag;
  }

  /**
   * 加载资源
   * @returns {Promise<any>}
   */
  load() {
    if (this.checkCorrectness()) return Promise.resolve(window.AMap);
    const jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.type = "text/javascript";
    jsapi.async = true;
    jsapi.defer = true;
    jsapi.crossOrigin = this.crossOrigin;
    jsapi.src = this.getRequestURL();
    const callbackName = this.params.callback;
    return new Promise((resolve, reject) => {
      window[callbackName] = () => resolve(window.AMap);
      if (typeof jsapi.onload !== "undefined") {
        jsapi.onload = () => {
          if (!this.keepScriptTag) this.removeScriptTag(jsapi);
        };
      } else {
        jsapi.onreadystatechange = () => {
          if (jsapi.readyState == "loaded" || jsapi.readyState == "complete") {
            jsapi.onreadystatechange = null;
            if (!this.keepScriptTag) this.removeScriptTag(jsapi);
          }
        };
      }
      jsapi.onerror = error => {
        if (!this.keepScriptTag) this.removeScriptTag(jsapi);
        reject(error);
      };
      document.getElementsByTagName("head")[0].appendChild(jsapi);
    });
  }

  // 检查AMapJSAPI正确性
  checkCorrectness() {
    if (!window.AMap) return false;
    const checkAPI = ["v", "Pixel", "LngLat", "Size", "Bounds", "Map"];
    for (const key of checkAPI) {
      if (!(key in window.AMap)) return false;
    }

    return this.versionCompare(window.AMap.v, this.params.v);
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
    const path = this.path;
    const params = queryParams(this.params);
    const location = `${protocol}//${path}?${params}`;
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
  setParams(params) {
    this.params = params;
  }
  setKey(key) {
    this.params && (this.params.key = key);
    return this;
  }
  setV(v) {
    this.params && (this.params.v = v);
    return this;
  }
  setCrossOrigin(crossOrigin) {
    this.crossOrigin = crossOrigin;
    return this;
  }
}

export default AMapJSAPILoader;
