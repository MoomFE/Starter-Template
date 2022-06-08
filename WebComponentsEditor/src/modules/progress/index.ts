import type { UserModule } from '@/types';
import { app } from '@/shared/env';

export const install: UserModule = ({ router }) => {
  router.beforeEach(() => {
    app.loadingBar?.start();
  });

  router.afterEach(() => {
    app.loadingBar?.finish();
  });
};
