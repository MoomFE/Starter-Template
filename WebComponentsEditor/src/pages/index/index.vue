<template>
  <div class="w-screen h-screen p-3" un:grid="~ rows-[auto_1fr] gap-3">
    <!-- 操作区 -->
    <div class="flex gap-2">
      <div class="w-72">
        <n-select :options="webComponentsOptions" :render-label="renderOptionLabel" placeholder="请选择组件" clearable />
      </div>
      <n-button type="primary">新增</n-button>
    </div>
    <!-- 组件展示区 -->
    <div class="w-full h-full overflow-hidden">
      <n-tabs type="card" size="large" closable>
        <template v-if="tabs.length">
          <template v-for="tab in tabs" :key="tab.key">
            <n-tab-pane :name="tab.key" :tab="tab.title" />
          </template>
        </template>
        <n-tab-pane v-else name="noop" tab="无组件预览" :closable="false" disabled />
      </n-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useTabsManage } from './composables/useTabsManage';

  const { tabs, webComponentsOptions, renderOptionLabel } = useTabsManage();
</script>

<route lang="yaml">
name: Index
</route>
