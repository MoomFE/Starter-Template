<template>
  <div class="footer flex justify-center text-2xl text-center mt-6">

    <!-- 回到首页 -->
    <button @click="router.push({ name: 'Index' })">
      <vaadin-home-o />
    </button>

    <!-- 切换深色模式 -->
    <button @click="theme.toggleDark()">
      <ic-outline-wb-sunny v-if="theme.dark" />
      <ph-moon v-else />
    </button>

  </div>
</template>

<script lang="ts" setup>
  import { useThemeStore } from '@/store/theme';

  const router = useRouter();
  const theme = useThemeStore();
</script>

<style lang="scss">
  .footer > * {
    @apply opacity-60 hover:text-primary hover:opacity-100 transition-all mx-2;
  }
</style>
