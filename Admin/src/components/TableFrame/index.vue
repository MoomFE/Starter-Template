<script lang="tsx" setup>
  import type { CardProps } from 'naive-ui';
  import BasicCard from '@/components/BasicCard/index.vue';

  interface Props {
    cardProps?: CardProps & Record<string, any>
  }

  defineProps<Props>();
</script>

<script lang="tsx">
  export default defineComponent({
    render() {
      const slots = this.$slots;
      const cardSlots = Object.keys(slots).filter(key => key.startsWith('card-'));

      return (
        <BasicCard class="size-full" card-props={{ class: 'size-full', ...this.cardProps }}>
          {
            Object.assign(
              // 传递给 <BasicCard /> 的插槽
              Object.fromEntries(cardSlots.map(key => [key.slice(5), slots[key]])),
              // 默认插槽内容
              {
                default: () => (
                  <div class="size-full p-3" un:flex="~ col gap-3">
                    {/* 头部区域 */}
                    {slots.header && (
                      <div>{{ default: slots.header }}</div>
                    )}
                    {/* 表格区域 */}
                    <div class="size-full flex-grow">{{ default: slots.default }}</div>
                  </div>
                ),
              },
            )
          }
        </BasicCard>
      );
    },
  });
</script>

<style lang="scss" scoped>
  // 居中分页
  :deep(.n-data-table) .n-data-table__pagination {
    @apply justify-center;
  }
</style>
