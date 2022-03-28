import type { GlobalThemeOverrides } from 'naive-ui';
import { darkTheme, dateZhCN, zhCN } from 'naive-ui';
import { useThemeStore } from '@/store/theme';

export const useNaiveTheme = createSharedComposable(() => {
  const themeStore = useThemeStore();

  /** 当前 Naive UI 主题 */
  const theme = computed(() => themeStore.dark ? darkTheme : null);
  /** 对当前 NaiveUI 主题的变量覆盖 */
  const themeOverrides = computed((): GlobalThemeOverrides => {
    const overrides = {};

    return overrides;
  });

  return {
    theme,
    themeOverrides,
    zhCN,
    dateZhCN,
  };
});
