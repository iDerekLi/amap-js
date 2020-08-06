import Loader from './loader';
import LoaderUtil from './loader-util';
import ScriptLoader from './script-loader';
import { noop } from '../util/base';

const SymbolLoad = Symbol('Symbol.load');

/**
 * AMapUILoader 加载器
 */
class AMapUILoader extends Loader {
  constructor(options) {
    super(options);
    this.version = '';
    this.initAMapUI = noop;
    this.AMapUI = null;
    this.readyState = this.CREATED;
    this[SymbolLoad] = null;
  }

  getDefaultOpts() {
    return {
      version: '1.0',
      async: false,
    };
  }

  load() {
    if (this[SymbolLoad]) return this[SymbolLoad];
    this.readyState = this.LOADING;
    this[SymbolLoad] = new Promise((resolve, reject) => {
      const { version, async } = this.options;

      const script = new ScriptLoader(
        `https://webapi.amap.com/ui/${version}/main${async ? '-async' : ''}.js`,
      );

      const onScriptLoad = () => {
        this.readyState = this.LOADED;
        if (async) {
          this.initAMapUI = () => {
            this.initAMapUI = noop;
            window.initAMapUI();
            this.version = version;
            this.AMapUI = window.AMapUI;
            this.readyState = this.MOUNTED;
          };
        } else {
          this.initAMapUI = noop;
          this.version = version;
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
      if (!this.AMapUI) return reject('请先加载AMapUI.');

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
      if (!this.AMapUI) return reject('请先加载AMapUI.');

      if (unames.length) {
        this.AMapUI.load(
          unames,
          (...umodules) => {
            resolve(umodules);
          },
          opts,
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
  CREATED: 'created',
  LOADING: 'loading',
  LOADED: 'loaded',
  FAILED: 'failed',
  MOUNTED: 'mounted',
});

export default AMapUILoader;
