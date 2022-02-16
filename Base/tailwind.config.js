/* eslint-disable object-property-newline */
/* eslint-disable object-curly-newline */


const array24 = Array(24).fill().map((_, index) => index);
const array100 = Array(100).fill().map((_, index) => index);
const array241 = Array(241).fill().map((_, index) => index);
const array481 = Array(481).fill().map((_, index) => index);


module.exports = {
  content: [
    './src/**/*.{js,ts,vue}',
    './index.html'
  ],
  important: true,
  darkMode: 'class',
  theme: {
    // 颜色
    colors: {
      // 基础颜色
      'black': '#000000',
      'white': '#ffffff',
      'current': 'currentColor',
      'transparent': 'transparent',
      // 色彩包 ( Vuetify )
      'red': { 'DEFAULT': '#f44336', 'lighten-5': '#ffebee', 'lighten-4': '#ffcdd2', 'lighten-3': '#ef9a9a', 'lighten-2': '#e57373', 'lighten-1': '#ef5350', 'darken-1': '#e53935', 'darken-2': '#d32f2f', 'darken-3': '#c62828', 'darken-4': '#b71c1c', 'accent-1': '#ff8a80', 'accent-2': '#ff5252', 'accent-3': '#ff1744', 'accent-4': '#d50000' },
      'pink': { 'DEFAULT': '#e91e63', 'lighten-5': '#fce4ec', 'lighten-4': '#f8bbd0', 'lighten-3': '#f48fb1', 'lighten-2': '#f06292', 'lighten-1': '#ec407a', 'darken-1': '#d81b60', 'darken-2': '#c2185b', 'darken-3': '#ad1457', 'darken-4': '#880e4f', 'accent-1': '#ff80ab', 'accent-2': '#ff4081', 'accent-3': '#f50057', 'accent-4': '#c51162' },
      'purple': { 'DEFAULT': '#9c27b0', 'lighten-5': '#f3e5f5', 'lighten-4': '#e1bee7', 'lighten-3': '#ce93d8', 'lighten-2': '#ba68c8', 'lighten-1': '#ab47bc', 'darken-1': '#8e24aa', 'darken-2': '#7b1fa2', 'darken-3': '#6a1b9a', 'darken-4': '#4a148c', 'accent-1': '#ea80fc', 'accent-2': '#e040fb', 'accent-3': '#d500f9', 'accent-4': '#aa00ff' },
      'deep-purple': { 'DEFAULT': '#673ab7', 'lighten-5': '#ede7f6', 'lighten-4': '#d1c4e9', 'lighten-3': '#b39ddb', 'lighten-2': '#9575cd', 'lighten-1': '#7e57c2', 'darken-1': '#5e35b1', 'darken-2': '#512da8', 'darken-3': '#4527a0', 'darken-4': '#311b92', 'accent-1': '#b388ff', 'accent-2': '#7c4dff', 'accent-3': '#651fff', 'accent-4': '#6200ea' },
      'indigo': { 'DEFAULT': '#3f51b5', 'lighten-5': '#e8eaf6', 'lighten-4': '#c5cae9', 'lighten-3': '#9fa8da', 'lighten-2': '#7986cb', 'lighten-1': '#5c6bc0', 'darken-1': '#3949ab', 'darken-2': '#303f9f', 'darken-3': '#283593', 'darken-4': '#1a237e', 'accent-1': '#8c9eff', 'accent-2': '#536dfe', 'accent-3': '#3d5afe', 'accent-4': '#304ffe' },
      'blue': { 'DEFAULT': '#2196f3', 'lighten-5': '#e3f2fd', 'lighten-4': '#bbdefb', 'lighten-3': '#90caf9', 'lighten-2': '#64b5f6', 'lighten-1': '#42a5f5', 'darken-1': '#1e88e5', 'darken-2': '#1976d2', 'darken-3': '#1565c0', 'darken-4': '#0d47a1', 'accent-1': '#82b1ff', 'accent-2': '#448aff', 'accent-3': '#2979ff', 'accent-4': '#2962ff' },
      'light-blue': { 'DEFAULT': '#03a9f4', 'lighten-5': '#e1f5fe', 'lighten-4': '#b3e5fc', 'lighten-3': '#81d4fa', 'lighten-2': '#4fc3f7', 'lighten-1': '#29b6f6', 'darken-1': '#039be5', 'darken-2': '#0288d1', 'darken-3': '#0277bd', 'darken-4': '#01579b', 'accent-1': '#80d8ff', 'accent-2': '#40c4ff', 'accent-3': '#00b0ff', 'accent-4': '#0091ea' },
      'cyan': { 'DEFAULT': '#00bcd4', 'lighten-5': '#e0f7fa', 'lighten-4': '#b2ebf2', 'lighten-3': '#80deea', 'lighten-2': '#4dd0e1', 'lighten-1': '#26c6da', 'darken-1': '#00acc1', 'darken-2': '#0097a7', 'darken-3': '#00838f', 'darken-4': '#006064', 'accent-1': '#84ffff', 'accent-2': '#18ffff', 'accent-3': '#00e5ff', 'accent-4': '#00b8d4' },
      'teal': { 'DEFAULT': '#009688', 'lighten-5': '#e0f2f1', 'lighten-4': '#b2dfdb', 'lighten-3': '#80cbc4', 'lighten-2': '#4db6ac', 'lighten-1': '#26a69a', 'darken-1': '#00897b', 'darken-2': '#00796b', 'darken-3': '#00695c', 'darken-4': '#004d40', 'accent-1': '#a7ffeb', 'accent-2': '#64ffda', 'accent-3': '#1de9b6', 'accent-4': '#00bfa5' },
      'green': { 'DEFAULT': '#4caf50', 'lighten-5': '#e8f5e9', 'lighten-4': '#c8e6c9', 'lighten-3': '#a5d6a7', 'lighten-2': '#81c784', 'lighten-1': '#66bb6a', 'darken-1': '#43a047', 'darken-2': '#388e3c', 'darken-3': '#2e7d32', 'darken-4': '#1b5e20', 'accent-1': '#b9f6ca', 'accent-2': '#69f0ae', 'accent-3': '#00e676', 'accent-4': '#00c853' },
      'light-green': { 'DEFAULT': '#8bc34a', 'lighten-5': '#f1f8e9', 'lighten-4': '#dcedc8', 'lighten-3': '#c5e1a5', 'lighten-2': '#aed581', 'lighten-1': '#9ccc65', 'darken-1': '#7cb342', 'darken-2': '#689f38', 'darken-3': '#558b2f', 'darken-4': '#33691e', 'accent-1': '#ccff90', 'accent-2': '#b2ff59', 'accent-3': '#76ff03', 'accent-4': '#64dd17' },
      'lime': { 'DEFAULT': '#cddc39', 'lighten-5': '#f9fbe7', 'lighten-4': '#f0f4c3', 'lighten-3': '#e6ee9c', 'lighten-2': '#dce775', 'lighten-1': '#d4e157', 'darken-1': '#c0ca33', 'darken-2': '#afb42b', 'darken-3': '#9e9d24', 'darken-4': '#827717', 'accent-1': '#f4ff81', 'accent-2': '#eeff41', 'accent-3': '#c6ff00', 'accent-4': '#aeea00' },
      'yellow': { 'DEFAULT': '#ffeb3b', 'lighten-5': '#fffde7', 'lighten-4': '#fff9c4', 'lighten-3': '#fff59d', 'lighten-2': '#fff176', 'lighten-1': '#ffee58', 'darken-1': '#fdd835', 'darken-2': '#fbc02d', 'darken-3': '#f9a825', 'darken-4': '#f57f17', 'accent-1': '#ffff8d', 'accent-2': '#ffff00', 'accent-3': '#ffea00', 'accent-4': '#ffd600' },
      'amber': { 'DEFAULT': '#ffc107', 'lighten-5': '#fff8e1', 'lighten-4': '#ffecb3', 'lighten-3': '#ffe082', 'lighten-2': '#ffd54f', 'lighten-1': '#ffca28', 'darken-1': '#ffb300', 'darken-2': '#ffa000', 'darken-3': '#ff8f00', 'darken-4': '#ff6f00', 'accent-1': '#ffe57f', 'accent-2': '#ffd740', 'accent-3': '#ffc400', 'accent-4': '#ffab00' },
      'orange': { 'DEFAULT': '#ff9800', 'lighten-5': '#fff3e0', 'lighten-4': '#ffe0b2', 'lighten-3': '#ffcc80', 'lighten-2': '#ffb74d', 'lighten-1': '#ffa726', 'darken-1': '#fb8c00', 'darken-2': '#f57c00', 'darken-3': '#ef6c00', 'darken-4': '#e65100', 'accent-1': '#ffd180', 'accent-2': '#ffab40', 'accent-3': '#ff9100', 'accent-4': '#ff6d00' },
      'deep-orange': { 'DEFAULT': '#ff5722', 'lighten-5': '#fbe9e7', 'lighten-4': '#ffccbc', 'lighten-3': '#ffab91', 'lighten-2': '#ff8a65', 'lighten-1': '#ff7043', 'darken-1': '#f4511e', 'darken-2': '#e64a19', 'darken-3': '#d84315', 'darken-4': '#bf360c', 'accent-1': '#ff9e80', 'accent-2': '#ff6e40', 'accent-3': '#ff3d00', 'accent-4': '#dd2c00' },
      'brown': { 'DEFAULT': '#795548', 'lighten-5': '#efebe9', 'lighten-4': '#d7ccc8', 'lighten-3': '#bcaaa4', 'lighten-2': '#a1887f', 'lighten-1': '#8d6e63', 'darken-1': '#6d4c41', 'darken-2': '#5d4037', 'darken-3': '#4e342e', 'darken-4': '#3e2723' },
      'blue-grey': { 'DEFAULT': '#607d8b', 'lighten-5': '#eceff1', 'lighten-4': '#cfd8dc', 'lighten-3': '#b0bec5', 'lighten-2': '#90a4ae', 'lighten-1': '#78909c', 'darken-1': '#546e7a', 'darken-2': '#455a64', 'darken-3': '#37474f', 'darken-4': '#263238' },
      'grey': { 'DEFAULT': '#9e9e9e', 'lighten-5': '#fafafa', 'lighten-4': '#f5f5f5', 'lighten-3': '#eeeeee', 'lighten-2': '#e0e0e0', 'lighten-1': '#bdbdbd', 'darken-1': '#757575', 'darken-2': '#616161', 'darken-3': '#424242', 'darken-4': '#212121' },
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
    // 字体
    fontFamily: {
      // 默认字体
      default: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      // 等宽字体
      monospace: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
    },
    // 断点
    screens: {
      '2xl': { max: '1535px' },
      'xl': { max: '1279px' },
      'lg': { max: '1023px' },
      'md': { max: '767px' },
      'sm': { max: '575px' }
    },
    extend: {
      // 最大最小宽度高度
      ...Object.assign(
        ...['minWidth', 'maxWidth', 'minHeight', 'maxHeight'].map((key) => {
          return {
            // 0 ~ 240
            [key]: Object.assign(
              ...array241.map((_, index) => ({ [index]: `${index * 0.25}rem` }))
            )
          };
        })
      ),
      // 透明度
      opacity: Object.assign(
        ...array100.map((_, index) => ({
          [index]: `${index / 100}`
        }))
      ),
      // 间距
      spacing: {
        // 0 ~ 240 ( 0.5 Gap )
        ...Object.assign(
          ...array481.map((_, index) => ({ [index * 0.5]: `${index * 0.125}rem` }))
        ),
        // -0.5 ~ -240 ( 0.5 Gap )
        ...Object.assign(
          ...array481.map((_, index) => (index ? { [-index * 0.5]: `-${index * 0.125}rem` } : {}))
        )
      },
      // Grid Template Columns
      gridTemplateColumns: {
        // grid-cols-{ 1 ~ 24 }
        ...Object.assign(
          ...array24.map((_, index) => ({ [index + 1]: `repeat(${index + 1}, minmax(0, 1fr))` }))
        ),
        // grid-cols-{ 1 ~ 24 }-auto
        ...Object.assign(
          ...array24.map((_, index) => ({ [`${index + 1}-auto`]: `repeat(${index + 1}, auto)` }))
        )
      },
      // 过渡属性
      transitionProperty: {
        'color': 'color',
        'bg-color': 'background-color',
        'bbg-colors': 'border, background-color',
        'width': 'width',
        'height': 'height'
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
        1200: '1200ms'
      },
      // 边框宽度
      borderWidth: {
        3: '3px',
        5: '5px',
        6: '6px',
        7: '7px'
      }
    }
  },
  variants: {},
  corePlugins: {
    container: false
  },
  plugins: []
};
