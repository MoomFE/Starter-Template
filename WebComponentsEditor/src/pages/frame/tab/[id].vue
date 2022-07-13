<template>
  <Index :tab-id="id" />
</template>

<script lang="ts" setup>
  import Index from '../index.vue';

  const route = useRoute();
  const id = route.params.id as string;
</script>
