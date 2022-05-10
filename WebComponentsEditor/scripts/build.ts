import { resolve } from 'path';
import fg from 'fast-glob';
import fs from 'fs-extra';
import { type InlineConfig, build } from 'vite';
import { deepMerge } from '@moomfe/small-utils';
import { camelCase } from 'lodash';
import { createViteBaseConfig } from '../vite.config';
import { formatComponentsGlob } from '../src/utils/formatComponentsGlob';

const rootPath = resolve(__dirname, '../');
const srcPath = resolve(rootPath, 'src');
const outDirPath = resolve(rootPath, 'dist');

// 清空代码输出目录
fs.emptyDirSync(outDirPath);

/** 所有组件注册文件引用 */
const componentsIndex = formatComponentsGlob(fg.sync(['web-components/*/index.ts'], { cwd: srcPath }));
/** 所有组件信息文件 */
const componentsInfo = formatComponentsGlob(fg.sync(['web-components/*/info.ts'], { cwd: srcPath }));

/** 所有组件相关信息 */
const components: Record<string, string> = {};

// 保存所有的组件相关信息
Object.entries(componentsInfo).forEach(([name]) => {
  // index.ts 和 info.ts 必须同时存在, 才承认这是个组件
  if (!componentsIndex[name]) return;

  components[name] = componentsIndex[name];
});

// 打包所有单个组件
Object.entries(components).forEach(([_name, path]) => {
  const name = camelCase(_name);
  const viteBaseConfig = createViteBaseConfig();
  const viteExtraConfig: InlineConfig = {
    configFile: false,
    publicDir: false,
    build: {
      minify: true,
      outDir: outDirPath,
      emptyOutDir: false,
      lib: {
        entry: resolve(srcPath, path),
        formats: ['iife'],
        name,
        fileName: () => `${name}.js`,
      },
    },
  };

  build(
    deepMerge(viteBaseConfig, viteExtraConfig),
  );
});
