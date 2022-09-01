import Loader from "./Loader";
import LoaderUtil from "./LoaderUtil";
import ScriptLoader from "./ScriptLoader";
import { noop } from "../util/base";

const SymbolLoad = Symbol("Symbol.load");

/**
 * AMapUILoader 加载器
 */
class AMapUILoader extends Loader {
  constructor(options = {}) {
    super();
    this.version = options.version || "1.1";
    this.async = options.async || false;
    this.initAMapUI = noop;
    this.AMapUI = null;
    this.readyState = this.CREATED;
    this[SymbolLoad] = null;
  }

  getUrl() {
    return LoaderUtil.parseTemplate(`https://webapi.amap.com/ui/$version/$main`, {
      version: this.version,
      main: this.async ? "main-async.js" : "main.js"
    });
  }

  load() {
    if (this[SymbolLoad]) return this[SymbolLoad];
    this.readyState = this.LOADING;
    this[SymbolLoad] = new Promise((resolve, reject) => {
      const url = this.getUrl();
      const async = this.async;

      const script = new ScriptLoader(url);

      const onScriptLoad = () => {
        this.readyState = this.LOADED;
        if (async) {
          this.initAMapUI = () => {
            this.initAMapUI = noop;
            window.initAMapUI();
            this.AMapUI = window.AMapUI;
            this.readyState = this.MOUNTED;
          };
        } else {
          this.initAMapUI = noop;
          this.AMapUI = window.AMapUI;
          this.readyState = this.MOUNTED;
        }
        resolve(this);
      };

      const onScriptError = event => {
        this[SymbolLoad] = null;
        this.readyState = this.FAILED;
        reject(event);
      };

      script.load().then(onScriptLoad).catch(onScriptError);
    });

    return this[SymbolLoad];
  }

  loadUI(unames = []) {
    return new Promise((resolve, reject) => {
      if (!this.AMapUI) return reject("请先加载AMapUI.");

      if (unames.length) {
        this.AMapUI.loadUI(unames, (...umodules) => {
          resolve(umodules);
        });
      } else {
        resolve([]);
      }
    });
  }

  loadModule(unames = [], opts) {
    return new Promise((resolve, reject) => {
      if (!this.AMapUI) return reject("请先加载AMapUI.");

      if (unames.length) {
        this.AMapUI.load(
          unames,
          (...umodules) => {
            resolve(umodules);
          },
          opts
        );
      } else {
        resolve([]);
      }
    });
  }
}

/**
 * 添加ReadyState
 */
LoaderUtil.registerReadyState(AMapUILoader, {
  CREATED: "created",
  LOADING: "loading",
  LOADED: "loaded",
  FAILED: "failed",
  MOUNTED: "mounted"
});

export default AMapUILoader;
