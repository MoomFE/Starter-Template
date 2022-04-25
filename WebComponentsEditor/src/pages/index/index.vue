<template>
  <div class="w-screen h-screen p-3" un:grid="~ rows-[auto_1fr] gap-3">
    <!-- 操作区 -->
    <div class="flex items-center gap-2">
      <n-select
        v-model:value="componentsSelectValue"
        class="!w-72"
        :options="componentsOptions" :render-label="renderOptionLabel"
        placeholder="请选择组件" max-tag-count="responsive" clearable multiple
      />
      <n-button type="primary" :disabled="!componentsSelectValue.length" @click="createTab(componentsSelectValue)">
        新增
      </n-button>
    </div>

    <!-- 组件展示区 -->
    <div ref="tabsWrapRef" class="w-full h-full overflow-hidden">
      <n-tabs
        v-model:value="activeTab"
        :class="{ 'hidden-tabs-pad-border': tabs.length }"
        type="card" closable animated
        @close="closeTab"
      >
        <template v-if="tabs.length">
          <template v-for="tab in tabs" :key="tab.key">
            <n-tab-pane class="tab-pane-shadow !p-3 !pr-2" :name="tab.key" :tab="tab.title" :style="{ height: tabPaneHeight }" display-directive="show:lazy">
              <iframe class="w-full h-full" src="/frame" :name="tab.key" frameborder="0" />
            </n-tab-pane>
          </template>
        </template>
        <n-tab-pane v-else name="noop" tab="无组件预览" :closable="false" disabled />
      </n-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useTabPaneHeight, useTabsManage } from './composables/useTabsManage';
  import { componentsOptions } from '@/shared/components';

  /** 选项卡容器 */
  const tabsWrapRef = ref<HTMLElement>();

  /** 操作区选中的组件列表 */
  const componentsSelectValue = ref([]);

  /** 选项卡管理 */
  const { activeTab, tabs, createTab, closeTab, renderOptionLabel } = useTabsManage();
  /** 选项卡面板的高度 */
  const tabPaneHeight = useTabPaneHeight(tabsWrapRef);
</script>

<route lang="yaml">
name: Index
</route>

<style lang="scss" scoped>
  .hidden-tabs-pad-border :deep(.n-tabs-pad){
    border-bottom: 0 !important;
  }
  .tab-pane-shadow{
    box-shadow: inset 0px 0px 4px 0px rgba(0,0,0,0.2);
  }
</style>
