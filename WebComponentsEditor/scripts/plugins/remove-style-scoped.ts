import { createFilter } from '@rollup/pluginutils';
import { type PluginOption } from 'vite';

export const isCustomElementRE = /\/web-components\/.*\/.*\.vue$/;

/**
 * 移除 Web Components 组件的样式作用域标识
 */
export default function RemoveStyleScoped(): PluginOption {
  const filter = createFilter([isCustomElementRE]);

  return {
    name: 'remove-style-scoped',
    enforce: 'pre',
    transform(code, id) {
      if (!filter(id)) return;

      return code.replace(/\n<style scoped>/g, '<style>');
    },
  };
}
