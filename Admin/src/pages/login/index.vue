<template>
  <div class="flex">
    <div class="w-full min-h-screen items-center justify-center" un:flex="~ grow">
      <div class="w-120 max-w-full" un:p="x-3 y-6">
        <!-- Logo -->
        <div class="flex justify-center items-center gap-5">
          <Logo class="!mx-0" />
          <div class="text-3xl">{{ settings.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { settings } from '@/settings';

</script>

<route lang="yaml">
name: Login
</route>
