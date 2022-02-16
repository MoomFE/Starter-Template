/* eslint-disable import/no-extraneous-dependencies */


import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import { createHtmlPlugin } from 'vite-plugin-html';
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
      })
    ]
  };
});
