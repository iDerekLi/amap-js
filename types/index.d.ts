interface AMapLoaderConstructor {
  new (options: {
    key: string; // 申请的高德Key
    version: string; // 版本号，缺省时默认为 1.4.15
    plugins?: string[]; // 插件列表
  }): any;
  load(): Promise<any>;
  loadPlugin(plugins: Array<string>): Promise<any>;
}

declare var AMapLoader: AMapLoaderConstructor;

interface AMapUILoaderConstructor {
  new (options: {
    version: string; // 版本号，缺省时默认为 1.0
  }): any;
  load(): Promise<any>;
  loadUI(unames: Array<string>): Promise<any>;
  loadModule(unames: Array<string>): Promise<any>;
}

declare var AMapUILoader: AMapUILoaderConstructor;

declare var load: {
  (loaders: Array<any>): Promise<any>;
};
