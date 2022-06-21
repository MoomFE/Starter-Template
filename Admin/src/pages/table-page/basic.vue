<template>
  <TableFrame>
    <!-- 筛选条件 -->
    <template #header>
      <SearchForm label-width="80">
        <n-form-item label="筛选条件">
          <n-input />
        </n-form-item>
        <n-button type="primary">搜索</n-button>
      </SearchForm>
    </template>
    <!-- 表格 -->
    <n-data-table
      class="size-full" flex-height
    />
  </TableFrame>
</template>

<script lang="ts" setup>

</script>

<route lang="yaml">
name: TablePage/Basic
meta:
  title: 基础表格
</route>
