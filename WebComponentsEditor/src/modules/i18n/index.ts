import { createI18n } from 'vue-i18n';
import type { UserModule } from '@/types';

const messages = Object.fromEntries(
  Object.entries(import.meta.globEager('../../../locales/*.y(a)?ml')).map(([key, value]) => {
    const locale = key.replace(/^.*\/([^.]+)\.y(a)?ml$/, '$1');

    return [
      locale,
      value.default,
    ];
  }),
);

export const install: UserModule = ({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: import.meta.env.APP_DEFAULT_LOCALE,
    messages,
  });

  app.use(i18n);
};
