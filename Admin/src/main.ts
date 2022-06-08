import App from './App.vue';
import router from '@/modules/router/install';

import '@unocss/reset/tailwind.css';
import 'uno.css';
import '@/styles/styles.scss';

// 修复 Naive UI 和 Tailwind Reset 的样式冲突
document.head.insertAdjacentHTML('beforeend', '<meta name="naive-ui-style" />');

const app = createApp(App);

app.use(router);

Object.values(import.meta.globEager('./modules/**/index.ts')).forEach(m => m.install?.({ app, router }));

router.isReady().then(() => {
  app.mount('#app');
});
