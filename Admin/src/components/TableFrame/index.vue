<template>
  <BasicCard class="size-full" :card-props="{ class: 'size-full' }">
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
  </BasicCard>
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
