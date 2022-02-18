/**
 * 项目配置
 */

export default defineSettings({
  title: 'Base'
});


export interface Settings{
  /** 项目名称 */
  title: string;
}

function defineSettings(settings: Settings) {
  return settings;
}
