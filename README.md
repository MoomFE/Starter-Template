<h1 align="center">
  前端项目快速启动模板
</h1>

<br>

## 特性

- ⚡️ [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.io), [Vue 3](https://github.com/vuejs/core) 优先 - 就是快！
- 🗂 [基于文件的路由](https://github.com/hannoeru/vite-plugin-pages)
- 📑 [布局系统](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 原子化 CSS 引擎
- 😃 [各种图标集为你所用](https://github.com/iconify/icon-sets) - 110+ 图标集, 110000+ 图标为你所用, 从不妥协
- 🍍 [使用 Pinia 的状态管理](https://pinia.vuejs.org)
- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)
- 📲 [组件自动导入](https://github.com/antfu/unplugin-icons)
- 📥 [API 自动加载](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 无需引入
- 🖨 使用 [Vite SSG](https://github.com/antfu/vite-ssg) 进行服务端生成 ( SSG )
- 🦾 TypeScript 支持

<br>

## 版本说明

> [Base](./Base/): 最基础的项目模板

> [Base - Naive UI](./Base%20-%20Naive%20UI/): 基于 [Base](./Base/) 创建的项目模板
>   - 使用 [Naive UI](https://www.naiveui.com/zh-CN/os-theme) 作为组件库

> [Mobile](./Mobile/): 基于 [Base](./Base/) 创建的移动端项目模板
>   - 使用 [Vant](https://vant-contrib.gitee.io/vant/#/zh-CN) 作为组件库
>   - 移除主题切换, 如有需要可自行封装

> [WebComponentsEditor](./WebComponentsEditor/): Web Components 编辑器
>   - 更加方便的开发及调试 [Web Components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)

> [Admin](./Admin/): 基于 [Naive UI](https://www.naiveui.com/zh-CN/os-theme) 的后台管理系统模板
>   - 目前仅是一个基础的实例

<br>

## 预配置

### UI 框架
  - [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

### Icons
  - [Iconify](https://iconify.design/) - 使用任意的图标集, 使用 [Icônes](https://icones.netlify.app/) 或 [iconify](https://icon-sets.iconify.design/) 查看或搜索图标
    - [用组件的方式使用图标](https://github.com/antfu/unplugin-icons)
    - [用 CSS 的方式使用图标](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

<br>

## 开发工具

- [pnpm](https://pnpm.js.org/) - 快, 节省磁盘空间的包管理器
- [VS Code](https://code.visualstudio.com/)- IDE
- VS Code 扩展
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vue 3 `<script setup>` IDE 支持
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 代码风格检查及修正
  - [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) - UnoCSS 样式提示及自动补全
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
  - **styles**: 公共样式
  - **shared**: 公用变量 or 函数
  - **lib**: 外部依赖库 ( 不满足需求需要重构时或者外部依赖库有 BUG 时, 从 node_modules 移至这里 )
  - **utils**: 工具函数
  - **modules**: 项目依赖类库的配置
  - **workers**: 存放独立的 Web Worker 应用
  - **stores**: 状态存储
  - **composables**: 组合式函数
  - **components**: 公共组件 ( 相对独立的组件, 离开当前项目也能使用的组件 )
  - **components-private**: 私有组件 ( 只能在当前项目中使用的组件, 比如说包含了业务代码的组件 )
  - **layouts**: 布局组件
  - **pages**: 页面

<br>

## 开始

使用项目根目录的 `***.code-workspace` 文件进入 VsCode 工作区

安装相应的 VsCode 扩展 ( 首次进入工作区时, 右下角会提示安装 ), 可以在扩展界面, 输入 `@recommended` 检查安装状态

执行以下命令就可以启动项目

```bash
  pnpm dev # 如果你没装过 pnpm, 可以先运行: npm install -g pnpm
```