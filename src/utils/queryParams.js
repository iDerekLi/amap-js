/**
 * 对象转url参数方法
 * @param data 格式化对象
 * @param isPrefix 前缀
 * @returns {string}
 */
function queryParams(data, isPrefix = false) {
  let prefix = isPrefix ? "?" : "";
  let _result = [];
  for (let key in data) {
    let value = data[key];
    // 去掉为空的参数
    if (["", undefined, null].includes(value)) {
      continue;
    }
    if (value.constructor === Array) {
      value.forEach(_value => {
        _result.push(
          encodeURIComponent(key) + "[]=" + encodeURIComponent(_value)
        );
      });
    } else {
      _result.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
    }
  }

  return _result.length ? prefix + _result.join("&") : "";
}

export default queryParams;
