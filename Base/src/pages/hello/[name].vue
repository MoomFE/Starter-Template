<template>
  <div class="text-5xl">
    <iconoir-people-rounded class="inline-block" />
  </div>

  <p class="mt-1">
    {{ t('intro.hi', { name }) }}
  </p>

  <p class="text-sm opacity-50">
    <em>
      {{ t('intro.dynamic-route') }}
    </em>
  </p>

  <div class="mt-6">
    <Button @click="router.back()">
      {{ t('button.back') }}
    </Button>
  </div>
</template>

<script lang="ts" setup>
  const router = useRouter();
  const { t } = useI18n();

  interface Props{
    name: string
  }

  const props = defineProps<Props>();

  const name = computed(() => {
    return decodeURIComponent(props.name);
  });
</script>

<route lang="yaml">
name: Hello
meta:
  layout: home
  title: Hello
</route>
