import Loader from './loader';
import ScriptLoader from './script-loader';

const STATUS = {
  created: 'created',
  loading: 'loading',
  loaded: 'loaded',
  failed: 'failed',
};

const DefaultOptions = {
  version: '1.0',
};

const _promise = Symbol('promise');

function noop() {}

/**
 * AMapUILoader 加载器
 */
class AMapUILoader extends Loader {
  constructor(options) {
    if (!window || !document) {
      throw Error('AMapUILoader can only be used in Browser.');
    }
    super(options);
    const { version } = { ...DefaultOptions, ...options };
    this.version = version;
    this.initAMapUI = noop;
    this.AMapUI = null;
    this[_promise] = null;
  }

  load() {
    if (this[_promise]) return this[_promise];
    this.status = STATUS.loading;
    this[_promise] = new Promise((resolve, reject) => {
      const script = new ScriptLoader(`https://webapi.amap.com/ui/${this.version}/main-async.js`);

      script
        .load()
        .then(() => {
          this.initAMapUI = () => {
            this.initAMapUI = noop;
            window.initAMapUI();
            this.AMapUI = window.AMapUI;
          };
          this.status = STATUS.loaded;
          resolve(this);
        })
        .catch(e => {
          this[_promise] = null;
          this.status = STATUS.failed;
          reject(e);
        });
    });

    return this[_promise];
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

export default AMapUILoader;
