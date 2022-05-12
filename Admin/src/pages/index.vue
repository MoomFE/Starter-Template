<template>
  <Logo />

  <p class="mt-2">
    {{ t('intro.title') }}
  </p>

  <div class="mt-6">
    <div class="w-62.5 max-w-full mx-auto">
      <NInput v-model:value="name" :placeholder="t('intro.whats-your-name')" @keydown.enter="go" />
    </div>
  </div>

  <div class="mt-3">
    <NButton type="primary" :disabled="!name" @click="go">
      {{ t('button.go') }}
    </NButton>
  </div>
</template>

<script lang="ts" setup>
  const router = useRouter();
  const { t } = useI18n();

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
