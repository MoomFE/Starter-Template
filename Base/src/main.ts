import { createApp } from 'vue';
import App from './App.vue';
import router from '@/plugins/router';
import pinia from '@/plugins/pinia';
import '@/styles/styles.scss';


const app = createApp(App);


app.use(router);
app.use(pinia);


router.isReady().then(() => {
  app.mount('#app');
});
