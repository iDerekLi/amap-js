import Loader from "./Loader.js";

function load(loaders) {
  const resourcesPromise = [];
  loaders.forEach(loader => {
    if (!(loader instanceof Loader)) {
      throw new TypeError(`${loader} is not an instance of Loader`);
    }
    if (!(typeof loader.load === "function")) {
      throw new TypeError(`${loader.load} is not a function`);
    }

    const resource = loader.load();
    resourcesPromise.push(resource);
  });
  return Promise.all(resourcesPromise);
}
export default load;
