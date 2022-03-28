<template>
  <!-- 全局化配置 ( 主题 ) -->
  <NConfigProvider :theme="theme" :theme-overrides="themeOverrides" :locale="zhCN" :date-locale="dateZhCN" abstract>
    <router-view />
    <GetAppEnv />
  </NConfigProvider>
</template>

<script lang="ts" setup>
  import { useNaiveTheme } from '@/composables/useNaiveTheme';
  import settings from '@/settings';

  const { theme, themeOverrides, zhCN, dateZhCN } = useNaiveTheme();

  useHead({
    title: settings.title,
  });
</script>
