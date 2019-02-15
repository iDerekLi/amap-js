/**
 * 对象转url参数
 * @param data 格式化对象
 * @param prefix 前缀 ["?" | "&" | "" | true | false]
 * @returns {string}
 */
function includes(search, array) {
  for (let i in array) {
    if (search === array[i]) return true;
  }
  return false;
}

function queryParams(data, prefix = "") {
  prefix = typeof prefix === "boolean" ? "?" : prefix;
  let _result = [];
  for (let key in data) {
    let value = data[key];
    // 去掉为空的参数
    if (includes(value, ["", undefined, null])) {
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
