<template>
  <div class="mx-auto relative" :class="props.size">
    <i-logos-vue class="w-full h-full" />
    <i-carbon-template class="w-1/2 h-1/2 absolute right-0 bottom-0" />
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    size: {
      type: String,
      default: 'size-12',
    },
  });
</script>
