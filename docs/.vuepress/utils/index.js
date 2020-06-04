function parseTemplate(src, params) {
  return src
    ? src.replace(/\$([A-Za-z0-9_]+)/g, (match, key) =>
      void 0 === params[key] ? match : params[key],
    )
    : '';
}

module.exports = {
  parseTemplate,
};
