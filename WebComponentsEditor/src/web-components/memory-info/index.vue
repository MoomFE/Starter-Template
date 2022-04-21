<template>
  <template v-if="isSupported && memory">
    <div class="flex justify-center">
      <div class="text-left" un:grid="~ cols-[auto_1fr] gap-x-2">
        <div>Used:</div>
        <div>{{ size(memory.usedJSHeapSize) }}</div>
        <div>Allocated:</div>
        <div>{{ size(memory.totalJSHeapSize) }}</div>
        <div>Limit:</div>
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
