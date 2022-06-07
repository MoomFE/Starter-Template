import type { RouteRecordRaw } from 'vue-router';
import type { MenuMixedOption } from 'naive-ui/es/menu/src/interface';
import * as icons from './icons';
import { renderIcon } from '@/utils/render';
import IconList from '~icons/ant-design/appstore-outlined';

/**
 * 判断是否是根路由
 */
export function isRootRoute(route: RouteRecordRaw) {
  return route.children?.length === 1;
}

/**
 * 排除无需生成菜单的路由
 */
export function filterRouter(routes: RouteRecordRaw[]) {
  return routes.filter((route) => {
    return !['/', '/:all(.*)*', '/login'].includes(route.path);
  });
}

/**
 * 生成菜单
 * @param routes 生成菜单的路由
 * @param isChildren 是否是子集
 * @returns
 */
export function generatorMenu(routes: RouteRecordRaw[], isChildren = false): MenuMixedOption[] {
  return filterRouter(routes).sort(sort).map((route) => {
    const isRoot = isRootRoute(route);
    const info = isRoot ? route.children![0] : route;
    const menuItem: MenuMixedOption = {
      key: info.name as string,
      label: info.meta?.title || info.name,
      icon: renderIcon(icons[info.meta?.icon as keyof typeof icons] || (isChildren ? null : IconList)),
    };

    if (info.children?.length)
      menuItem.children = generatorMenu(info.children, true);

    return menuItem;
  });
}

/**
 * 排序菜单
 */
function sort(a: RouteRecordRaw, b: RouteRecordRaw) {
  const aInfo = isRootRoute(a) ? a.children![0] : a;
  const bInfo = isRootRoute(b) ? b.children![0] : b;

  return (aInfo.meta?.sort as number ?? Infinity) - (bInfo.meta?.sort as number ?? Infinity);
}
