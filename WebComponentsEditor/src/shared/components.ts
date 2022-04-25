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
  /** 组件注册文件引用 */
  index: ComponentsIndex
  /** 组件信息 */
  info: ComponentsInfo
}>;

/** 格式化导入文件的信息 */
function format(files: Record<string, any>) {
  return Object.fromEntries(
    Object.entries(files).map(([path, value]) => {
      return [path.split('/').reverse()[1], value];
    }),
  );
}

/** 所有组件注册文件引用 */
const componentsIndex: Record<string, ComponentsIndex> = format(import.meta.glob('@/web-components/*/index.ts'));
/** 所有组件信息文件 */
const componentsInfo: Record<string, ComponentsInfo> = format(import.meta.globEager('@/web-components/*/info.ts'));

/** 所有组件相关信息 */
export const components: Components = {};

// 保存所有的组件相关信息
Object.entries(componentsInfo).forEach(([name, info]) => {
  // index.ts 和 info.ts 必须同时存在
  if (!componentsIndex[name]) return;

  components[info.tag] = {
    index: componentsIndex[name],
    info,
  };
});

/** 所有组件相关信息 - 下拉框选项 */
export const componentsOptions = Object.values(components).map(({ info }) => {
  return {
    label: info.name,
    value: info.tag,
  };
});
