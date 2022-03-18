/* eslint-disable import/no-extraneous-dependencies */

import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VueI18n from '@intlify/vite-plugin-vue-i18n';
import { createHtmlPlugin } from 'vite-plugin-html';
import Unocss from 'unocss/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import settings from './src/settings';

export default defineConfig(({ mode }) => {
  /** 是否是开发模式 */
  const isDev = mode === 'development';
  /** 环境变量 */
  const env = loadEnv(mode, process.cwd(), ['VITE_', 'APP_']); // eslint-disable-line @typescript-eslint/no-unused-vars

  return {
    envPrefix: 'APP_',
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
        '@': path.resolve(__dirname, './src'),
        '@@': path.resolve(__dirname, './'),
      },
    },
    plugins: [
      // Vue 3 支持
      Vue(),
      // 以文件系统为基础的路由
      Pages({
        dirs: path.resolve(__dirname, './src/pages'),
      }),
      // 页面布局系统
      Layouts(),
      // 使 index.html 可以使用 ejs 语法
      createHtmlPlugin({
        minify: !isDev,
        inject: {
          data: {
            isDev,
            ...settings,
          },
        },
      }),
      // 原子化 CSS 引擎
      Unocss(),
      // 将图标作为图标组件可进行导入
      Icons({
        scale: 1,
        compiler: 'vue3',
      }),
      // 自动导入使用到的组件
      Components({
        dts: path.resolve(__dirname, './types/components.d.ts'),
        dirs: [
          path.resolve(__dirname, './src/components'),
          path.resolve(__dirname, './src/components-private'),
        ],
        resolvers: [
          // 自动导入图标组件
          IconsResolver({ prefix: 'i' }),
          // 自动导入 vue-router 的路由组件 ( 主要是为了将路由组件添加到 components.d.ts 中, 方便使用 )
          {
            type: 'component',
            resolve: importName => (['RouterLink', 'RouterView'].includes(importName) ? { importName, path: 'vue-router' } : null),
          },
          // 自动导入 @moomfe/small-utils 的组件
          {
            type: 'component',
            resolve: name => (name.match(/^S[A-Z]/) ? { importName: name, path: `@moomfe/small-utils/components/${name}/index` } : null),
          },
          // 自动导入 Vant 组件
          VantResolver({
            // 在 main.ts 中引入 CSS, 否则可能会和 Tailwind Reset 样式冲突
            importStyle: false,
          }),
        ],
      }),
      // API 自动加载
      AutoImport({
        dts: path.resolve(__dirname, './types/auto-imports.d.ts'),
        imports: [
          'vue',
          'vue-router',
          'vue-i18n',
          '@vueuse/core',
        ],
        eslintrc: {
          enabled: true,
        },
      }),
      // i18n 国际化
      VueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        include: [
          path.resolve(__dirname, 'locales/**'),
        ],
      }),
    ],
    // 依赖预构建优化选项
    optimizeDeps: {
      entries: [
        'src/**/*.{js,ts,vue}',
      ],
      include: [
        'vue',
        'vue-router',
        '@vueuse/core',
        'vant/es',
      ],
    },
  };
});
