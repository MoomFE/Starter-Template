<template>
  <template v-if="tab">
    <component :is="tab.component" v-bind="isReady ? data : {}" />
  </template>
</template>

<script lang="ts" setup>
  import { isFunction } from '@moomfe/small-utils';
  import { type Tab } from '../index/type';
  import { components } from '@/shared/components';

  /** 组件是否加载完成 */
  const isReady = ref(false);

  /** 所有的选项卡信息 */
  const tabs = useLocalStorage<Tab[]>('st-tabs', []);
  /** 当前选项卡信息 */
  const tab = computed(() => tabs.value.find(tab => tab.id === window.name));
  /** 当前选项卡测试数据 - 支持使用函数返回测试数据 */
  const data = computed(() => {
    const result = components[tab.value?.component as string]?.data?.[tab.value?.data as string] || {};

    if (isFunction(result))
      return result();

    return result;
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
