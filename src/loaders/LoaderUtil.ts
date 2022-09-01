import { readonly } from "../util/base";

export default {
  registerReadyState(target: any, props: { [index: string]: any } = {}) {
    for (const prop in props) {
      const value = props[prop];
      if (!prop || value === undefined) return false;
      target[prop] = target.prototype[prop] = value;
      readonly(target, prop);
      readonly(target.prototype, prop);
    }
    return true;
  },
  parseTemplate(src: string, params: { [index: string]: any }) {
    return src
      ? src.replace(/\$([A-Za-z0-9_]+)/g, (match, key) => (undefined === params[key] ? match : params[key]))
      : "";
  }
};
