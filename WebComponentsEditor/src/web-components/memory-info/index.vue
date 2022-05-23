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
  const props = defineProps<{ unit?: 'KB' | 'MB' }>();

  const { isSupported, memory } = useMemory();

  const unit = refDefault(
    toRef(props, 'unit'),
    'MB',
  );

  function size(b: number) {
    const KB = b / 1024;

    if (unit.value === 'KB') return `${KB.toFixed(2)} KB`;
    if (unit.value === 'MB') return `${(KB / 1024).toFixed(2)} MB`;
  }
</script>

<script lang="ts">
  import reset from '@unocss/reset/tailwind.css?raw';

  export default {
    styles: [reset, `@unocss-placeholder`], // eslint-disable-line @typescript-eslint/quotes
  };
</script>
