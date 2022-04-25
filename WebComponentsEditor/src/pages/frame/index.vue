<template>
  {{ tab }}
</template>

<script lang="ts" setup>
  import { type Tab } from '../index/type';

  /** 所有的选项卡信息 */
  const tabs = useLocalStorage<Tab[]>('st-tabs', []);
  /** 当前选项卡信息 */
  const tab = computed(() => tabs.value.find(({ key }) => key === window.name));

  /** 所有的组件列表 */
  // const allComponents = Object.fromEntries(
  //   Object.entries(import.meta.glob('@/web-components/**/index.{js,ts}')).map(([path, component]) => {
  //     return [
  //       path.split('/').reverse()[1],
  //       component,
  //     ];
  //   }),
  // );
</script>

<route lang="yaml">
name: Frame
</route>
