import _Reflect$construct from "@babel/runtime-corejs2/core-js/reflect/construct";
import _Promise from "@babel/runtime-corejs2/core-js/promise";
import _extends from "@babel/runtime-corejs2/helpers/esm/extends";
import _possibleConstructorReturn from "@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs2/helpers/esm/getPrototypeOf";
import _inheritsLoose from "@babel/runtime-corejs2/helpers/esm/inheritsLoose";
import _Symbol from "@babel/runtime-corejs2/core-js/symbol";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Loader from './loader';
import ScriptLoader from './script-loader';
var STATUS = {
  created: 'created',
  loading: 'loading',
  loaded: 'loaded',
  failed: 'failed'
};
var DefaultOptions = {
  version: '1.0'
};

var _promise = _Symbol('promise');

function noop() {}

var AMapUILoader = /*#__PURE__*/function (_Loader) {
  _inheritsLoose(AMapUILoader, _Loader);

  var _super = _createSuper(AMapUILoader);

  function AMapUILoader(options) {
    var _this;

    if (!window || !document) {
      throw Error('AMapUILoader can only be used in Browser.');
    }

    _this = _Loader.call(this, options) || this;

    var _DefaultOptions$optio = _extends({}, DefaultOptions, {}, options),
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
    this[_promise] = new _Promise(function (resolve, reject) {
      var script = new ScriptLoader("https://webapi.amap.com/ui/" + _this2.version + "/main-async.js");
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

    return new _Promise(function (resolve, reject) {
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
}(Loader);

export default AMapUILoader;