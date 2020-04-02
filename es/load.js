import _Promise from "@babel/runtime-corejs2/core-js/promise";
import Loader from './loaders/loader';
/**
 * 加载loader
 * @param loaders
 * @returns {Promise<any[]>} 结果集为([a, b, c...])
 */

function load(loaders) {
  if (loaders === void 0) {
    loaders = [];
  }

  var promiseList = [];
  loaders.forEach(function (loader) {
    if (loader instanceof Loader) {
      promiseList.push(loader.load());
    } else {
      promiseList.push(loader);
    }
  });
  return _Promise.all(promiseList);
}

export default load;