const isProd = process.env.NODE_ENV === "production";

const version = process.env.v || "last";
const repo = "/"; // Custom domain repo = "/", github.io repo = "/amap-js/"

const baseConfig = {
  dev: {
    base: "/",
    dest: ".vuepress/amap-js/"
  },
  prod: {
    [version]: {
      base: `${repo}${version}/`,
      dest: `.vuepress/dist/${version}`
    },
    "last": {
      base: `${repo}`,
      dest: ".vuepress/dist/last"
    }
  }
};

module.exports = {
  ...(isProd ? baseConfig.prod[version] : baseConfig.dev),
  title: "AMapJS",
  description: "AMapJS, 基于AMap高德地图构建的API加载器。",
  repo: repo,
  themeConfig: {
    docsVersionRepo: repo,
    repo: "iDerekLi/amap-js",
    repoLabel: "Github",
    // 导航栏
    navbar: true,
    nav: [
      { text: "教程", link: "/guide/" },
      { text: "高德地图开发平台", link: "https://lbs.amap.com/" },
      { text: "国内镜像", link: "https://derekli.gitee.io/amap-js/" }
      // { text: "Github", link: "https://github.com/iDerekLi/amap-js" }
    ],
    // 侧边栏
    displayAllHeaders: false, // 默认值：false
    activeHeaderLinks: true, // 默认值：true
    sidebar: {
      // fallback
      "/guide/": [
        {
          title: "指南",
          collapsable: false,
          sidebarDepth: 0,
          children: ["", "install", "quickstart", "security", "changelog"]
        },
        {
          title: "文档",
          collapsable: false,
          sidebarDepth: 0,
          children: [
            {
              title: "Loaders",
              collapsable: false,
              sidebarDepth: 0
            },
            "amap-loader",
            "amap-ui-loader",
            "loca-loader",
            "subway-loader",
            {
              title: "Others",
              collapsable: false,
              collapsable: false,
              sidebarDepth: 0
            },
            "custom-loader",
            "load-queue"
          ]
        }
      ]
    },
    // 搜索框
    search: true,
    searchMaxSuggestions: 10
  },
  configureWebpack: (config, isServer) => {
    return {
      resolve: {
        alias: {
          "amap-js": "amap-js/dist/amap-js.js"
        }
      }
    };
  },
  markdown: {
    lineNumbers: false,
    extendMarkdown: md => {
      require("./md-loader/fence")(md);
      require("./md-loader/containers")(md);
    }
  },
  plugins: [
    require("./plugins/ga"),
    [
      "vuepress-plugin-container",
      {
        type: "tip",
        defaultTitle: ""
      }
    ],
    [
      "vuepress-plugin-container",
      {
        type: "warning",
        defaultTitle: ""
      }
    ],
    [
      "vuepress-plugin-container",
      {
        type: "danger",
        defaultTitle: ""
      }
    ]
  ]
};
