import NProgress from 'nprogress';
import router from '@/modules/router';
import 'nprogress/nprogress.css';


NProgress.configure({
  showSpinner: false
});


router.beforeEach(() => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});
