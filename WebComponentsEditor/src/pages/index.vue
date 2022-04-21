<template>
  <st-memory-info />

  <div class="my-10">
    <st-fps-info />
  </div>
</template>

<script lang="ts" setup>
  import '@/web-components/memory-info/index';
  import '@/web-components/fps-info/index';

</script>

<route lang="yaml">
name: Index
meta:
  layout: home
</route>
