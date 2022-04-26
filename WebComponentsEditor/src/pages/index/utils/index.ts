import { type Ref, type VNodeChild } from 'vue';
import { type SelectOption } from 'naive-ui';
import { components } from '@/shared/components';

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

/** 生成测试数据下拉框选项 */
export function genTabDataOptions(data: any) {
  return Object.keys(data).map(key => ({ label: key, value: key }));
}
