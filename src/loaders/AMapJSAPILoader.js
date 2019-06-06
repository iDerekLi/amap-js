import Loader from "./Loader.js";
import httpJsonp from "http-jsonp";

/**
 * Deafult Configs
 */
const DEFAULT_JSAPI_CONFIG = {
  protocol: "https:", // 资源请求协议
  path: "webapi.amap.com/maps", // 资源地址
  key: "", // 您申请的key值 (实例化后该属性存在params中)
  v: "1.4.14", // 版本号 (实例化后该属性存在params中)
  params: null,
  callbackProp: "callback", // callback接口键值
  callbackName: "", // 回调函数名 (实例化后该属性存在params中)
  crossOrigin: null, // "anonymous" 请求crossOrigin属性
  keepScriptTag: false // 加载完成后是否保留请求标记
};

/**
 * AMapJSAPILoader
 */
class AMapJSAPILoader extends Loader {
  constructor(config) {
    super(config);
    const _config = Object.assign({}, DEFAULT_JSAPI_CONFIG, config);

    this.protocol = _config.protocol;
    this.path = _config.path;
    this.params = {
      key: _config.key,
      v: _config.v,
      ..._config.params
    };
    this.callbackProp = _config.callbackProp;
    this.callbackName = _config.callbackName;
    this.crossOrigin = _config.crossOrigin;
    this.keepScriptTag = _config.keepScriptTag;
  }

  /**
   * 加载资源
   * @returns {Promise|null}
   */
  load() {
    if (this.__loadPromise) return this.__loadPromise;
    this.__loadPromise = new Promise((resolve, reject) => {
      const callback = () => {
        this.__loadPromise = null;
        resolve(window.AMap);
      };

      if (this.checkCorrectness()) {
        return callback();
      }

      const protocol = this.protocol;
      const path =
        this.path.slice(0, 2) === "//" ? this.path : "//" + this.path;
      const url = protocol + path;

      httpJsonp({
        url: url,
        params: this.params,
        callbackProp: this.callbackProp,
        callbackName: this.callbackName,
        scriptAttr: {
          async: true,
          crossOrigin: this.crossOrigin
        },
        keepScriptTag: this.keepScriptTag,
        callback,
        error: e => {
          this.__loadPromise = null;
          reject(e);
        }
      });
    });
    return this.__loadPromise;
  }

  /**
   * 检查AMapJSAPI正确性
   */
  checkCorrectness() {
    if (!window.AMap && typeof window.AMap !== "object") return false;
    const checkAPI = ["v", "Pixel", "LngLat", "Size", "Bounds", "Map"];
    for (const key of checkAPI) {
      if (!(key in window.AMap)) return false;
    }

    return this.versionCompare(window.AMap.v, this.params.v);
  }

  /**
   * 版本对比
   */
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

  setKey(key) {
    this.params && (this.params.key = key);
    return this;
  }

  setV(v) {
    this.params && (this.params.v = v);
    return this;
  }

  setParams(params) {
    this.params = params;
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
export default AMapJSAPILoader;
