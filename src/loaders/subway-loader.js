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
  version: '1.0',
};

const _promise = Symbol('promise');
let count = 0;

/**
 * SubwayLoader 地铁图加载器
 */
class SubwayLoader extends Loader {
  constructor(options) {
    if (!window || !document) {
      throw Error('SubwayLoader can only be used in Browser.');
    }
    super(options);
    const { key, version } = { ...DefaultOptions, ...options };
    this.key = key;
    this.version = version;
    this.subway = null;
    this[_promise] = null;
  }

  load() {
    if (this[_promise]) return this[_promise];
    this.status = STATUS.loading;
    this[_promise] = new Promise((resolve, reject) => {
      const callbackName = '__onSubwayLoaded' + count++;

      const script = new ScriptLoader(
        `https://webapi.amap.com/subway?key=${this.key}&v=${this.version}&callback=${callbackName}`,
      );

      window[callbackName] = () => {
        delete window[callbackName];
        this.subway = window.subway;
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
}

export default SubwayLoader;
