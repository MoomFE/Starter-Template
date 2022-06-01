<script lang="tsx" setup>
  import type { CardProps } from 'naive-ui';
  import { NCard } from 'naive-ui';

  interface Props {
    cardProps?: CardProps & Record<string, any>
  }

  defineProps<Props>();
</script>

<script lang="tsx">
  export default defineComponent({
    render() {
      return (
        <div class="st-basic-card" { ...this.$attrs }>
          <NCard headerStyle="padding: 0" contentStyle="padding: 0" footerStyle="padding: 0" bordered={ false } { ...this.cardProps }>
            {{ ...this.$slots }}
          </NCard>
        </div>
      );
    },
  });
</script>

<style lang="scss" scoped>
  .st-basic-card {
    @apply p-2.5;

    + .st-basic-card {
      @apply pt-0;
    }
  }
</style>
