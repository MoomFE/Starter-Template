<template>
  <div class="w-full flex items-center justify-center gap-2 font-mono ws-nowrap overflow-hidden">
    <Logo class="!mx-0" :size="props.logoSize" />
    <div>{{ settings.title }}</div>
  </div>
</template>

<script lang="ts" setup>
  import { settings } from '@/settings';

  interface Props{
    logoSize?: string
  }

  const props = defineProps<Props>();
</script>
