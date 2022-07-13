<template>
  <div class="min-h-screen flex">
    <div class="w-full flex-grow">
      <template v-if="tab">
        <component :is="tab.component" v-bind="isReady ? finalData : {}" />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { isFunction } from '@moomfe/small-utils';
  import { type Tab } from '../index/type';
  import { components } from '@/shared/components';

  interface Props {
    tabId?: string
  }

  const props = defineProps<Props>();

  /** 组件是否加载完成 */
  const isReady = ref(false);

  /** 所有的选项卡信息 */
  const tabs = useLocalStorage<Tab[]>('st-tabs', []);
  /** 当前选项卡信息 */
  const tab = computed(() => tabs.value.find(tab => tab.id === (props.tabId ?? window.name)));
  /** 当前选项卡测试数据 */
  const data = computed(() => components[tab.value?.component as string]?.data?.[tab.value?.data as string] || {});
  /** 最终使用的选项卡数据 - 支持使用函数返回测试数据 */
  const finalData = computed(() => {
    return isFunction(data.value) ? data.value({ reloadCount: tab.value?.dataReloadCount ?? 0 }) : data.value;
  });

  // 加载组件
  watchEffect(() => {
    components[tab.value?.component as string]?.index().then(() => {
      isReady.value = true;
    });
  });
</script>

<route lang="yaml">
name: Frame
</route>
