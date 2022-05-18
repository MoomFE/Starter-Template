<template>
  <n-menu
    v-model:value="menuValue"
    mode="vertical"
    inverted
    :options="routes"
    :indent="24" :icon-size="20"
    :collapsed-icon-size="20"
  />
</template>

<script lang="ts" setup>
  import { generatorMenu } from '@/modules/router/utils';

  const route = useRoute();
  const router = useRouter();

  const routes = computed(() => {
    return generatorMenu(router.options.routes);
  });

  /** 菜单当前选中值 */
  const menuValue = computed({
    get: () => route.name as string,
    set: (key) => {
      router.push({ name: key! });
    },
  });
</script>
