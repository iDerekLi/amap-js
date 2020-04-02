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
  version: '1.0'
};

var _promise = (0, _symbol.default)('promise');

function noop() {}

var AMapUILoader = /*#__PURE__*/function (_Loader) {
  (0, _inheritsLoose2.default)(AMapUILoader, _Loader);

  var _super = _createSuper(AMapUILoader);

  function AMapUILoader(options) {
    var _this;

    if (!window || !document) {
      throw Error('AMapUILoader can only be used in Browser.');
    }

    _this = _Loader.call(this, options) || this;

    var _DefaultOptions$optio = (0, _extends2.default)({}, DefaultOptions, {}, options),
        version = _DefaultOptions$optio.version;

    _this.version = version;
    _this.initAMapUI = noop;
    _this.AMapUI = null;
    _this[_promise] = null;
    return _this;
  }

  var _proto = AMapUILoader.prototype;

  _proto.load = function load() {
    var _this2 = this;

    if (this[_promise]) return this[_promise];
    this.status = STATUS.loading;
    this[_promise] = new _promise2.default(function (resolve, reject) {
      var script = new _scriptLoader.default("https://webapi.amap.com/ui/" + _this2.version + "/main-async.js");
      script.load().then(function () {
        _this2.initAMapUI = function () {
          _this2.initAMapUI = noop;
          window.initAMapUI();
          _this2.AMapUI = window.AMapUI;
        };

        _this2.status = STATUS.loaded;
        resolve(_this2);
      }).catch(function (e) {
        _this2[_promise] = null;
        _this2.status = STATUS.failed;
        reject(e);
      });
    });
    return this[_promise];
  };

  _proto.loadModule = function loadModule(modules) {
    var _this3 = this;

    if (modules === void 0) {
      modules = [];
    }

    return new _promise2.default(function (resolve, reject) {
      if (!_this3.AMapUI) return reject('请先加载AMapUI');

      if (modules.length) {
        _this3.AMapUI.load(modules, function () {
          for (var _len = arguments.length, mdos = new Array(_len), _key = 0; _key < _len; _key++) {
            mdos[_key] = arguments[_key];
          }

          resolve(mdos);
        });
      } else {
        resolve([]);
      }
    });
  };

  return AMapUILoader;
}(_loader.default);

var _default = AMapUILoader;
exports.default = _default;