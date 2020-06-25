import { version } from '../package';
import load from './load';
import AMapLoader from './loaders/amap-loader';
import AMapUILoader from './loaders/amap-ui-loader';
import LocaLoader from './loaders/loca-loader';
import SubwayLoader from './loaders/subway-loader';

const AMapJS = {
  version,
  load,
  AMapLoader,
  AMapUILoader,
  LocaLoader,
  SubwayLoader,
};

/**
 * Export
 */
export { version, load, AMapLoader, AMapUILoader, LocaLoader, SubwayLoader };

export default AMapJS;
