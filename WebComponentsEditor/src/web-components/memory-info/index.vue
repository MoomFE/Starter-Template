<template>
  <template v-if="isSupported && memory">
    <div class="flex justify-center">
      <div un:text="left sm" un:grid="~ cols-[auto_1fr] gap-(x-3 y-1)">
        <div un:text="gray">Used:</div>
        <div>{{ size(memory.usedJSHeapSize) }}</div>
        <div un:text="gray">Allocated:</div>
        <div>{{ size(memory.totalJSHeapSize) }}</div>
        <div un:text="gray">Limit:</div>
        <div>{{ size(memory.jsHeapSizeLimit) }}</div>
      </div>
    </div>
  </template>
  <div v-else>
    Your browser does not support performance memory API
  </div>
</template>

<script lang="ts" setup>
  const { isSupported, memory } = useMemory();

  function size(b: number) {
    const MB = b / 1024 / 1024;
    return `${MB.toFixed(2)} MB`;
  }
</script>

<script lang="ts">
  import reset from '@unocss/reset/tailwind.css?raw';

  export default {
    styles: [reset, `@unocss-placeholder`], // eslint-disable-line quotes
  };
</script>
