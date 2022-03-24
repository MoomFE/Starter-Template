import type { RouteComponent, RouteRecordRaw } from 'vue-router';
import { isESModule, isFunction, isPlainObject, leastRun } from '@moomfe/small-utils';
import { camelCase, upperFirst } from 'lodash-es';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';

/** 定义页面组件名称为路由名称 */
function defineComponentName(route: RouteRecordRaw, component: RouteComponent) {
  if (component.name) return component;
  return Object.assign({}, component, {
    name: upperFirst(camelCase(route.name as string)),
  });
}

// 如果页面组件没有配置 name, 则使用路由的 name 作为组件的 name
generatedRoutes.forEach((route) => {
  const component = route.component;

  // 对象形式的页面组件
  if (isPlainObject(component)) {
    route.component = defineComponentName(route, component);
  }
  // 页面组件是一个方法
  else if (isFunction(component)) {
    route.component = () => leastRun(0, component).then((m) => {
      return defineComponentName(route, isESModule(m) ? m.default : m);
    });
  }
});

export default setupLayouts(generatedRoutes);
