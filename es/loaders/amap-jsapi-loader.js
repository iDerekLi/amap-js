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
  key: '',
  version: '1.4.15',
  plugins: []
};

var _promise = _Symbol('promise');

var count = 0;

var AMapLoader = /*#__PURE__*/function (_Loader) {
  _inheritsLoose(AMapLoader, _Loader);

  var _super = _createSuper(AMapLoader);

  function AMapLoader(options) {
    var _this;

    if (!window || !document) {
      throw Error('ScriptLoader can only be used in Browser.');
    }

    _this = _Loader.call(this, options) || this;

    var _DefaultOptions$optio = _extends({}, DefaultOptions, {}, options),
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
    this[_promise] = new _Promise(function (resolve, reject) {
      var callbackName = '__onAMapLoaded' + count++;
      var script = new ScriptLoader("https://webapi.amap.com/maps?key=" + _this2.key + "&v=" + _this2.version + "&plugin=" + _this2.plugins.join(',') + "&callback=" + callbackName);

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

    return new _Promise(function (resolve, reject) {
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
}(Loader);

export default AMapLoader;