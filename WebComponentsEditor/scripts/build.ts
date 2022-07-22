import { resolve } from 'path';
import fs from 'fs-extra';
import { type InlineConfig, build, mergeConfig } from 'vite';
import { camelCase } from 'lodash-es';
import { createViteBaseConfig } from '../vite.config';

// Get components info start
import * as fpsInfoInfo from '@/web-components/fps-info/info';
import * as memoryInfoInfo from '@/web-components/memory-info/info';

const componentsInfo = {
  fpsInfo: {
    name: 'fps-info',
    info: fpsInfoInfo,
    indexPath: 'web-components/fps-info/index.ts',
    viteConfigPath: undefined,
  },
  memoryInfo: {
    name: 'memory-info',
    info: memoryInfoInfo,
    indexPath: 'web-components/memory-info/index.ts',
    viteConfigPath: undefined,
  },
} as Record<string, { name: string; info: { name: string; tag: string }; indexPath: string; viteConfigPath?: string }>;
// Get components info end

const rootPath = resolve(__dirname, '../');
const srcPath = resolve(rootPath, 'src');
const outDirPath = resolve(rootPath, 'dist');

// 清空代码输出目录
fs.emptyDirSync(outDirPath);

// 打包所有单个组件
(async () => {
  for (const key in componentsInfo) {
    const { name, indexPath, viteConfigPath } = componentsInfo[key];
    const viteBaseConfig = createViteBaseConfig();
    const viteExtraConfig: InlineConfig = {
      configFile: viteConfigPath ? resolve(srcPath, viteConfigPath) : false,
      publicDir: resolve(rootPath, 'public', name),
      build: {
        minify: true,
        outDir: resolve(outDirPath, name),
        emptyOutDir: false,
        lib: {
          entry: resolve(srcPath, indexPath),
          formats: ['iife'],
          name: camelCase(name),
          fileName: () => 'index.js',
        },
      },
    };

    await build(
      mergeConfig(viteBaseConfig, viteExtraConfig),
    );
  }
})();
