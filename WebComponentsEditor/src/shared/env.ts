import type { LoadingBarProviderInst } from 'naive-ui';

/** 当前应用的加载条模块的字段 */
export const AppLoadingBar = Symbol('');

interface App {
  /** 当前应用的加载条模块 */
  [AppLoadingBar]?: LoadingBarProviderInst
}

/** 当前应用的一些环境变量 */
export const app: App = {

};
