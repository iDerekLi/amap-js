const STATUS = {
  created: 'created',
  loading: 'loading',
  loaded: 'loaded',
  failed: 'failed',
};

const _promise = Symbol('promise');

/**
 * ScriptLoader 加载器
 */
class ScriptLoader {
  constructor(url) {
    if (!window || !document) {
      throw Error('ScriptLoader can only be used in Browser.');
    }
    this.url = url;
    this.status = STATUS.created;
    this[_promise] = null;
  }

  load() {
    if (this[_promise]) return this[_promise];
    this.status = STATUS.loading;
    this[_promise] = new Promise((resolve, reject) => {
      const script = document.createElement('script');

      script.onload = () => {
        this.status = STATUS.loaded;
        resolve(this);
      };
      script.onerror = () => {
        this[_promise] = null;
        this.status = STATUS.failed;
        reject(new Error('Failed to load tile'));
      };
      script.src = this.url;

      const target =
        document.getElementsByTagName('script')[0] ||
        document.head ||
        document.getElementsByTagName('head')[0];
      target.parentNode.insertBefore(script, target);
      if (script.parentNode) script.parentNode.removeChild(script);
    });

    return this[_promise];
  }
}

export default ScriptLoader;
