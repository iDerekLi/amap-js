import "./polyfills.js";

/**
 * Loaders
 */
import Loader from "./loaders/Loader.js";
import load from "./loaders/load.js";
import AMapJSAPILoader from "./loaders/AMapJSAPILoader.js";
import AMapUILoader from "./loaders/AMapUILoader.js";

import { version } from "../package.json";

/**
 * API
 */
const AMapJS = {
  version,
  Loader,
  load,
  AMapJSAPILoader,
  AMapUILoader
};

/**
 * Export
 */
export default AMapJS;
export { version };
export { Loader };
export { load };
export { AMapJSAPILoader };
export { AMapUILoader };
