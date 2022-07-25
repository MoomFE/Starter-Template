import { resolve } from 'path';
import fs from 'fs-extra';
import prompts from 'prompts';
import chalk from 'chalk';
import { type InlineConfig, build, mergeConfig } from 'vite';
import { camelCase } from 'lodash-es';
import { createViteBaseConfig } from '../vite.config';

// Get components info start
import * as fpsInfoInfo from '@/web-components/fps-info/info';
import * as memoryInfoInfo from '@/web-components/memory-info/info';

const componentsInfo: Record<string, { name: string; info: { name: string; tag: string }; indexPath: string; viteConfigPath?: string }> = {
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
};
// Get components info end

const rootPath = resolve(__dirname, '../');
const srcPath = resolve(rootPath, 'src');
const outDirPath = resolve(rootPath, 'dist');

// 打包所有单个组件
(async () => {
  const response = await prompts({
    type: 'multiselect',
    name: 'value',
    message: '请选择需要打包的组件',
    choices: Object.values(componentsInfo).map(info => ({ title: `${info.info.name} ( ${info.info.tag} )`, value: info.name })),
    instructions: false,
  });

  if (response.value?.length) {
    // 清空代码输出目录
    await fs.emptyDir(outDirPath);

    // 打包组件
    for (const key of response.value) {
      const { name, info, indexPath, viteConfigPath } = Object.values(componentsInfo).find(info => info.name === key)!;
      const viteBaseConfig = createViteBaseConfig();
      const viteExtraConfig: InlineConfig = {
        configFile: viteConfigPath ? resolve(srcPath, viteConfigPath) : false,
        publicDir: resolve(rootPath, 'public', name),
        define: {
          'process.env.NODE_ENV': JSON.stringify('production'),
        },
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

      console.log(`\n${chalk.green(`- 开始打包 ${chalk.blue(`${info.name} ( ${info.tag} )`)} 组件`)}`);

      await build(
        mergeConfig(viteBaseConfig, viteExtraConfig),
      );
    }
  }
  else {
    console.log(
      chalk.red('× 没有选择任何组件'),
    );
  }
})();
