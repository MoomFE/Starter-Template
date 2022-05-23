<template>
  <div class="flex justify-center">
    <div un:text="left sm" un:grid="~ cols-[auto_1fr] gap-x-2">
      <div un:text="gray">FPS:</div>
      <div>{{ fps }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const fps = useFps();
</script>

<script lang="ts">
  import reset from '@unocss/reset/tailwind.css?raw';

  export default {
    styles: [reset, `@unocss-placeholder`], // eslint-disable-line @typescript-eslint/quotes
  };
</script>
