import { formatComponentsGlob } from '@/utils/formatComponentsGlob';
import { deepCloneESModule } from '@/utils/deepCloneESModule';

/** 组件注册文件引用 */
type ComponentsIndex = () => Promise<any>;

/** 组件信息 */
interface ComponentsInfo {
  /** 组件名称 */
  name: string
  /** 组件标签名 */
  tag: string
}

type Components = Record<string, {
  /** 组件信息 */
  info: ComponentsInfo
  /** 组件注册文件引用 */
  index: ComponentsIndex
  /** 组件测试数据 */
  data: any
}>;

/** 所有组件注册文件引用 */
const componentsIndex: Record<string, ComponentsIndex> = formatComponentsGlob(import.meta.glob('@/web-components/*/index.ts'));
/** 所有组件信息文件 */
const componentsInfo: Record<string, ComponentsInfo> = formatComponentsGlob(import.meta.globEager('@/web-components/*/info.ts'));
/** 所有组件的测试数据 */
const componentsData: Record<string, any> = formatComponentsGlob(import.meta.globEager('@/web-components/*/data.ts'));

/** 所有组件相关信息 */
export const components: Components = {};

// 保存所有的组件相关信息
Object.entries(componentsInfo).forEach(([name, info]) => {
  // index.ts 和 info.ts 必须同时存在, 才承认这是个组件
  if (!componentsIndex[name]) return;

  components[info.tag] = {
    info: deepCloneESModule(info),
    index: componentsIndex[name],
    data: deepCloneESModule(componentsData[name]),
  };
});

/** 所有组件相关信息 - 下拉框选项 */
export const componentsOptions = Object.values(components).map(({ info }) => {
  return {
    label: info.name,
    value: info.tag,
  };
});
