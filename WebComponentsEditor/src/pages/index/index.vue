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
        <n-tab-pane name="noop" tab="无组件预览" :closable="false" disabled />
      </n-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { VNodeChild } from 'vue';
  import type { SelectOption } from 'naive-ui';

  /** 所有组件信息 */
  const webComponentsInfo = Object.values(import.meta.globEager('@/web-components/*/info.ts'));
  /** 所有组件信息 - 下拉框选项 */
  const webComponentsOptions = webComponentsInfo.map(({ name, tag }) => ({ label: name, value: tag }));

  /** 所有的选项卡信息 */
  const tabs = [];

  /** 渲染下拉框 Label */
  function renderOptionLabel(option: SelectOption): VNodeChild {
    return [
      h('span', { class: 'text-sm' }, option.label as string),
      h('span', { class: 'text-xs color-gray-400' }, ` ( ${option.value} )`),
    ];
  }
</script>

<route lang="yaml">
name: Index
</route>
