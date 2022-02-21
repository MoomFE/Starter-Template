import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import settings from '@/settings';


const routes = setupLayouts(generatedRoutes);


const router = createRouter({
  history: createWebHistory(),
  routes
});


router.beforeResolve((to, from, next) => {
  const title = to.meta.title;

  // 如果需要更加灵活的设置 title，可以使用 @vueuse/core 的 useTitle 来实现
  // https://vueuse.org/core/useTitle/
  if (title) {
    document.title = `${title} - ${settings.title}`;
  } else {
    document.title = settings.title;
  }

  next();
});


export default router;
