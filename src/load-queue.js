import LoaderUtil from './loaders/loader-util';

function queueLoad(manifest) {
  let promise = Promise.resolve([]);

  for (let i = 0, len = manifest.length; i < len; i++) {
    const item = manifest[i];
    promise = promise.then(result => {
      return new Promise(async (resolve, reject) => {
        try {
          if (typeof item.resolve === 'function') {
            result.push(await item.resolve());
          } else {
            result.push(await item.resolve);
          }
          resolve(result);
        } catch (e) {
          reject(e);
        }
      });
    });
  }

  return promise;
}

function parallelLoad(manifest) {
  const promiseList = [];

  for (let i = 0, len = manifest.length; i < len; i++) {
    const item = manifest[i];
    if (typeof item.resolve === 'function') {
      promiseList.push(item.resolve());
    } else {
      promiseList.push(item.resolve);
    }
  }

  return Promise.all(promiseList);
}

const SymbolLoad = Symbol('Symbol.load');

class LoadQueue {
  constructor(manifest = [], queue = true) {
    this.manifest = manifest; // [{ id, loader }]
    this.queue = queue;
    this.result = null;
    this.readyState = this.CREATED;
  }

  load() {
    if (this[SymbolLoad]) return this[SymbolLoad];
    this.readyState = this.LOADING;
    this[SymbolLoad] = new Promise((resolve, reject) => {
      // 队列结果反馈
      (this.queue ? queueLoad : parallelLoad)(this.manifest)
        .then(result => {
          this.manifest.forEach((item, index) => {
            if (!this.result) this.result = {};
            this.result[item.id] = result[index];
          });
          this.readyState = this.COMPLETE;
          resolve(this);
        })
        .catch(error => {
          this.readyState = this.ERROR;
          reject(error);
        });
    });
    return this[SymbolLoad];
  }

  getItem(id) {
    const item = this.result && this.result[id];
    return item ? item : null;
  }

  getResult() {
    return this.result;
  }
}

/**
 * 添加ReadyState
 */
LoaderUtil.registerReadyState(LoadQueue, {
  CREATED: 'created',
  LOADING: 'loading',
  COMPLETE: 'complete',
  ERROR: 'error',
});

export default LoadQueue;
