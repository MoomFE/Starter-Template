<template>
  <n-layout class="h-screen" has-sider>
    <!-- 左侧区域 / 侧边栏 -->
    <n-layout-sider
      width="200" inverted
      :collapsed="false" :collapsed-width="64"
      :native-scrollbar="false"
    >
      <LogoTitle class="h-16 text-sm" logo-size="size-8" />
      <AsideMenu />
    </n-layout-sider>

    <!-- 右侧区域 -->
    <n-layout>
      <!-- 顶部菜单栏 -->
      <n-layout-header>123</n-layout-header>
      <!-- 内容区域 -->
      <n-layout-content>
        456
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
  import AsideMenu from './admin-components/AsideMenu/index.vue';

</script>
