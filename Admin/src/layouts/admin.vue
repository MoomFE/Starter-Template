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

    <!-- 主内容区域 -->
    <n-layout ref="rootRef">
      <div class="h-full" un:flex="~ col">
        <!-- 顶部菜单栏 -->
        <n-layout-header class="z-1">
          <Navbar />
        </n-layout-header>
        <!-- 内容区域 -->
        <div ref="contentRef" class="h-full flex-grow overflow-hidden">
          <n-scrollbar class="h-full">
            <div class="flex transition-colors duration-colors" un:bg="gray-100 dark:black" :style="{ minHeight: `${contentHeight}px` }">
              <div class="w-full flex-grow">
                <router-view />
              </div>
            </div>
          </n-scrollbar>
        </div>
      </div>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
  import AsideMenu from './admin-components/AsideMenu/index.vue';
  import Navbar from './admin-components/Navbar/index.vue';

  const contentRef = ref();
  const contentHeight = useElementSize(contentRef).height;
</script>

<style lang="scss">
  .n-layout-header{
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  }
</style>
