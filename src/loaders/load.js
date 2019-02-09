import Loader from "./Loader.js";

/**
 * 加载loader
 * @param loaders
 * @param callbackThen 可选参数 通过回调方式返回，结果集为(a, b, c...)
 * @param callbackCatch 可选参数
 * @param callbackFinally 可选参数
 * @returns {Promise<any[]>} 结果集为([a, b, c...])
 */
function load(loaders, callbackThen, callbackCatch, callbackFinally) {
  const resourcesPromise = [];
  const _loaders = Array.isArray(loaders) ? loaders : [loaders];
  _loaders.forEach(loader => {
    if (!(loader instanceof Loader)) {
      throw new TypeError(`${loader} is not an instance of Loader`);
    }
    if (!(typeof loader.load === "function")) {
      throw new TypeError(`${loader.load} is not a function`);
    }

    const resource = loader.load();
    resourcesPromise.push(resource);
  });

  const allPromise = Promise.all(resourcesPromise);

  const callback = {
    then: callbackThen,
    catch: callbackCatch,
    finally: callbackFinally
  };
  const callbackQ = {
    then(res) {
      callback.then(...res);
    },
    catch(firstError) {
      callback.catch(firstError);
    },
    finally() {
      callback.finally();
    }
  };
  let apr = allPromise;
  for (const key in callback) {
    if (typeof callback[key] === "function") apr = apr[key](callbackQ[key]);
  }

  return allPromise;
}
export default load;
