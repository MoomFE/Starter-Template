import { resolve } from 'path';
import { outputFile, readFile } from 'fs-extra';
import { camelCase, escapeRegExp } from 'lodash-es';
import fg from 'fast-glob';
import MagicString from 'magic-string';
import { formatComponentsGlob } from '@/utils/formatComponentsGlob';

const rootPath = resolve(__dirname, '../');
const srcPath = resolve(rootPath, 'src');
const buildFilePath = resolve(__dirname, 'build.ts');

/** 组件注册文件引用 */
const componentsIndex = formatComponentsGlob(fg.sync(['web-components/*/index.ts'], { cwd: srcPath }));
/** 组件信息文件 */
const componentsInfo = formatComponentsGlob(fg.sync(['web-components/*/info.ts'], { cwd: srcPath }));
/** 组件的额外的 Vite 配置 */
const componentsViteConfig = formatComponentsGlob(fg.sync(['web-components/*/vite.config.ts'], { cwd: srcPath }));

/** 组件相关信息 */
const components: Record<string, { index: string; viteConfig: string }> = {};

// 保存所有的组件相关信息,
Object.keys(componentsInfo).forEach((name) => {
  // index.ts 和 info.ts 必须同时存在, 才承认这是个组件
  if (!componentsIndex[name]) return;

  components[name] = {
    index: componentsIndex[name],
    viteConfig: componentsViteConfig[name],
  };
});

// 读取打包代码
readFile(buildFilePath, 'utf8').then((code) => {
  const s = new MagicString(code);
  const startFlag = '// Get components info start';
  const endFlag = '// Get components info end';
  const startIndex = code.indexOf(startFlag) + code.match(new RegExp(escapeRegExp(startFlag)))![0].length;
  const endIndex = code.indexOf(endFlag);
  let componentsCode = '';

  // 导入所有的组件信息
  Object.keys(components).forEach((name) => {
    componentsCode += `import * as ${camelCase(`${name}-info`)} from '@/web-components/${name}/info';\n`;
  });

  // 将所有的组件信息放到对象中
  componentsCode += '\n';
  componentsCode += 'const componentsInfo: Record<string, { name: string; info: { name: string; tag: string }; indexPath: string; viteConfigPath?: string }> = {\n';
  Object.entries(components).forEach(([name, { index, viteConfig }]) => {
    componentsCode += `  ${camelCase(name)}: {\n`;
    componentsCode += `    name: '${name}',\n`;
    componentsCode += `    info: ${camelCase(`${name}-info`)},\n`;
    componentsCode += `    indexPath: '${index}',\n`;
    componentsCode += `    viteConfigPath: ${viteConfig ? `'${viteConfig}'` : undefined},\n`;
    componentsCode += '  },\n';
  });
  componentsCode += '};';

  // 输出打包代码
  outputFile(
    buildFilePath,
    s
      .overwrite(startIndex, endIndex, `\n${componentsCode}\n`)
      .toString(),
  );
});
