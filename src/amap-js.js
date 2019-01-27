// loaders
import Loader from "./loaders/Loader.js";
import load from "./loaders/load.js";
import AMapJSAPILoader from "./loaders/AMapJSAPILoader.js";
import AMapUILoader from "./loaders/AMapUILoader.js";

// API
const AMapJS = {
  version: VERSION,
  Loader,
  load,
  AMapJSAPILoader,
  AMapUILoader
};

module.exports.default = module.exports = AMapJS;
