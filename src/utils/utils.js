'use strict';

/**
 * 对象浅拷贝
 * Object.assign实现
 * @param {Object} target 合并到target对象中
 * @returns {Object} Result of all shallow copy properties
 */
function assign(target/* , obj1, obj2, obj3, ... */) {
  if (target === undefined) throw Error("Cannot convert undefined or null to object");
  function assignValue(c, p) {
    for (var i in p) {
      c[i] = p[i];
    }
    return c;
  }
  for (var i = 1, l = arguments.length; i < l; i++) {
    assignValue(target, arguments[i]);
  }
  return target;
}

export default {
  assign: assign
};
