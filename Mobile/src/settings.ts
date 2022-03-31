import type { Settings } from '@/types';

/**
 * 项目配置
 */
export const settings = defineSettings({
  /** 项目名称 */
  title: 'Mobile',
});

function defineSettings(settings: Settings) {
  return settings;
}
