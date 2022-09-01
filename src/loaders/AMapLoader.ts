import Loader from "./Loader";
import LoaderUtil from "./LoaderUtil";
import ScriptLoader from "./ScriptLoader";

const SymbolLoad = Symbol("Symbol.load");

/**
 * API Callback Counter
 */
let callbackCounter = 0;

type AMap = { [index: string]: any };
interface AMapLoaderProps {
  key?: string;
  version?: string;
  plugins?: string[];
  callback?: string;
  security?: boolean;
}

/**
 * AMapLoader 加载器
 */
class AMapLoader extends Loader {
  key = "";
  version = "1.4.15";
  plugins: string[] = [];
  callback: string = "";
  security: boolean = false;
  AMap: AMap | null = null;
  readyState: string = "";
  [SymbolLoad]: Promise<any> | null;
  private CREATED: string = "create";
  private LOADING: string = "loading";
  private LOADED: string = "loaded";
  private FAILED: string = "failed";

  constructor(options: AMapLoaderProps | undefined = {}) {
    super();
    this.key = options.key || "";
    this.version = options.version || "1.4.15";
    this.plugins = options.plugins || [];
    this.callback = options.callback || "__onAMapLoaded" + callbackCounter++;
    this.security = options.security ? options.security : false;
    // this.security = {
    //   serviceHost: "您的代理服务器域名或地址/_AMapService"
    //   securityJsCode: "您申请的安全密钥"
    // };
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

      /**
       * 自2021年12月02日升级，升级之后所申请的 key 必须配备安全密钥 jscode 一起使用
       * 注意：此次升级不会影响之前已获得 key 的使用；升级之后的新增的key必须要配备安全密钥一起使用，
       * 具体用法请您参看下文《JSAPI key和安全密钥设置和使用》（本次key升级新增安全密钥，是为了提升广大用户的对自己的key安全有效管理，降低明文传输被窃取的风险 。）
       */
      if (this.security) {
        // @ts-ignore
        window._AMapSecurityConfig = this.security;
      } else {
        // @ts-ignore
        delete window._AMapSecurityConfig;
      }

      const script = new ScriptLoader(url);

      const onScriptLoad = () => {
        if (callback && callback !== "") {
          // @ts-ignore
          delete window[callback];
        }
        // @ts-ignore
        this.AMap = window.AMap;
        this.readyState = this.LOADED;
        resolve(this);
      };

      const onScriptError = (event: Error) => {
        if (callback && callback !== "") {
          // @ts-ignore
          delete window[callback];
        }
        this[SymbolLoad] = null;
        this.readyState = this.FAILED;
        reject(event);
      };

      if (callback && callback !== "") {
        // @ts-ignore
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

      const newPlugins: string[] = [];
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
