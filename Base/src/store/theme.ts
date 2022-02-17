import { defineStore } from 'pinia';

/** 本地存储的深色模式状态  */
const darkStorage = useLocalStorage('dark', false);

// 初始化深色模式状态
if (darkStorage.value) {
  document.documentElement.classList.add('dark');
}


export const useThemeStore = defineStore('theme', {
  state: () => ({
    /** 深色模式状态 */
    dark: darkStorage.value,
  }),
  actions: {
    /** 更新深色模式状态 */
    setDark(dark: boolean) {
      this.dark = dark;
      darkStorage.value = dark;
      document.documentElement.classList.toggle('dark', dark);
    },
    /** 切换深色模式状态 */
    toggleDark() {
      this.setDark(!this.dark);
    }
  }
});
