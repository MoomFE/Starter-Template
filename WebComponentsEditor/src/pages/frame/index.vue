<template>
  <component :is="tab?.component" />
</template>

<script lang="ts" setup>
  import { type Tab } from '../index/type';
  import { components } from '@/shared/components';

  /** 所有的选项卡信息 */
  const tabs = useLocalStorage<Tab[]>('st-tabs', []);
  /** 当前选项卡信息 */
  const tab = computed(() => tabs.value.find(tab => tab.id === window.name));

  watchEffect(() => {
    const component = tab.value?.component;

    if (component)
      components[component]?.index();
  });
</script>

<route lang="yaml">
name: Frame
</route>
