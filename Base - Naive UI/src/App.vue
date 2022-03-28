<template>
  <!-- 全局化配置 ( 主题 ) -->
  <NConfigProvider :theme="theme" :theme-overrides="themeOverrides" :locale="zhCN" :date-locale="dateZhCN" abstract>
    <!-- 加载条 ( 页面加载进度 ) -->
    <NLoadingBarProvider>
      <router-view />
      <GetAppEnv />
    </NLoadingBarProvider>
  </NConfigProvider>
</template>

<script lang="ts" setup>
  import { useLoadingBar } from 'naive-ui';
  import { useNaiveTheme } from '@/composables/useNaiveTheme';
  import { AppLoadingBar, app } from '@/shared/env';
  import { settings } from '@/settings';

  /** 主题相关 */
  const { theme, themeOverrides, zhCN, dateZhCN } = useNaiveTheme();

  /** 获取当前应用的一些环境变量 */
  const GetAppEnv = () => {
    app[AppLoadingBar] = useLoadingBar();
  };

  useHead({
    title: settings.title,
  });
</script>
