<template>
  <div class="footer flex justify-center text-2xl text-center mt-6">
    <!-- 回到首页 -->
    <button :title="t('button.home')" @click="router.push({ name: 'Index' })">
      <i-vaadin-home-o />
    </button>

    <!-- 切换多语言 -->
    <button :title="t('button.change-languages')" @click="toggleLocales">
      <i-mdi-translate />
    </button>
  </div>
</template>

<script lang="ts" setup>
  const router = useRouter();
  const { t, locale, availableLocales: locales } = useI18n();

  function toggleLocales() {
    locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
  }
</script>

<style lang="scss">
  .footer > * {
    @apply opacity-60 hover:text-primary hover:opacity-100 transition-all mx-2;
  }
</style>
