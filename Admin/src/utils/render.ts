import { NIcon } from 'naive-ui';

/**
 * 渲染一个 SVG 图标
 */
export function renderIcon<T>(icon: T) {
  if (!icon) return () => null;

  return () => h(NIcon, null, {
    default: () => h(icon),
  });
}
