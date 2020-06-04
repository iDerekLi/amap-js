const AMapKey = '您申请的Key值';
const AMapVersion = '1.4.15';

const AMapLoader = `
new AMapJS.AMapLoader({
  key: '${AMapKey}',
  version: '${AMapVersion}',
  plugins: [],
});
`.trim();

const AMapUILoader = `
new AMapJS.AMapUILoader({ version: '1.0' });
`.trim();

module.exports = {
  pre: {
    AMapVersion,
    AMapKey,
    AMapLoader,
    AMapUILoader,
  },
  source: {
    AMapVersion,
    AMapKey: '494c7b315d60937fb6d3b7102a9cb4c3',
    AMapLoader: 'window.$AMapLoader',
    AMapUILoader: 'window.$AMapUILoader',
  },
};
