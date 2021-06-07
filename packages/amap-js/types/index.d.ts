/**
 * AMapLoader
 */
interface AMapLoaderConstructor {
  new (options: { key: string; version: string; plugins?: string[] }): any;
  load(): Promise<any>;
  loadPlugin(plugins: Array<string>): Promise<any>;
}

declare var AMapLoader: AMapLoaderConstructor;

/**
 * AMapUILoader
 */
interface AMapUILoaderConstructor {
  new (options: { version: string }): any;
  load(): Promise<any>;
  loadUI(unames: Array<string>): Promise<any>;
  loadModule(unames: Array<string>): Promise<any>;
}

declare var AMapUILoader: AMapUILoaderConstructor;

/**
 * LocaLoader
 */
interface LocaLoaderConstructor {
  new (options: { key: string; version: string }): any;
  load(): Promise<any>;
}

declare var LocaLoader: LocaLoaderConstructor;

/**
 * SubwayLoader
 */
interface SubwayLoaderConstructor {
  new (options: { key: string; version: string }): any;
  load(): Promise<any>;
}

declare var SubwayLoader: SubwayLoaderConstructor;

/**
 * load
 */
declare var load: {
  <T>(loaders: Promise<any>, queue: boolean): Promise<T>;
};
