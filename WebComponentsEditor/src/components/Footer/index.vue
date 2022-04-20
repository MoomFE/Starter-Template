<template>
  <div class="footer flex justify-center text-2xl text-center mt-6">
    <!-- 回到首页 -->
    <button title="首页" @click="router.push({ name: 'Index' })">
      <i-vaadin-home-o />
    </button>

    <!-- 切换深色模式 -->
    <button title="切换暗色模式" @click="theme.toggleDark()">
      <i-ph-moon v-if="theme.dark" />
      <i-ic-outline-wb-sunny v-else />
    </button>
  </div>
</template>

<script lang="ts" setup>
  import { useThemeStore } from '@/stores/theme';

  const router = useRouter();
  const theme = useThemeStore();
</script>

<style lang="scss">
  .footer > * {
    @apply opacity-60 hover:text-primary hover:opacity-100 transition-all mx-2;
  }
</style>
