import deepMerge from '../util/deepMerge';

/**
 * Loader 加载器
 */

class Loader {
  constructor(options) {
    this.options = deepMerge(this.getDefaultOpts(), options);
  }

  getDefaultOpts() {
    return {};
  }

  load() {
    return Promise.resolve(this);
  }
}

export default Loader;
