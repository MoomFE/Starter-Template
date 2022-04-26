<template>
  <template v-if="tab">
    <component :is="tab.component" v-bind="data" />
  </template>
</template>

<script lang="ts" setup>
  import { type Tab } from '../index/type';
  import { components } from '@/shared/components';

  /** 所有的选项卡信息 */
  const tabs = useLocalStorage<Tab[]>('st-tabs', []);
  /** 当前选项卡信息 */
  const tab = computed(() => tabs.value.find(tab => tab.id === window.name));
  /** 当前选项卡测试数据 */
  const data = computed(() => components[tab.value?.component as string]?.data?.[tab.value?.data as string] || {});

  // 加载组件
  watchEffect(() => {
    components[tab.value?.component as string]?.index();
  });
</script>

<route lang="yaml">
name: Frame
</route>
