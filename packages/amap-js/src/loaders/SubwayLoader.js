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
    this.version = options.version || "1.0";
    this.callback = options.callback || "__onSubwayLoaded" + count++;
    this.subway = null;
    this.readyState = this.CREATED;
    this[SymbolLoad] = null;
  }

  getUrl() {
    return LoaderUtil.parseTemplate(
      `https://webapi.amap.com/subway?key=$key&v=$version&callback=$callback`,
      {
        key: this.key,
        version: this.version,
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
        this.subway = window.subway;
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
}

/**
 * 添加ReadyState
 */
LoaderUtil.registerReadyState(SubwayLoader, {
  CREATED: "created",
  LOADING: "loading",
  LOADED: "loaded",
  FAILED: "failed"
});

export default SubwayLoader;
