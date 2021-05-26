import Loader from "./Loader";
import LoaderUtil from "./LoaderUtil";
import ScriptLoader from "./ScriptLoader";

const SymbolLoad = Symbol("Symbol.load");

/**
 * callback count
 */
let count = 0;

/**
 * SubwayLoader 地铁图加载器
 */
class SubwayLoader extends Loader {
  constructor(options) {
    super(options);
    this.key = "";
    this.version = "";
    this.subway = null;
    this.readyState = this.CREATED;
    this[SymbolLoad] = null;
  }

  getDefaultOpts() {
    return {
      key: "",
      version: "1.0"
    };
  }

  load() {
    if (this[SymbolLoad]) return this[SymbolLoad];
    this.readyState = this.LOADING;
    this[SymbolLoad] = new Promise((resolve, reject) => {
      const { key, version } = this.options;
      const callbackName = "__onSubwayLoaded" + count++;

      const script = new ScriptLoader(
        `https://webapi.amap.com/subway?key=${key}&v=${version}&callback=${callbackName}`
      );

      const onScriptLoad = () => {
        delete window[callbackName];
        this.readyState = this.LOADED;
        this.key = key;
        this.version = version;
        this.subway = window.subway;
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
}

/**
 * 添加ReadyState
 */
LoaderUtil.registerReadyState(SubwayLoader, {
  CREATED: "created",
  LOADING: "loading",
  LOADED: "loaded",
  FAILED: "failed",
  MOUNTED: "mounted"
});

export default SubwayLoader;
