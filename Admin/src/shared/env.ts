import type { LoadingBarProviderInst, MessageProviderInst } from 'naive-ui';

interface App {
  /** 当前应用的加载条模块 */
  loadingBar?: LoadingBarProviderInst
  /** 当前应用的信息模块 */
  message?: MessageProviderInst
}

/** 当前应用的一些环境变量 */
export const app: App = {

};
