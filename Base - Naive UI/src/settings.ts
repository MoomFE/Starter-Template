import type { Settings } from '@/types';

/**
 * 项目配置
 */
export const settings = defineSettings({
  /** 项目名称 */
  title: 'Base - Naive UI',
});

function defineSettings(settings: Settings) {
  return settings;
}
