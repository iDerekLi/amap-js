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
  version: '1.3.2',
};

const _promise = Symbol('promise');

/**
 * LocaLoader 数据可视化加载器
 */
class LocaLoader extends Loader {
  constructor(options) {
    if (!window || !document) {
      throw Error('LocaLoader can only be used in Browser.');
    }
    super(options);
    const { key, version } = { ...DefaultOptions, ...options };
    this.key = key;
    this.version = version;
    this.Loca = null;
    this[_promise] = null;
  }

  load() {
    if (this[_promise]) return this[_promise];
    this.status = STATUS.loading;
    this[_promise] = new Promise((resolve, reject) => {
      const script = new ScriptLoader(
        `https://webapi.amap.com/loca?key=${this.key}&v=${this.version}`,
      );

      script
        .load()
        .then(() => {
          if (!window.Loca) return reject('请检查当前Loca API是否可用！');
          this.Loca = window.Loca;
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
}

export default LocaLoader;
