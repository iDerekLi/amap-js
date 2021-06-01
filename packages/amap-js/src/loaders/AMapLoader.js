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
    super();
    this.key = options.key || "";
    this.version = options.version || "1.4.15";
    this.plugins = options.plugins || [];
    this.callback = options.callback || "__onAMapLoaded" + count++;
    this.AMap = null;
    this.readyState = this.CREATED;
    this[SymbolLoad] = null;
  }

  getUrl() {
    // 目前官方设计 `callback` 并不是必须的，如果自定义url无 `callback`，请设置 this.callback = ""; 避免加载时出现引用问题。
    return LoaderUtil.parseTemplate(
      "https://webapi.amap.com/maps?key=$key&v=$version&plugin=$plugins&callback=$callback",
      {
        key: this.key,
        version: this.version,
        plugins: this.plugins.join(","),
        callback: this.callback
      }
    );
  }

  load() {
    if (this[SymbolLoad]) return this[SymbolLoad];
    this.readyState = this.LOADING;
    this[SymbolLoad] = new Promise((resolve, reject) => {
      const url = this.getUrl();
      const callback = this.callback;

      const script = new ScriptLoader(url);

      const onScriptLoad = () => {
        if (callback && callback !== "") {
          delete window[callback];
        }
        this.AMap = window.AMap;
        this.readyState = this.LOADED;
        resolve(this);
      };

      const onScriptError = event => {
        if (callback && callback !== "") {
          delete window[callback];
        }
        this[SymbolLoad] = null;
        this.readyState = this.FAILED;
        reject(event);
      };

      if (callback && callback !== "") {
        window[callback] = onScriptLoad;
        script.load().catch(onScriptError);
      } else {
        script.load().then(onScriptLoad).catch(onScriptError);
      }
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
  FAILED: "failed"
});

export default AMapLoader;
