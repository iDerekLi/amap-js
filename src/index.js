import { version } from '../package';
import load from './load';
import AMapLoader from './loaders/amap-jsapi-loader';
import AMapUILoader from './loaders/amap-ui-loader';
import LocaLoader from './loaders/loca-loader';

const AMapJS = {
  version,
  load,
  AMapLoader,
  AMapUILoader,
  LocaLoader,
};

/**
 * Export
 */
export { version, load, AMapLoader, AMapUILoader, LocaLoader };

export default AMapJS;
