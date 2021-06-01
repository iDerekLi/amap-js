import Loader from "./Loader";
import LoaderUtil from "./LoaderUtil";
import ScriptLoader from "./ScriptLoader";

const SymbolLoad = Symbol("Symbol.load");

/**
 * LocaLoader 数据可视化加载器
 */
class LocaLoader extends Loader {
  constructor(options) {
    super();
    this.key = options.key || "";
    this.version = options.version || "1.3.2";
    this.Loca = null;
    this.readyState = this.CREATED;
    this[SymbolLoad] = null;
  }

  getUrl() {
    return LoaderUtil.parseTemplate(`https://webapi.amap.com/loca?key=$key&v=$version`, {
      key: this.key,
      version: this.version
    });
  }

  load() {
    if (this[SymbolLoad]) return this[SymbolLoad];
    this.readyState = this.LOADING;
    this[SymbolLoad] = new Promise((resolve, reject) => {
      const url = this.getUrl();

      const script = new ScriptLoader(url);

      const onScriptLoad = () => {
        if (!window.Loca) return reject(new Error("请检查当前Loca API是否可用！"));
        this.Loca = window.Loca;
        this.readyState = this.LOADED;
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
  FAILED: "failed"
});

export default LocaLoader;
