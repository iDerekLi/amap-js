import AMapJS from "amap-js";
const { pre, source } = require("./rootscope");

function render(template) {
  template = template.replace(pre.AMapKey, source.AMapKey);
  template = template.replace(pre.AMapSecurity, source.AMapSecurity);
  return eval(template);
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
