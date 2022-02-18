/**
 * 项目配置
 */

export default defineSettings({
  title: 'Mobile'
});


export interface Settings{
  /** 项目名称 */
  title: string;
}

function defineSettings(settings: Settings) {
  return settings;
}
