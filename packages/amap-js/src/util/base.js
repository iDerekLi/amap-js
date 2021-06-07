/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
export function isObject(obj) {
  return obj !== null && typeof obj === "object";
}

/**
 * noop function
 */
export function noop() {}

/**
 * Set object property value to read-only
 */
export function readonly(target, prop, value = target[prop]) {
  Object.defineProperty(target, prop, {
    configurable: false,
    writable: false,
    value: value
  });
}
