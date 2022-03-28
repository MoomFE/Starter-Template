import type { GlobalThemeOverrides } from 'naive-ui';
import { darkTheme, dateZhCN, zhCN } from 'naive-ui';
import { useThemeStore } from '@/store/theme';
import { settings } from '@/settings';

export const useNaiveTheme = createSharedComposable(() => {
  const themeStore = useThemeStore();

  /** 当前 Naive UI 主题 */
  const theme = computed(() => themeStore.dark ? darkTheme : null);
  /** 对当前 NaiveUI 主题的变量覆盖 */
  const themeOverrides = computed((): GlobalThemeOverrides => {
    const colors = settings.colors;
    const overrides: GlobalThemeOverrides = {
      common: {
        // Primary 颜色
        primaryColor: colors.primary,
        primaryColorHover: colors['primary-hover'],
        primaryColorPressed: colors['primary-active'],
        primaryColorSuppl: colors.primary,
        // Info 颜色
        infoColor: colors.info,
        infoColorHover: colors['info-hover'],
        infoColorPressed: colors['info-active'],
        infoColorSuppl: colors.info,
        // Success 颜色
        successColor: colors.success,
        successColorHover: colors['success-hover'],
        successColorPressed: colors['success-active'],
        successColorSuppl: colors.success,
        // Warning 颜色
        warningColor: colors.warning,
        warningColorHover: colors['warning-hover'],
        warningColorPressed: colors['warning-active'],
        warningColorSuppl: colors.warning,
        // Error 颜色
        errorColor: colors.error,
        errorColorHover: colors['error-hover'],
        errorColorPressed: colors['error-active'],
        errorColorSuppl: colors.error,
      },
    };

    return overrides;
  });

  return {
    theme,
    themeOverrides,
    zhCN,
    dateZhCN,
  };
});
