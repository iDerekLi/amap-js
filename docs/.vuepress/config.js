const isProd = process.env.NODE_ENV === 'production';

const version = process.env.v;

const baseConfig = {
  dev: {
    base: '/',
    dest: 'docs/.vuepress/amap-js/',
  },
  prod: {
    [version]: {
      base: `/amap-js/${version}/`,
      dest: `docs/.vuepress/dist/amap-js_version`,
    },
    '*': {
      base: '/amap-js/',
      dest: 'docs/.vuepress/dist/amap-js',
    },
  },
};

module.exports = {
  ...(isProd ? baseConfig.prod[version] : baseConfig.dev),
  title: 'AMapJS',
  description: 'AMapJS 高德地图加载器',
  themeConfig: {
    // 导航栏
    navbar: true,
    nav: [
      { text: '教程', link: '/guide/' },
      { text: '高德地图开发平台', link: 'https://lbs.amap.com/' },
      { text: 'Github', link: 'https://github.com/iDerekLi/amap-js' },
    ],
    // 侧边栏
    displayAllHeaders: false, // 默认值：false
    activeHeaderLinks: true, // 默认值：true
    sidebar: {
      // fallback
      '/guide/': [
        {
          title: '指南',
          collapsable: false,
          sidebarDepth: 0,
          children: ['', 'install', 'quickstart'],
        },
        {
          title: '文档',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            {
              title: 'Loaders',
              collapsable: false,
              sidebarDepth: 0,
            },
            'amap-loader',
            'amap-ui-loader',
            // 'loca-loader',
            {
              title: 'Others',
              collapsable: false,
              collapsable: false,
              sidebarDepth: 0,
            },
            'load',
          ],
        },
      ],
    },
    // 搜索框
    search: true,
    searchMaxSuggestions: 10,
  },
  configureWebpack: {
    // entry: {
    //   'amap-js': ['../../src/index.js']
    // },
  },
  markdown: {
    lineNumbers: false,
    extendMarkdown: md => {
      require('./md-loader/fence')(md);
      require('./md-loader/containers')(md);
    },
  },
  plugins: [
    require('./plugins/ga'),
    [
      'vuepress-plugin-container',
      {
        type: 'tip',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'warning',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'danger',
        defaultTitle: '',
      },
    ],
  ],
};
