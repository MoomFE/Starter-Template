<template>
  <Logo class="mx-auto" />

  <p class="mt-2">
    {{ t('intro.title') }}
  </p>

  <div class="mt-6">
    <div class="w-62.5 max-w-full border border-gray-400 rounded-md overflow-hidden mx-auto">
      <van-field v-model="name" :placeholder="t('intro.whats-your-name')" :border="false" input-align="center" autocomplete="off" @keydown.enter="go" />
    </div>
  </div>

  <div class="mt-3">
    <van-button type="primary" size="small" :disabled="!name" @click="go">
      {{ t('button.go') }}
    </van-button>
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
