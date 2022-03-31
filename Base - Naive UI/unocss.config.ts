import { resolve } from 'path';
import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss';
import { outputFileSync } from 'fs-extra';
import { dataToEsm } from '@rollup/pluginutils';
import { settings } from './src/settings';

export default defineConfig({
  shortcuts: [
    // 动态颜色
    ['text-dynamic', 'text-[#333639] dark:text-[#E8E8E8]'],
    ['bg-dynamic', 'bg-[#FFF] dark:bg-[#101014]'],
  ],
  theme: {
    // 字体
    fontFamily: {
      ...settings.fontFamily,
    },
    // 颜色
    colors: {
      ...settings.colors,
    },
    // 断点
    breakpoints: {
      'sm': '576px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    // 过渡持续时间
    duration: {
      colors: '300ms',
    },
  },
  presets: [
    // 默认预设, 和 Tailwind 类似
    presetUno(),
    // 属性模式
    presetAttributify(),
    // 图标预设
    presetIcons(),
  ],
  transformers: [
    // 在 CSS 中使用 @apply 指令
    transformerDirectives(),
    // 变体组功能
    transformerVariantGroup(),
  ],
  extendTheme: (theme) => {
    // 始终生成一个 UnoCSS 主题样式配置文件, 方便在 JS 中引用
    outputFileSync(
      resolve(__dirname, './src/shared/unocss.theme.ts'),
      `/* eslint-disable */\n\n${dataToEsm(theme, {
        preferConst: true,
        indent: '  ',
        objectShorthand: true,
      })}`,
    );
  },
});
