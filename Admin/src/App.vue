<template>
  <!-- 全局化配置 ( 主题 ) -->
  <NConfigProvider :theme="theme" :theme-overrides="themeOverrides" :locale="zhCN" :date-locale="dateZhCN" abstract>
    <!-- 加载条 ( 页面加载进度 ) -->
    <NLoadingBarProvider>
      <!-- 信息弹窗 -->
      <NMessageProvider>
        <router-view />
        <GetAppEnv />
      </NMessageProvider>
    </NLoadingBarProvider>
    <!-- 全局样式 ( 写入一些样式至 body 层 ) -->
    <NGlobalStyle />
  </NConfigProvider>
</template>

<script lang="ts" setup>
  import { useLoadingBar, useMessage } from 'naive-ui';
  import { app } from '@/shared/env';
  import { settings } from '@/settings';

  /** 主题相关 */
  const { theme, themeOverrides, zhCN, dateZhCN } = useNaiveTheme();
  /** 当前路由信息 */
  const route = useRoute();

  /** 获取当前应用的一些环境变量 */
  const GetAppEnv = () => {
    app.loadingBar = useLoadingBar();
    app.message = useMessage();
  };

  // 布局发生改变时, 移除上一个页面的信息弹窗
  //  - 比如登录后的提示 / 退出登录时的提示
  watch(() => route.meta.layout, () => {
    useTimeoutFn(() => app.message?.destroyAll(), 360);
  });

  useTitle(settings.title);
</script>
