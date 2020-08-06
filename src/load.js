import Loader from './loaders/loader';

function queueLoad(loaders) {
  let promise = Promise.resolve([]);

  for (let i = 0, len = loaders.length; i < len; i++) {
    const loader = loaders[i];
    promise = promise.then(result => {
      return new Promise(async (resolve, reject) => {
        try {
          if (loader instanceof Loader) {
            result.push(await loader.load());
          } else {
            result.push(await loader);
          }
          resolve(result);
        } catch (e) {
          reject(e);
        }
      });
    });
  }

  return promise;
}

function parallelLoad(loaders) {
  const promiseList = [];

  for (let i = 0, len = loaders.length; i < len; i++) {
    const loader = loaders[i];
    if (loader instanceof Loader) {
      promiseList.push(loader.load());
    } else {
      promiseList.push(loader);
    }
  }

  return Promise.all(promiseList);
}

/**
 * load
 * @param loaders
 * @returns {Promise<any[]>}
 */
function load(loaders = [], queue = true) {
  return queue ? queueLoad(loaders) : parallelLoad(loaders);
}

export default load;
