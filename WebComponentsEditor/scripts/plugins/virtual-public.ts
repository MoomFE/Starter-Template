import { resolve } from 'path';
import { type PluginOption, normalizePath } from 'vite';

interface VirtualPublicOption {
  /** 当前模式 */
  mode: string
}

/**
 * 对 Web Components 组件使用的 public 资源进行虚拟路径替换
 */
export default function VirtualPublic(options: VirtualPublicOption): PluginOption {
  const virtualModuleId = 'virtual:public';
  const isDev = options.mode === 'development';
  const dir = normalizePath(
    resolve(process.cwd(), './src/web-components'),
  );

  return {
    name: 'virtual-public',
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
