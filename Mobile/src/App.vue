<template>
  <router-view />
</template>

<script lang="ts" setup>
  import settings from '@/settings';

  useHead({
    title: `${settings.title}666`,
  });
</script>
