declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent<{}, {}, any>;
  export default component;
}


export interface Settings{
  /** 项目名称 */
  title: string;
}