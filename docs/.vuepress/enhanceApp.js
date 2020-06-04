import AMapJS from '../../src';
const { pre, source } = require('./rootscope');

function render(template) {
  return eval(template);
}

export default ({Vue, options, router, siteData, isServer}) => {
  if (!isServer) {
    window.AMapJS = AMapJS;
    window.$AMapLoader = render(pre.AMapLoader.replace(pre.AMapKey, source.AMapKey));
    window.$AMapUILoader = render(pre.AMapUILoader);
  }
}
