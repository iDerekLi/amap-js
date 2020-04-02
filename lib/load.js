"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

var _loader = _interopRequireDefault(require("./loaders/loader"));

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
    if (loader instanceof _loader.default) {
      promiseList.push(loader.load());
    } else {
      promiseList.push(loader);
    }
  });
  return _promise.default.all(promiseList);
}

var _default = load;
exports.default = _default;