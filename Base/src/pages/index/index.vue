<template>
  <Logo />

  <div class="mt-2">
    {{ t('index.title') }}
  </div>
</template>

<script lang="ts" setup>
  const { t } = useI18n();
</script>

<route lang="yaml">
  name: Index
  meta:
    layout: home
</route>
