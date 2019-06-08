import "./polyfills.js";
import { version } from "../package";
import Loader from "./loaders/Loader";
import AMapJSAPILoader from "./loaders/AMapJSAPILoader";
import AMapUILoader from "./loaders/AMapUILoader";
import load from "./loaders/load";
import store from "./store";

function use(plugin, options) {
  plugin.install(AMapJS, options);
}

const AMapJS = {
  version: version,
  Loader: Loader,
  AMapJSAPILoader: AMapJSAPILoader,
  AMapUILoader: AMapUILoader,
  load: load,
  use: use,
  store: store
};

/**
 * Export
 */
export default AMapJS;
