<template>
  <div class="flex">
    <div class="w-full min-h-screen items-center justify-center" un:flex="~ grow">
      <div class="w-96 max-w-full" un:p="x-3 y-6">
        <!-- Logo -->
        <LogoTitle class="gap-5 text-3xl" />
        <!-- Form -->
        <NForm
          ref="formRef" class="mt-10" label-placement="left" size="large"
          :disabled="isLoading"
          :model="form" :rules="formValidateRules"
        >
          <!-- 用户名 -->
          <NFormItem path="username" first>
            <n-input v-model:value="form.username" placeholder="请输入用户名" @keyup.enter="login">
              <template #prefix>
                <div class="w-[1.2em] h-full flex justify-center items-center" un:i-ant-design-user-outlined />
              </template>
            </n-input>
          </NFormItem>
          <!-- 密码 -->
          <NFormItem path="password" first>
            <n-input v-model:value="form.password" type="password" placeholder="请输入密码" show-password-on="mousedown" @keyup.enter="login">
              <template #prefix>
                <div class="w-[1.2em] h-full flex justify-center items-center" un:i-ant-design-user-outlined />
              </template>
            </n-input>
          </NFormItem>
          <!-- 登录按钮 -->
          <NFormItem>
            <NButton type="primary" block :loading="isLoading" @click="login">登录</NButton>
          </NFormItem>
        </NForm>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useMessage } from 'naive-ui';
  import { onceRun } from '@moomfe/small-utils';
  import { defineFormValidateRules } from '@/utils/defineFormValidateRules';

  const router = useRouter();
  const auth = useAuthStore();
  const message = useMessage();

  const formRef = ref();

  /** 表单数据 */
  const form = reactive({
    username: 'admin',
    password: '123456',
  });
  /** 表单数据验证规则 */
  const formValidateRules = defineFormValidateRules({
    username: { required: true, message: '请输入用户名' },
    password: { required: true, message: '请输入密码' },
  });

  /** 是否正在登录中 */
  const isLoading = ref(false);

  /** 登录 */
  const login = onceRun(async () => {
    await formRef.value.validate();

    const loadingMessage = message.loading('登录中...');

    isLoading.value = true;

    auth.login(form)
      .then(() => {
        message.success('登录成功, 即将进入系统');
        router.replace('/');
      })
      .finally(() => {
        isLoading.value = false;
        loadingMessage.destroy();
      });
  });
</script>

<route lang="yaml">
name: Login
meta:
  title: 登录
</route>
