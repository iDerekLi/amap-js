import Loader from "./Loader";
import LoaderUtil from "./LoaderUtil";
import ScriptLoader from "./ScriptLoader";

const SymbolLoad = Symbol("Symbol.load");

/**
 * callback count
 */
let count = 0;

/**
 * AMapLoader 加载器
 */
class AMapLoader extends Loader {
  constructor(options) {
    super(options);
    this.key = "";
    this.version = "";
    this.plugins = [];
    this.AMap = null;
    this.readyState = this.CREATED;
    this[SymbolLoad] = null;
  }

  getDefaultOpts() {
    return {
      key: "",
      version: "1.4.15",
      plugins: []
    };
  }

  load() {
    if (this[SymbolLoad]) return this[SymbolLoad];
    this.readyState = this.LOADING;
    this[SymbolLoad] = new Promise((resolve, reject) => {
      const callbackName = "__onAMapLoaded" + count++;

      const { key, version, plugins } = this.options;

      const newPlugins = [];
      for (let i = 0; i < plugins.length; i += 1) {
        if (this.plugins.indexOf(plugins[i]) === -1) {
          newPlugins.push(plugins[i]);
        }
      }

      const script = new ScriptLoader(
        `https://webapi.amap.com/maps?key=${key}&v=${version}&plugin=${newPlugins.join(
          ","
        )}&callback=${callbackName}`
      );

      const onScriptLoad = () => {
        delete window[callbackName];
        this.readyState = this.LOADED;
        this.key = key;
        this.version = version;
        this.plugins = this.plugins.concat(newPlugins);
        this.AMap = window.AMap;
        this.readyState = this.MOUNTED;
        resolve(this);
      };

      const onScriptError = event => {
        delete window[callbackName];
        this[SymbolLoad] = null;
        this.readyState = this.FAILED;
        reject(event);
      };

      window[callbackName] = onScriptLoad;
      script.load().catch(onScriptError);
    });

    return this[SymbolLoad];
  }

  loadPlugin(plugins = []) {
    return new Promise((resolve, reject) => {
      if (!this.AMap) return reject("请先加载AMap.");

      const newPlugins = [];
      for (let i = 0; i < plugins.length; i += 1) {
        if (this.plugins.indexOf(plugins[i]) === -1) {
          newPlugins.push(plugins[i]);
        }
      }

      if (newPlugins.length) {
        this.AMap.plugin(newPlugins, () => {
          this.plugins = this.plugins.concat(newPlugins);
          resolve(this);
        });
      } else {
        resolve(this);
      }
    });
  }
}

/**
 * 添加ReadyState
 */
LoaderUtil.registerReadyState(AMapLoader, {
  CREATED: "created",
  LOADING: "loading",
  LOADED: "loaded",
  FAILED: "failed",
  MOUNTED: "mounted"
});

export default AMapLoader;
