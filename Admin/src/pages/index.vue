<template>
  <Logo />

  <p class="mt-2">
    基础项目模板 - Naive UI
  </p>

  <div class="mt-6">
    <div class="w-62.5 max-w-full mx-auto">
      <NInput v-model:value="name" placeholder="你的名字是？" @keydown.enter="go" />
    </div>
  </div>

  <div class="mt-3">
    <NButton type="primary" :disabled="!name" @click="go">
      确定
    </NButton>
  </div>
</template>

<script lang="ts" setup>
  const router = useRouter();

  const name = ref('');

  function go() {
    router.push({
      name: 'Hello',
      params: {
        name: encodeURIComponent(name.value),
      },
    });
  }
</script>

<route lang="yaml">
name: Index
meta:
  layout: home
</route>
