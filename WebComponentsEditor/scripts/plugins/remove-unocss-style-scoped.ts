import { createFilter } from '@rollup/pluginutils';
import { type PluginOption } from 'vite';

export const isCustomElementRE = /\/web-components\/.*\/.*\.vue$/;

/**
 * 移除 Unocss 为 Web Components 添加的样式作用域标识
 */
export default function RemoveUnocssStyleScoped(): PluginOption {
  const filter = createFilter([isCustomElementRE]);

  return {
    name: 'remove-unocss-style-scoped',
    enforce: 'pre',
    transform(code, id) {
      if (!filter(id)) return;

      return code.replace(/\n<style scoped>/g, '<style>');
    },
  };
}
