<template>
  <div class="w-full flex items-center justify-center gap-2 font-mono overflow-hidden px-[.5em]">
    <Logo class="flex-none" :size="props.logoSize" />
    <div class="truncate">{{ settings.title }}</div>
  </div>
</template>

<script lang="ts" setup>
  import { settings } from '@/settings';

  interface Props {
    logoSize?: string
  }

  const props = defineProps<Props>();
</script>
