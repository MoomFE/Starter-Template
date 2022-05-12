import type { UserModule } from '@/types';
import { AppLoadingBar, app } from '@/shared/env';

export const install: UserModule = ({ router }) => {
  router.beforeEach(() => {
    app[AppLoadingBar]?.start();
  });

  router.afterEach(() => {
    app[AppLoadingBar]?.finish();
  });
};
