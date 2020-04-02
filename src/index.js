import { version } from '../package';
import load from './load';
import AMapLoader from './loaders/amap-jsapi-loader';
import AMapUILoader from './loaders/amap-ui-loader';

const AMapJS = {
  version,
  load,
  AMapLoader,
  AMapUILoader,
};

/**
 * Export
 */
export { version, load, AMapLoader, AMapUILoader };

export default AMapJS;
