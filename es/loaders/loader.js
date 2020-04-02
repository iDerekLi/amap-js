import _Promise from "@babel/runtime-corejs2/core-js/promise";

/**
 * Loader 加载器
 */
var Loader = /*#__PURE__*/function () {
  function Loader() {}

  var _proto = Loader.prototype;

  _proto.load = function load() {
    return _Promise.resolve(this);
  };

  return Loader;
}();

export default Loader;