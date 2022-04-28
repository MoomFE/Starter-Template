import { uniqueKey } from '@moomfe/small-utils';
import { type Tab } from '../type';
import { components } from '@/shared/components';

/** 选项卡管理 */
export function useTabsManage() {
  /** 所有的选项卡信息 */
  const tabs = useLocalStorage<Tab[]>('st-tabs', []);
  /** 当前激活的选项卡 ID */
  const activeTabId = useLocalStorage<string>('st-active-tab-id', '');
  /** 当前激活的选项卡 */
  const activeTab = computed(() => tabs.value.find(tab => tab.id === activeTabId.value));
  /** 当前激活的选项卡的测试数据 */
  const activeTabData = computed(() => components[activeTab.value?.component as string]?.data);

  /** 创建一个新选项卡 */
  function createTab(component: string) {
    const id = uniqueKey(tabs.value);

    tabs.value.push({
      id,
      component,
    });

    activeTabId.value = id;
  }

  /** 关闭一个选项卡 */
  function closeTab(id: string) {
    const index = tabs.value.findIndex(tab => tab.id === id);

    if (index > -1) {
      tabs.value.splice(index, 1);
      activeTabId.value === id && (activeTabId.value = tabs.value[Math.min(index, tabs.value.length - 1)].id);
    }
  }

  return {
    activeTab,
    activeTabId,
    activeTabData,
    tabs,
    createTab,
    closeTab,
  };
}
