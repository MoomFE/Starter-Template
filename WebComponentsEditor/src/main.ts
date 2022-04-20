import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import routes from '@/modules/router/routes';

import '@unocss/reset/tailwind.css';
import 'uno.css';
import '@/styles/styles.scss';

// 修复 Naive UI 和 Tailwind Reset 的样式冲突
document.head.insertAdjacentHTML('beforeend', '<meta name="naive-ui-style" />');

export const createApp = ViteSSG(
  App,
  { routes },
  (ctx) => {
    Object.values(import.meta.globEager('./modules/**/index.ts')).forEach(m => m.install?.(ctx));
  },
);
