import Loader from './loaders/loader';

/**
 * load
 * @param loaders
 * @returns {Promise<any[]>}
 */
function load(loaders = []) {
  const promiseList = [];

  loaders.forEach(loader => {
    if (loader instanceof Loader) {
      promiseList.push(loader.load());
    } else {
      promiseList.push(loader);
    }
  });

  return Promise.all(promiseList);
}

export default load;
