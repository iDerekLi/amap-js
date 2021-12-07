const AMapKey = "您申请的Key值";
const AMapSecurity = `{ serviceHost: '您的代理服务器域名或地址/_AMapService' }`;
const AMapVersion = "1.4.15";
const AMapUIVersion = "1.1";
const LocaVersion = "1.3.2";
const SubwayVersion = "1.0";

const AMapLoader = `
new AMapJS.AMapLoader({
  key: '${AMapKey}',
  version: '${AMapVersion}',
  plugins: [],
  security: ${AMapSecurity}
});
`.trim();

const AMapUILoader = `
new AMapJS.AMapUILoader({
  version: '${AMapUIVersion}'
});
`.trim();

const LocaLoader = `
new AMapJS.LocaLoader({
  key: '${AMapKey}',
  version: '${LocaVersion}'
});
`.trim();

const SubwayLoader = `
new AMapJS.SubwayLoader({
  key: '${AMapKey}',
  version: '${SubwayVersion}'
});
`.trim();

module.exports = {
  pre: {
    AMapVersion,
    AMapUIVersion,
    AMapKey,
    AMapSecurity,
    AMapLoader,
    AMapUILoader,
    LocaLoader,
    SubwayLoader
  },
  source: {
    AMapVersion,
    AMapUIVersion,
    AMapKey: "22df707490e7631397c9fbb02e52544e",
    AMapSecurity: `{ securityJsCode: "300bfebf024085e4360118bd1712473d" }`,
    AMapLoader: "window.$AMapLoader",
    AMapUILoader: "window.$AMapUILoader",
    LocaLoader: "window.$LocaLoader",
    SubwayLoader: "window.$SubwayLoader"
  }
};
