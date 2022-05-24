<template>
  <div class="size-full p-2.5">
    <n-card class="size-full" content-style="padding: 0" :bordered="false">
      <div class="size-full p-4" un:flex="~ col gap-4">
        <!-- 头部区域 -->
        <div v-if="slot.header">
          <slot name="header" />
        </div>
        <!-- 表格区域 -->
        <div class="size-full flex-grow">
          <slot />
        </div>
      </div>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  const slot = useSlots();
</script>

<style lang="scss" scoped>
  // 居中分页
  :deep(.n-data-table) .n-data-table__pagination {
    @apply justify-center;
  }
</style>
