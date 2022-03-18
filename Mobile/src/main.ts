import { createApp } from 'vue';
import App from './App.vue';
import router from '@/modules/router';
import pinia from '@/modules/pinia';
import i18n from '@/modules/i18n';
import '@/modules/nprogress';

import '@unocss/reset/tailwind.css';
import 'uno.css';
import '@/styles/styles.scss';
import 'vant/lib/index.css';

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(i18n);

router.isReady().then(() => {
  app.mount('#app');
});
