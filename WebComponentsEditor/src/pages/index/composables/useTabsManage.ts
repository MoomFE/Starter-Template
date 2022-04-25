import { type Ref, type VNodeChild } from 'vue';
import { type SelectOption } from 'naive-ui';
import { uniqueId } from 'lodash-es';
import { type Tab } from '../type';

/** 渲染下拉框 Label */
function renderOptionLabel(option: SelectOption): VNodeChild {
  return [
    h('span', { class: 'text-sm' }, option.value as string),
    h('span', { class: 'text-xs color-gray-400' }, ` ( ${option.label} )`),
  ];
}

export function useTabsManage() {
  /** 所有的选项卡信息 */
  const tabs = useLocalStorage<Tab[]>('st-tabs', []);
  /** 当前激活的选项卡 */
  const activeTab = ref();
  /** 新建的选项卡数量 */
  let index = 0;

  /** 创建一个新选项卡 */
  function createTab(components: string[]) {
    const key = `tab-${uniqueId()}`;
    const title = `选项卡 ${++index}`;

    tabs.value.push({
      key,
      title,
      components,
    });

    activeTab.value = key;
  }

  /** 关闭一个选项卡 */
  function closeTab(key: string) {
    const index = tabs.value.findIndex(tab => tab.key === key);

    if (index > -1) {
      tabs.value.splice(index, 1);
      activeTab.value === key && (activeTab.value = tabs.value[Math.min(index, tabs.value.length - 1)].key);
    }
  }

  return {
    renderOptionLabel,
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
