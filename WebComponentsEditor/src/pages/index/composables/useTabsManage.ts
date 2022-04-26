import { type Ref, type VNodeChild } from 'vue';
import { type SelectOption } from 'naive-ui';
import { uniqueKey } from '@moomfe/small-utils';
import { type Tab } from '../type';
import { components } from '@/shared/components';

/** 选项卡管理 */
export function useTabsManage() {
  /** 所有的选项卡信息 */
  const tabs = useLocalStorage<Tab[]>('st-tabs', []);
  /** 当前激活的选项卡 */
  const activeTab = useLocalStorage<string>('st-active-tab', '');

  /** 创建一个新选项卡 */
  function createTab(component: string) {
    const id = uniqueKey(tabs.value);

    tabs.value.push({
      id,
      component,
    });

    activeTab.value = id;
  }

  /** 关闭一个选项卡 */
  function closeTab(id: string) {
    const index = tabs.value.findIndex(tab => tab.id === id);

    if (index > -1) {
      tabs.value.splice(index, 1);
      activeTab.value === id && (activeTab.value = tabs.value[Math.min(index, tabs.value.length - 1)].id);
    }
  }

  return {
    activeTab,
    tabs,
    createTab,
    closeTab,
  };
}

/** 选项卡面板的高度 */
export function useTabPaneHeight(tabsWrapRef: Ref<HTMLElement | undefined>) {
  /** 选项卡导航 */
  const tabNav = computed(() => tabsWrapRef.value?.querySelector('.n-tabs-nav'));

  /** 选项卡容器高度 */
  const tabsWrapHeight = useElementSize(tabsWrapRef).height;
  /** 选项卡导航高度 */ // @ts-expect-error xxx
  const tabNavHeight = useElementSize(tabNav).height;

  return computed(() => {
    return `${tabsWrapHeight.value - tabNavHeight.value}px`;
  });
}

/** 渲染下拉框 Label */
export function renderOptionLabel(option: SelectOption): VNodeChild {
  return [
    h('span', { class: 'text-sm' }, option.value as string),
    h('span', { class: 'text-xs color-gray-400 ml-1' }, `( ${option.label} )`),
  ];
}

/**
 * 渲染选项卡名称
 * @param component 选项卡内的组件
 */
export function renderTabTitle(component: string) {
  return () => renderOptionLabel({ label: components[component].info.name, value: component });
}
