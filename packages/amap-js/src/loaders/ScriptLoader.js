import Loader from "./Loader";
import LoaderUtil from "./LoaderUtil";

const SymbolLoad = Symbol("Symbol.load");

/**
 * ScriptLoader 加载器
 */
class ScriptLoader extends Loader {
  constructor(url) {
    super({ url });
    this.url = this.options.url;
    this.readyState = this.CREATED;
    this[SymbolLoad] = null;
  }

  getDefaultOpts() {
    return {
      url: ""
    };
  }

  load() {
    if (this[SymbolLoad]) return this[SymbolLoad];
    this.readyState = this.LOADING;
    this[SymbolLoad] = new Promise((resolve, reject) => {
      if (!window || !document) {
        reject(new Error(`${this.constructor.name} can only be used in Browser.`));
        return;
      }

      const script = document.createElement("script");

      const onScriptLoad = () => {
        script.removeEventListener("load", onScriptLoad, false);
        script.removeEventListener("error", onScriptError, false);

        this.readyState = this.LOADED;
        resolve(this);
      };

      const onScriptError = event => {
        script.removeEventListener("load", onScriptLoad, false);
        script.removeEventListener("error", onScriptError, false);

        this[SymbolLoad] = null;
        this.readyState = this.FAILED;
        reject(event);
      };

      script.addEventListener("load", onScriptLoad, false);
      script.addEventListener("error", onScriptError, false);

      script.src = this.url;

      const target =
        document.getElementsByTagName("script")[0] ||
        document.head ||
        document.getElementsByTagName("head")[0];
      target.parentNode.insertBefore(script, target);
      if (script.parentNode) script.parentNode.removeChild(script);
    });

    return this[SymbolLoad];
  }
}

/**
 * 添加ReadyState
 */
LoaderUtil.registerReadyState(ScriptLoader, {
  CREATED: "created",
  LOADING: "loading",
  LOADED: "loaded",
  FAILED: "failed"
});

export default ScriptLoader;
