<template>
  <template v-for="tag in tab?.components" :key="tag">
    <component :is="tag" />
  </template>
</template>

<script lang="ts" setup>
  import { type Tab } from '../index/type';
  import { components } from '@/shared/components';

  /** 所有的选项卡信息 */
  const tabs = useLocalStorage<Tab[]>('st-tabs', []);
  /** 当前选项卡信息 */
  const tab = computed(() => tabs.value.find(({ key }) => key === window.name));

  watchEffect(() => {
    tab.value?.components.forEach((name) => {
      components[name]?.index();
    });
  });
</script>

<route lang="yaml">
name: Frame
</route>
