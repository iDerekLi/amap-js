"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

/**
 * Loader 加载器
 */
var Loader = /*#__PURE__*/function () {
  function Loader() {}

  var _proto = Loader.prototype;

  _proto.load = function load() {
    return _promise.default.resolve(this);
  };

  return Loader;
}();

var _default = Loader;
exports.default = _default;