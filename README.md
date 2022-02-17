<p align="center">
  前端项目快速启动模板
</p>

<br>

## 特性

- ⚡️ [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [Vue 3](https://github.com/vuejs/vue-next) 优先 - 就是快！
- 🗂 [基于文件的路由](https://github.com/hannoeru/vite-plugin-pages)
- 📑 [布局系统](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
- 🎨 [Tailwind CSS](https://tailwindcss.com) - 实用的原子 CSS 框架
- 😃 [100+ 图标集, 10000+ 图标为你所用, 从不妥协](https://github.com/antfu/unplugin-icons)
- 🍍 [使用 Pinia 的状态管理](https://pinia.esm.dev/)
- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)
- 📥 [API 自动加载](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 无需引入
- 🦾 TypeScript 支持

<br>

## 项目目录结构

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
  - **router**: 路由配置
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