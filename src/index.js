import { version } from '../package';
import LoadQueue from './load-queue';
import AMapLoader from './loaders/amap-loader';
import AMapUILoader from './loaders/amap-ui-loader';
import LocaLoader from './loaders/loca-loader';
import SubwayLoader from './loaders/subway-loader';

const AMapJS = {
  version,
  LoadQueue,
  AMapLoader,
  AMapUILoader,
  LocaLoader,
  SubwayLoader,
};

/**
 * Export
 */
export { version, LoadQueue, AMapLoader, AMapUILoader, LocaLoader, SubwayLoader };

export default AMapJS;
