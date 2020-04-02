"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _package = require("../package");

exports.version = _package.version;

var _load = _interopRequireDefault(require("./load"));

exports.load = _load.default;

var _amapJsapiLoader = _interopRequireDefault(require("./loaders/amap-jsapi-loader"));

exports.AMapLoader = _amapJsapiLoader.default;

var _amapUiLoader = _interopRequireDefault(require("./loaders/amap-ui-loader"));

exports.AMapUILoader = _amapUiLoader.default;
var AMapJS = {
  version: _package.version,
  load: _load.default,
  AMapLoader: _amapJsapiLoader.default,
  AMapUILoader: _amapUiLoader.default
};
/**
 * Export
 */

var _default = AMapJS;
exports.default = _default;