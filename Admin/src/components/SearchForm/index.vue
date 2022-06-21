<template>
  <Render />
</template>

<script lang="tsx" setup>
  import type { FormProps, GridProps } from 'naive-ui';
  import { NForm, NGrid, NGridItem } from 'naive-ui';
  import { Comment, Fragment } from 'vue';

  interface Props extends FormProps {
    /**
     * 单个栅格分隔宽度
     * @default 260
     */
    colWidth?: number
    /**
     * 传递给 grid 组件的参数
     */
    gridProps?: GridProps & Record<string, any>
  }

  const props = withDefaults(defineProps<Props>(), {
    colWidth: 260,
    gridProps: () => ({}),
  });

  const attrs = useAttrs();
  const slot = useSlots();

  const formRef = ref();
  const formWidth = useElementSize(formRef).width;

  /** 默认插槽内容 */
  const slotDefault = reactiveComputed(() => {
    return (slot.default?.() || []).filter(item => item.type !== Comment).reduce(
      (items: any[], item) => items.concat(item.type === Fragment ? item.children : item),
      [],
    );
  });
  /** 栅格数配置 */
  const cols = computed(() => {
    const length = formWidth.value / props.colWidth;

    return Array.from<string>({ length }).reduce(
      (cols, _, i) => `${cols} ${props.colWidth * (i + 2)}:${i + 2}`,
      '1',
    );
  });

  /** 渲染组件内容 */
  function Render() {
    return slot.default && (
      <NForm ref={ formRef } labelPlacement="left" showFeedback={ false } { ...attrs }>
        <NGrid cols={ cols.value } xGap="24" yGap="12" { ...props!.gridProps }>
          {slotDefault.map((item, index) => {
            return item.type === NGridItem
              ? h(item)
              : <NGridItem key={ item.component?.uid || index }>{ h(item) }</NGridItem>;
          })}
        </NGrid>
      </NForm>
    );
  }
</script>
