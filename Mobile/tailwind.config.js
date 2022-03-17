/* eslint-disable object-property-newline */
/* eslint-disable object-curly-newline */

const array24 = Array(24).fill().map((_, index) => index);
const array100 = Array(100).fill().map((_, index) => index);
const array241 = Array(241).fill().map((_, index) => index);
const array481 = Array(481).fill().map((_, index) => index);

module.exports = {
  content: [
    './src/**/*.{js,ts,vue}',
    './index.html',
  ],
  important: true,
  darkMode: 'class',
  theme: {
    // 字体
    fontFamily: {
      // 默认字体
      default: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      // 等宽字体
      monospace: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
    },
    // 断点
    screens: {
      '2xl': { max: '1535px' },
      'xl': { max: '1279px' },
      'lg': { max: '1023px' },
      'md': { max: '767px' },
      'sm': { max: '575px' },
    },
    extend: {
      // 颜色
      colors: {
        // 动态颜色
        'dynamic-text': 'var(--dynamic-text)',
        'dynamic-bg': 'var(--dynamic-bg)',
        // Primary
        'primary': '#2080f0',
        'primary-hover': '#4098fc',
        'primary-active': '#1060c9',
        // Info
        'info': '#909399',
        'info-hover': '#a6a9ad',
        'info-active': '#82848a',
        // Success
        'success': '#18a058',
        'success-hover': '#36ad6a',
        'success-active': '#0c7a43',
        // Warning
        'warning': '#f0a020',
        'warning-hover': '#fcb040',
        'warning-active': '#c97c10',
        // Error
        'error': '#d03050',
        'error-hover': '#de576d',
        'error-active': '#ab1f3f',
      },
      // 最大最小宽度高度
      ...Object.assign(
        ...['minWidth', 'maxWidth', 'minHeight', 'maxHeight'].map((key) => {
          return {
            // 0 ~ 240
            [key]: Object.assign(
              ...array241.map((_, index) => ({ [index]: `${index * 0.25}rem` })),
            ),
          };
        }),
      ),
      // 透明度
      opacity: Object.assign(
        ...array100.map((_, index) => ({
          [index]: `${index / 100}`,
        })),
      ),
      // 间距
      spacing: {
        // 0 ~ 240 ( 0.5 Gap )
        ...Object.assign(
          ...array481.map((_, index) => ({ [index * 0.5]: `${index * 0.125}rem` })),
        ),
        // -0.5 ~ -240 ( 0.5 Gap )
        ...Object.assign(
          ...array481.map((_, index) => (index ? { [-index * 0.5]: `-${index * 0.125}rem` } : {})),
        ),
      },
      // Grid Template Columns
      gridTemplateColumns: {
        // grid-cols-{ 1 ~ 24 }
        ...Object.assign(
          ...array24.map((_, index) => ({ [index + 1]: `repeat(${index + 1}, minmax(0, 1fr))` })),
        ),
        // grid-cols-{ 1 ~ 24 }-auto
        ...Object.assign(
          ...array24.map((_, index) => ({ [`${index + 1}-auto`]: `repeat(${index + 1}, auto)` })),
        ),
      },
      // 过渡属性
      transitionProperty: {
        'color': 'color',
        'bg-color': 'background-color',
        'bbg-colors': 'border, background-color',
        'width': 'width',
        'height': 'height',
      },
      // 过渡持续时间
      transitionDuration: {
        colors: '300ms',
        400: '400ms',
        600: '600ms',
        800: '800ms',
        900: '900ms',
        1000: '1000ms',
        1100: '1100ms',
        1200: '1200ms',
      },
      // 边框宽度
      borderWidth: {
        3: '3px',
        5: '5px',
        6: '6px',
        7: '7px',
      },
    },
  },
  variants: {},
  corePlugins: {
    container: false,
  },
  plugins: [],
};
