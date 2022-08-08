<template>
  <div class="root flex justify-center">
    <div un:text="left sm" un:grid="~ cols-[auto_1fr] gap-x-2">
      <div un:text="gray">FPS:</div>
      <div>{{ fps }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const fps = useFps();
</script>

<style>
  @import "@unocss/reset/tailwind.css";
</style>
