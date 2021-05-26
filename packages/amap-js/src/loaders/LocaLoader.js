import Loader from "./Loader";
import LoaderUtil from "./LoaderUtil";
import ScriptLoader from "./ScriptLoader";

const SymbolLoad = Symbol("Symbol.load");

/**
 * LocaLoader 数据可视化加载器
 */
class LocaLoader extends Loader {
  constructor(options) {
    super(options);
    this.key = "";
    this.version = "";
    this.Loca = null;
    this.readyState = this.CREATED;
    this[SymbolLoad] = null;
  }

  getDefaultOpts() {
    return {
      key: "",
      version: "1.3.2"
    };
  }

  load() {
    if (this[SymbolLoad]) return this[SymbolLoad];
    this.readyState = this.LOADING;
    this[SymbolLoad] = new Promise((resolve, reject) => {
      const { key, version } = this.options;

      const script = new ScriptLoader(`https://webapi.amap.com/loca?key=${key}&v=${version}`);

      const onScriptLoad = () => {
        if (!window.Loca) return reject(new Error("请检查当前Loca API是否可用！"));
        this.readyState = this.LOADED;
        this.key = key;
        this.version = version;
        this.Loca = window.Loca;
        this.readyState = this.MOUNTED;
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
}

/**
 * 添加ReadyState
 */
LoaderUtil.registerReadyState(LocaLoader, {
  CREATED: "created",
  LOADING: "loading",
  LOADED: "loaded",
  FAILED: "failed",
  MOUNTED: "mounted"
});

export default LocaLoader;
