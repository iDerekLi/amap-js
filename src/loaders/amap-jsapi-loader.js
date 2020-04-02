import Loader from './loader';
import ScriptLoader from './script-loader';

const STATUS = {
  created: 'created',
  loading: 'loading',
  loaded: 'loaded',
  failed: 'failed',
};

const DefaultOptions = {
  key: '',
  version: '1.4.15',
  plugins: [],
};

const _promise = Symbol('promise');
let count = 0;

/**
 * AMapLoader 加载器
 */
class AMapLoader extends Loader {
  constructor(options) {
    if (!window || !document) {
      throw Error('ScriptLoader can only be used in Browser.');
    }
    super(options);
    const { key, version, plugins } = { ...DefaultOptions, ...options };
    this.key = key;
    this.version = version;
    this.plugins = plugins;
    this.AMap = null;
    this[_promise] = null;
  }

  load() {
    if (this[_promise]) return this[_promise];
    this.status = STATUS.loading;
    this[_promise] = new Promise((resolve, reject) => {
      const callbackName = '__onAMapLoaded' + count++;

      const script = new ScriptLoader(
        `https://webapi.amap.com/maps?key=${this.key}&v=${this.version}&plugin=${this.plugins.join(
          ',',
        )}&callback=${callbackName}`,
      );

      window[callbackName] = () => {
        delete window[callbackName];
        this.AMap = window.AMap;
        this.status = STATUS.loaded;
        resolve(this);
      };

      script.load().catch(e => {
        delete window[callbackName];
        this[_promise] = null;
        this.status = STATUS.failed;
        reject(e);
      });
    });

    return this[_promise];
  }

  loadPlugin(plugins = []) {
    return new Promise((resolve, reject) => {
      if (!this.AMap) return reject('请先加载AMap.');

      const newPlugins = [];
      for (var i = 0; i < plugins.length; i += 1) {
        if (this.plugins.indexOf(plugins[i]) == -1) {
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

export default AMapLoader;
