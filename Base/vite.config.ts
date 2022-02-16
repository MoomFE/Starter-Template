/* eslint-disable import/no-extraneous-dependencies */


import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VueI18n from '@intlify/vite-plugin-vue-i18n';
import { createHtmlPlugin } from 'vite-plugin-html';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import settings from './src/settings';


export default defineConfig(({ mode }) => {
  /** 是否是开发模式 */
  const isDev = mode === 'development';

  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@@': path.resolve(__dirname, './')
      }
    },
    plugins: [
      // Vue 3 支持
      Vue(),
      // 使 index.html 可以使用 ejs 语法
      createHtmlPlugin({
        minify: !isDev,
        inject: {
          data: {
            isDev,
            ...settings
          }
        }
      }),
      // 将图标作为图标组件可进行导入
      Icons({
        scale: 1,
        compiler: 'vue3'
      }),
      // 自动导入使用到的组件
      Components({
        dts: path.resolve(__dirname, './src/components.d.ts'),
        resolvers: [
          // 自动导入图标组件
          IconsResolver({ prefix: false })
        ]
      }),
      // API 自动加载
      AutoImport({
        dts: path.resolve(__dirname, './src/auto-imports.d.ts'),
        imports: [
          'vue',
          'vue-router',
          'vue-i18n',
          '@vueuse/core'
        ],
        eslintrc: {
          enabled: true
        }
      }),
      // i18n 国际化
      VueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        include: [
          path.resolve(__dirname, 'locales/**')
        ]
      })
    ],
    // 依赖预构建优化选项
    optimizeDeps: {
      entries: [
        'src/**/*.{js,ts,vue}'
      ],
      include: [
        'vue',
        'vue-router',
        '@vueuse/core',
      ],
      exclude: [
        'vue-demi'
      ]
    }
  };
});
