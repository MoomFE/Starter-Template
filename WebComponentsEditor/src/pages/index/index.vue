<template>
  <div class="size-screen p-3" un:grid="~ rows-[auto_1fr] gap-3">
    <!-- 操作区 -->
    <div class="flex items-center gap-2">
      <n-select
        v-model:value="componentsSelectValue"
        class="!w-72"
        :options="componentsOptions" :render-label="renderOptionLabel"
        placeholder="请选择组件" clearable
      />
      <n-button type="primary" :disabled="!componentsSelectValue" @click="createTab(componentsSelectValue)">
        新增
      </n-button>
    </div>

    <!-- 组件展示区 -->
    <div ref="tabsWrapRef" class="size-full overflow-hidden">
      <n-tabs
        v-model:value="activeTabId"
        :class="{ 'hidden-tabs-pad-border': tabs.length }"
        type="card" closable animated
        @close="closeTab"
      >
        <!-- 所有的组建预览区 -->
        <template v-if="tabs.length">
          <template v-for="tab in tabs" :key="tab.id">
            <n-tab-pane class="tab-pane-shadow !p-3 !pr-2" :name="tab.id" :tab="renderTabTitle(tab.component)" :style="{ height: tabPaneHeight }" display-directive="show:lazy">
              <iframe class="size-full" src="/frame" :name="tab.id" frameborder="0" />
            </n-tab-pane>
          </template>
        </template>
        <!-- 无组件预览时 -->
        <n-tab-pane v-else name="noop" tab="无组件预览" :closable="false" disabled />
        <!-- 组件测试数据选择 -->
        <template v-if="activeTabData" #suffix>
          <n-select v-model:value="activeTab!.data" class="!w-36" size="small" placeholder="选择测试数据" :options="genTabDataOptions(activeTabData)" clearable />
        </template>
      </n-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useTabsManage } from './composables/useTabsManage';
  import { genTabDataOptions, renderOptionLabel, renderTabTitle, useTabPaneHeight } from './utils';
  import { componentsOptions } from '@/shared/components';

  /** 选项卡容器 */
  const tabsWrapRef = ref<HTMLElement>();

  /** 选项卡管理 */
  const { activeTab, activeTabId, activeTabData, tabs, createTab, closeTab } = useTabsManage();
  /** 选项卡面板的高度 */
  const tabPaneHeight = useTabPaneHeight(tabsWrapRef);

  /** 操作区选中的组件列表 */
  const componentsSelectValue = ref();
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
