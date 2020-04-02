import { version } from '../package';
import load from './load';
import AMapLoader from './loaders/amap-jsapi-loader';
import AMapUILoader from './loaders/amap-ui-loader';
var AMapJS = {
  version: version,
  load: load,
  AMapLoader: AMapLoader,
  AMapUILoader: AMapUILoader
};
/**
 * Export
 */

export { version, load, AMapLoader, AMapUILoader };
export default AMapJS;