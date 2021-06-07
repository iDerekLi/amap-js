import AMapJS from "amap-js";
const { pre, source } = require("./rootscope");

function render(template) {
  return eval(template.replace(pre.AMapKey, source.AMapKey));
}

export default ({ Vue, options, router, siteData, isServer }) => {
  if (!isServer) {
    window.AMapJS = AMapJS;
    window.$AMapLoader = render(pre.AMapLoader);
    window.$AMapUILoader = render(pre.AMapUILoader);
    window.$LocaLoader = render(pre.LocaLoader);
    window.$SubwayLoader = render(pre.SubwayLoader);
  }
};
