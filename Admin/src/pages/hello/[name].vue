<template>
  <div class="text-5xl">
    <i-iconoir-people-rounded class="inline-block" />
  </div>

  <p class="mt-1">
    你好，{{ name }}
  </p>

  <p class="text-sm opacity-50">
    <em>
      动态路由演示
    </em>
  </p>

  <div class="mt-6">
    <NButton type="primary" @click="router.back()">
      返回
    </NButton>
  </div>
</template>

<script lang="ts" setup>
  const router = useRouter();

  interface Props{
    name: string
  }

  const props = defineProps<Props>();

  const name = computed(() => {
    return decodeURIComponent(props.name);
  });

  useTitle(
    computed(() => `你好，${name.value}`),
  );
</script>

<route lang="yaml">
name: Hello
meta:
  layout: home
</route>
