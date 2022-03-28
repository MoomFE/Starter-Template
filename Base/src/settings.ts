import type { Settings } from '@/types';

/**
 * 项目配置
 */
export const settings = defineSettings({
  title: 'Base',
  colors: {
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
});

function defineSettings(settings: Settings) {
  return settings;
}
