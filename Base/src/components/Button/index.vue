<template>
  <button
    class="
      px-4 py-1 rounded
      text-white
      bg-primary hover:bg-primary-hover active:bg-primary-active
    "
    @click="emit('click')"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
  const emit = defineEmits(['click']);
</script>
