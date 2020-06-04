const mdContainer = require('markdown-it-container');
const { parseTemplate } = require('../utils');
const rootscope = require('../rootscope').source;

module.exports = md => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : '';
        let content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';

        // 添加变量
        content = parseTemplate(content, rootscope);

        const scriptReg = /(<script[^>]*>)([\s\S]*?)(<\/[^>]*script>)/gi;
        return `<demo-block>
              ${description ? `<div>${md.render(description).html}</div>` : ''}
              <div slot="source" v-if="!$isServer">${content.replace(scriptReg, '$1!(function() { $2 })();$3')}</div>
            `;
      }
      return '</demo-block>';
    }
  });
}
