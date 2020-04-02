"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _promise2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

var _symbol = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/symbol"));

var STATUS = {
  created: 'created',
  loading: 'loading',
  loaded: 'loaded',
  failed: 'failed'
};

var _promise = (0, _symbol.default)('promise');

var ScriptLoader = /*#__PURE__*/function () {
  function ScriptLoader(url) {
    if (!window || !document) {
      throw Error('ScriptLoader can only be used in Browser.');
    }

    this.url = url;
    this.status = STATUS.created;
    this[_promise] = null;
  }

  var _proto = ScriptLoader.prototype;

  _proto.load = function load() {
    var _this = this;

    if (this[_promise]) return this[_promise];
    this.status = STATUS.loading;
    this[_promise] = new _promise2.default(function (resolve, reject) {
      var script = document.createElement('script');

      script.onload = function () {
        _this.status = STATUS.loaded;
        resolve(_this);
      };

      script.onerror = function () {
        _this[_promise] = null;
        _this.status = STATUS.failed;
        reject(new Error('Failed to load tile'));
      };

      script.src = _this.url;
      var target = document.getElementsByTagName('script')[0] || document.head || document.getElementsByTagName('head')[0];
      target.parentNode.insertBefore(script, target);
      if (script.parentNode) script.parentNode.removeChild(script);
    });
    return this[_promise];
  };

  return ScriptLoader;
}();

var _default = ScriptLoader;
exports.default = _default;