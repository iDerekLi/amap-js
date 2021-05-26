import { readonly } from "../util/base";

export default {
  registerReadyState(target, props = {}) {
    for (const prop in props) {
      const value = props[prop];
      if (!prop || value === undefined) return false;
      target[prop] = target.prototype[prop] = value;
      readonly(target, prop);
      readonly(target.prototype, prop);
    }
    return true;
  }
};
