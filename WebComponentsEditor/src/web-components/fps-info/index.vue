<template>
  <div class="flex justify-center">
    <div class="text-left" un:grid="~ cols-[auto_1fr] gap-x-2">
      <div>FPS:</div>
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
    styles: [reset, `@unocss-placeholder`], // eslint-disable-line quotes
  };
</script>
