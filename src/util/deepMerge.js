import { isObject } from "./base";

/**
 * deepMerge
 * @param target  {Object|Array}  merge target
 * @param objN    {Object|Array}  obj1, obj2, obj3...
 * @returns target
 */
function deepMerge(target) {
  function assignItem(val, key) {
    if (isObject(target[key]) && isObject(val)) {
      target[key] = deepMerge(target[key], val);
    } else if (isObject(val)) {
      const _target = Array.isArray(val) ? [] : {};
      target[key] = deepMerge(_target, val);
    } else {
      target[key] = val;
    }
  }
  for (let i = 1, l = arguments.length; i < l; i++) {
    for (const key in arguments[i]) {
      assignItem(arguments[i][key], key);
    }
  }
  return target;
}

export default deepMerge;
