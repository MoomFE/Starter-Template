<h1 align="center">
  前端项目快速启动模板
</h1>

<br>

> [Base](./Base/): 最基础的项目模板

> [Mobile](./Mobile/): 基于 [Base](./Base/) 创建的移动端项目模板, 新增 [Vant](https://vant-contrib.gitee.io/vant/#/zh-CN) 作为组件库 

<br>

## 特性

- ⚡️ [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [Vue 3](https://github.com/vuejs/vue-next) 优先 - 就是快！
- 🗂 [基于文件的路由](https://github.com/hannoeru/vite-plugin-pages)
- 📑 [布局系统](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
- 🎨 [Tailwind CSS](https://tailwindcss.com) - 实用的原子 CSS 框架
- 😃 [100+ 图标集, 100000+ 图标为你所用, 从不妥协](https://github.com/antfu/unplugin-icons) - 使用 [Icônes](https://icones.netlify.app/) 或 [iconify](https://icon-sets.iconify.design/) 查看或搜索图标
- 🍍 [使用 Pinia 的状态管理](https://pinia.esm.dev/)
- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)
- 📥 [API 自动加载](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 无需引入
- 🦾 TypeScript 支持

<br>

## 开发工具

- [pnpm](https://pnpm.js.org/) - 快, 节省磁盘空间的包管理器
- [VS Code](https://code.visualstudio.com/)- IDE
- VS Code 扩展
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vue 3 `<script setup>` IDE 支持
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 代码风格检查及修正
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Tailwind CSS 样式提示及自动补全
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Iconify 图标提示及自动补全
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - 多合一的 I18n 支持

<br>

## 项目目录结构

- **\*\*\*.code-workspace**: VsCode 工作区文件, 使用这个打开项目
- **public**: 打包后需要放到根目录的文件
- **locales**: 国际化文件
- **dist**: 打包后的代码
- **src**: 源码
  - **assets**: 存放静态资源
  - **styles**: 公共样式文件夹
  - **shared**: 公用变量
  - **lib**: 外部依赖库 ( 不满足需求需要重构时或者外部依赖库有 BUG 时, 从 node_modules 移至这里 )
  - **utils**: 工具方法
  - **modules**: 项目依赖类库的配置
  - **workers**: 存放独立的 Web Worker 应用
  - **store**: 存储状态
  - **composables**: 组合式函数
  - **components**: 公共组件 ( 相对独立的组件, 离开当前项目也能使用的组件 )
  - **components-private**: 私有组件 ( 只能在当前项目中使用的组件, 比如说包含了业务代码的组件 )
  - **layouts**: 布局组件
  - **pages**: 页面

<br>

## 文件及文件夹命名规则

- **组件**: 大驼峰, 符合 Vue 组件命名规范
- **工具方法**: 小驼峰, 符合 JS 变量规范
- **其他**: 短横线, 方便辨认

<br>

## 开始

使用项目根目录的 `***.code-workspace` 文件进入 VsCode 工作区

安装相应的 VsCode 扩展 ( 首次进入工作区时, 右下角会提示安装 ), 可以在扩展界面, 输入 `@recommended` 检查安装状态

执行以下命令就可以启动项目

```bash
  pnpm dev # 如果你没装过 pnpm, 可以先运行: npm install -g pnpm
```