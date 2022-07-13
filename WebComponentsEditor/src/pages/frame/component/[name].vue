<template>
  <Index :component="name" />
</template>

<script lang="ts" setup>
  import Index from '../index.vue';

  const route = useRoute();
  const name = computed(() => route.params.name as string);
</script>
