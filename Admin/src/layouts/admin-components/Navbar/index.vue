<template>
  <div class="w-full h-16 items-center px-5" un:flex="~ gap-3">
    <!-- 面包屑导航 -->
    <n-breadcrumb>
      <template v-for="item in breadcrumb" :key="item.name">
        <n-breadcrumb-item>{{ item.meta?.title }}</n-breadcrumb-item>
      </template>
    </n-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
  const route = useRoute();

  /** 面包屑 */
  const breadcrumb = computed(() => {
    return route.matched.filter(item => item.meta?.title);
  });
</script>

<style lang="scss" scoped>
  // 屏蔽面包屑默认样式
  .n-breadcrumb :deep(.n-breadcrumb-item:not(:last-child)) .n-breadcrumb-item__link{
    color: var(--n-separator-color);
    cursor: auto;
  }
</style>
