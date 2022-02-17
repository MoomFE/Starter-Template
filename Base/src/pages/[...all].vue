<template>
  <div class="px-4 py-10 text-center">
    <div class="text-5xl">
      <bx-message-alt-x class="inline-block" />
    </div>

    <div class="mt-1">
      {{ t('not-found') }}
    </div>

    <div class="mt-6">
      <button
        class="
          px-4 py-1 rounded
          text-white
          bg-primary hover:bg-primary-hover active:bg-primary-active
        "
        @click="router.back()"
      >
        {{ t('button.back') }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const router = useRouter();
  const { t } = useI18n();
</script>
