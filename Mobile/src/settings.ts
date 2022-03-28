import type { Settings } from '@/types';

/**
 * 项目配置
 */
export const settings = defineSettings({
  /** 项目名称 */
  title: 'Mobile',
  /** 项目主题色 */
  colors: {
    // Primary 颜色
    'primary': '#2080f0',
    'primary-hover': '#4098fc',
    'primary-active': '#1060c9',
    // Info 颜色
    'info': '#909399',
    'info-hover': '#a6a9ad',
    'info-active': '#82848a',
    // Success 颜色
    'success': '#18a058',
    'success-hover': '#36ad6a',
    'success-active': '#0c7a43',
    // Warning 颜色
    'warning': '#f0a020',
    'warning-hover': '#fcb040',
    'warning-active': '#c97c10',
    // Error 颜色
    'error': '#d03050',
    'error-hover': '#de576d',
    'error-active': '#ab1f3f',
  },
});

function defineSettings(settings: Settings) {
  return settings;
}
