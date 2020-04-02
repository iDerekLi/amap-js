"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _construct = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/reflect/construct"));

var _promise2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inheritsLoose"));

var _symbol = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/symbol"));

var _loader = _interopRequireDefault(require("./loader"));

var _scriptLoader = _interopRequireDefault(require("./script-loader"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = (0, _construct.default)(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct.default) return false; if (_construct.default.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct.default)(Date, [], function () {})); return true; } catch (e) { return false; } }

var STATUS = {
  created: 'created',
  loading: 'loading',
  loaded: 'loaded',
  failed: 'failed'
};
var DefaultOptions = {
  key: '',
  version: '1.4.15',
  plugins: []
};

var _promise = (0, _symbol.default)('promise');

var count = 0;

var AMapLoader = /*#__PURE__*/function (_Loader) {
  (0, _inheritsLoose2.default)(AMapLoader, _Loader);

  var _super = _createSuper(AMapLoader);

  function AMapLoader(options) {
    var _this;

    if (!window || !document) {
      throw Error('ScriptLoader can only be used in Browser.');
    }

    _this = _Loader.call(this, options) || this;

    var _DefaultOptions$optio = (0, _extends2.default)({}, DefaultOptions, {}, options),
        key = _DefaultOptions$optio.key,
        version = _DefaultOptions$optio.version,
        plugins = _DefaultOptions$optio.plugins;

    _this.key = key;
    _this.version = version;
    _this.plugins = plugins;
    _this.AMap = null;
    _this[_promise] = null;
    return _this;
  }

  var _proto = AMapLoader.prototype;

  _proto.load = function load() {
    var _this2 = this;

    if (this[_promise]) return this[_promise];
    this.status = STATUS.loading;
    this[_promise] = new _promise2.default(function (resolve, reject) {
      var callbackName = '__onAMapLoaded' + count++;
      var script = new _scriptLoader.default("https://webapi.amap.com/maps?key=" + _this2.key + "&v=" + _this2.version + "&plugin=" + _this2.plugins.join(',') + "&callback=" + callbackName);

      window[callbackName] = function () {
        delete window[callbackName];
        _this2.AMap = window.AMap;
        _this2.status = STATUS.loaded;
        resolve(_this2);
      };

      script.load().catch(function (e) {
        delete window[callbackName];
        _this2[_promise] = null;
        _this2.status = STATUS.failed;
        reject(e);
      });
    });
    return this[_promise];
  };

  _proto.loadPlugin = function loadPlugin(plugins) {
    var _this3 = this;

    if (plugins === void 0) {
      plugins = [];
    }

    return new _promise2.default(function (resolve, reject) {
      if (!_this3.AMap) return reject('请先加载AMap');
      var newPlugins = [];

      for (var i = 0; i < plugins.length; i += 1) {
        if (_this3.plugins.indexOf(plugins[i]) == -1) {
          newPlugins.push(plugins[i]);
        }
      }

      if (newPlugins.length) {
        _this3.AMap.plugin(newPlugins, function () {
          _this3.plugins = _this3.plugins.concat(newPlugins);
          resolve(_this3);
        });
      } else {
        resolve(_this3);
      }
    });
  };

  return AMapLoader;
}(_loader.default);

var _default = AMapLoader;
exports.default = _default;