import { resolve } from 'path';
import { type PluginOption, normalizePath } from 'vite';

/**
 * 对 Web Components 组件使用的 public 资源进行虚拟路径替换
 */
export default function VirtualPublic(): PluginOption {
  const virtualModuleId = 'virtual:public';
  const dir = normalizePath(resolve(process.cwd(), './src/web-components'));
  let isDev = true;

  return {
    name: 'virtual-public',
    config(_, { mode }) {
      isDev = mode === 'development';
    },
    resolveId(id, source) {
      if (source?.startsWith(dir) && id.startsWith(virtualModuleId)) {
        if (isDev) {
          const name = source.replace(dir, '').split('/')[1];
          const path = `/${name}`;

          return id.replace(virtualModuleId, path);
        }

        return id.replace(virtualModuleId, '/');
      }
    },
  };
}
