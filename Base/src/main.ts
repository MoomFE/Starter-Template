import { createApp } from 'vue';
import App from './App.vue';
import router from '@/modules/router';
import pinia from '@/modules/pinia';
import '@/styles/styles.scss';


const app = createApp(App);


app.use(router);
app.use(pinia);


router.isReady().then(() => {
  app.mount('#app');
});
