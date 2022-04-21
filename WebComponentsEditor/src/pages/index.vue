<template>
  <div class="w-screen h-screen p-3">
    <n-tabs type="card" size="large" closable>
      <!-- 新增 自定义组件 渲染 -->
      <template #suffix>
        <div class="flex gap-2">
          <div class="w-72">
            <n-select :options="webComponentsOptions" :render-label="renderOptionLabel" clearable />
          </div>
          <n-button type="primary">添加</n-button>
        </div>
      </template>

      <n-tab-pane name="noop" tab="点击右侧新增自定义组件" :closable="false" disabled />
    </n-tabs>
  </div>
</template>

<script lang="ts" setup>
  import type { VNodeChild } from 'vue';
  import type { SelectOption } from 'naive-ui';

  import '@/web-components/memory-info/index';
  import '@/web-components/fps-info/index';

  /** 所有组件信息 */
  const webComponentsInfo = Object.values(import.meta.globEager('@/web-components/*/info.ts'));
  /** 所有组件信息 - 下拉框选项 */
  const webComponentsOptions = webComponentsInfo.map(({ name, tag }) => ({ label: name, value: tag }));

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
