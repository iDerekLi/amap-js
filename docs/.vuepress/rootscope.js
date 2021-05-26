const AMapKey = "您申请的Key值";
const AMapVersion = "1.4.15";
const AMapUIVersion = "1.1";
const LocaVersion = "1.3.2";
const SubwayVersion = "1.0";

const AMapLoader = `
new AMapJS.AMapLoader({
  key: '${AMapKey}',
  version: '${AMapVersion}',
  plugins: []
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
    AMapKey,
    AMapLoader,
    AMapUILoader,
    LocaLoader,
    SubwayLoader
  },
  source: {
    AMapVersion,
    AMapKey: "494c7b315d60937fb6d3b7102a9cb4c3",
    AMapLoader: "window.$AMapLoader",
    AMapUILoader: "window.$AMapUILoader",
    LocaLoader: "window.$LocaLoader",
    SubwayLoader: "window.$SubwayLoader"
  }
};
