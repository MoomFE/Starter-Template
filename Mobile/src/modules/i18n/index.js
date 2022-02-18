import { createI18n } from 'vue-i18n';


const messages = Object.fromEntries(
  Object.entries(import.meta.globEager('../../../locales/*.y(a)?ml')).map(([key, value]) => {
    const locale = key.replace(/^.*\/([^.]+)\.y(a)?ml$/, '$1');

    return [
      locale,
      value.default
    ];
  })
);

const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  messages
});


export default i18n;
