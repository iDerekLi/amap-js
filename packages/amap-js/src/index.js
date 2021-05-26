import { version } from "./constants";
import AMapLoader from "./loaders/AMapLoader";
import AMapUILoader from "./loaders/AMapUILoader";
import LocaLoader from "./loaders/LocaLoader";
import SubwayLoader from "./loaders/SubwayLoader";
import LoadQueue from "./LoadQueue";

const AMapJS = {
  version,
  AMapLoader,
  AMapUILoader,
  LocaLoader,
  SubwayLoader,
  LoadQueue
};

/**
 * Export
 */
export { version, AMapLoader, AMapUILoader, LocaLoader, SubwayLoader, LoadQueue };

export default AMapJS;
