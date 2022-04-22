import type { VNodeChild } from 'vue';
import type { SelectOption } from 'naive-ui';
import type { Tab } from '../type';

/** 所有组件信息 */
const webComponentsInfo = Object.values(import.meta.globEager('@/web-components/*/info.ts'));
/** 所有组件信息 - 下拉框选项 */
const webComponentsOptions = webComponentsInfo.map(({ name, tag }) => ({ label: tag, value: name }));

/** 渲染下拉框 Label */
function renderOptionLabel(option: SelectOption): VNodeChild {
  return [
    h('span', { class: 'text-sm' }, option.label as string),
    h('span', { class: 'text-xs color-gray-400' }, ` ( ${option.value} )`),
  ];
}

export function useTabsManage() {
  /** 所有的选项卡信息 */
  const tabs: Tab[] = [];

  /** 创建一个新选项卡 */
  function createTab() {

  }

  return {
    webComponentsInfo,
    webComponentsOptions,
    renderOptionLabel,
    tabs,
    createTab,
  };
}
