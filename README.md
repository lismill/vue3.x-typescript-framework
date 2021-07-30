# syy-base-framework

## 概览

- [x] 初始化一个空项目
- [x] 配置 ESLint 校验
- [x] 配置多环境信息
- [x] 配置网页信息
- [x] 配置 vue.config.js
- [x] 配置 Element-Puls
- [x] 配置 SVG
- [x] 目录结构规范（基础版本，需要多次迭代修改）
- [x] CSS 样式系统（基础版本，需要多次迭代修改）
- [ ] 基础框架搭建
- [x] Vscode 代码片段（基础版本，需要多次迭代修改）
- [ ] 多主题切换
- [x] I18N 国际化
- [ ] Router
- [ ] Axios
- [ ] Mock
- [ ] Vuex
- [ ] 公共组件
- [ ] 自定义指令
- [ ] 扩展插件
- [ ] 公用方法
- [ ] 权限验证
- [ ] 错误日志
- [ ] 辅助脚本
- [x] 使用基础框架及更新版本
- [ ] 自动化部署

## 1. 初始化一个空项目

```bash
node -v
# v14.17.3

npm -v
# 6.14.13

# 安装 vue/cli
npm install -g @vue/cli

# 创建一个空项目
vue create project-name

Vue CLI v4.5.13
? Please pick a preset: (Use arrow keys)
  create_vue3.0_project ([Vue 3] node-sass, babel, typescript, pwa, router, vuex, eslint)
  Default ([Vue 2] babel, eslint)
  Default (Vue 3) ([Vue 3] babel, eslint)
> Manually select features

? Check the features needed for your project:
 (*) Choose Vue version
 (*) Babel
 (*) TypeScript
 (*) Progressive Web App (PWA) Support
 (*) Router
 (*) Vuex
 (*) CSS Pre-processors
>(*) Linter / Formatter
 ( ) Unit Testing
 ( ) E2E Testing

? Choose a version of Vue.js that you want to start the project with
  2.x
> 3.x

? Choose a version of Vue.js that you want to start the project with 3.x
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) No
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with node-sass)
? Pick a linter / formatter config: Standard
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>(*) Lint on save
 ( ) Lint and fix on commit

? Pick additional lint features: Lint on save
? Pick a unit testing solution: Jest
? Pick an E2E testing solution: Nightwatch
? Pick browsers to run end-to-end test on (Press <space> to select, <a> to toggle all, <i> to invert selection)
>(*) Chrome
 ( ) Firefox

? Pick browsers to run end-to-end test on Chrome
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? (y/N) N

$ cd project-name
$ npm run serve
```



## 1. 配置 ESLint 校验

### 1.1 安装 Vscode ESLint 插件

扩展 => 搜索 ESLint => 安装 => 重启 Vscode

### 1.2 ESLint 配置

`./.eslintrc.js`

```javascript
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
```



### 1.3 Vscode 工作区配置

`./.vscode/settings.json`

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "vetur.format.defaultFormatter.ts": "none",
  "vetur.format.defaultFormatter.html": "prettier",
  "vetur.format.defaultFormatter.js": "prettier-eslint",
  "vetur.format.defaultFormatter.css": "prettier",
  "vetur.format.defaultFormatter.scss": "prettier",
  "vetur.format.options.tabSize": 2,
  "vetur.experimental.templateInterpolationService": false,
  "javascript.format.insertSpaceBeforeFunctionParenthesis": false,
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "files.eol": "\n",
  "vetur.format.scriptInitialIndent": false,
  "vetur.format.styleInitialIndent": false,
}
```



## 1. 配置多环境

### 1.1 修改 package.json

`./package.json`

```json
"scripts": {
  "serve": "vue-cli-service serve --mode develop",
  "build": "vue-cli-service build --mode production",
  "lint": "vue-cli-service lint"
}
```

### 1.2 添加 .env 文件

`./.env.development`

```javascript
# 开发环境
NODE_ENV = 'development'
VUE_APP_VERSION = 'development'
VUE_APP_BASE_URL = '/development'
// others config
```

`./.env.production`

```javascript
# 生产环境
NODE_ENV = 'production'
VUE_APP_VERSION = 'production'
VUE_APP_BASE_URL = '/production'
// others config
```

### 1.3 使用方法

```javascript
{{ process.env.NODE_ENV }}
{{ process.env.VUE_APP_VERSION }}
```



## 1. 配置网页信息

### 1.1 配置favicon.ico

覆盖 `./public/favicon.ico` 文件

### 1.2 配置网页标题

#### 1.2.1 直接修改

`./public/index.html`

```javascript
<title>管理后台</title>
```

#### 1.2.2 通过 vue.config.js 修改

`./vue.config.js`

```javascript
chainWebpack: config => {
  // 默认网页标题
  config.plugin('html').tap(args => {
    args[0].title = '管理后台'
    return args
  })
}
```

#### 1.2.3 全局路由拦截修改

`@/router/index.ts`

```javascript
router.beforeEach((to, from, next) => {
  document.title = `管理后台${to.meta.title ? ' - ' + to.meta.title : ''}`;
  next();
});
```



## 1. 配置 vue.config.js

`./vue.config.js`

[更多详细配置](https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE)

| 属性                       | 描述                                                         | 类型                                            | 默认值                            |
| -------------------------- | ------------------------------------------------------------ | ----------------------------------------------- | --------------------------------- |
| baseUrl                    | Vue CLI 3.3 起已弃用，请使用 publicPath                      | -                                               | -                                 |
| publicPath                 | 部署应用包时的基本 URL。用法和 webpack 本身的 `output.publicPath` 一致，但是 Vue CLI 在一些其他地方也需要用到这个值，所以**请始终使用 `publicPath` 而不要直接修改 webpack 的 `output.publicPath`**。 | string                                          | /                                 |
| outputDir                  | 当运行 `vue-cli-service build` 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 (构建时传入 `--no-clean` 可关闭该行为)。 | string                                          | dist                              |
| assetsDir                  | 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 `outputDir` 的) 目录。 | string                                          | ''                                |
| indexPath                  | 指定生成的 `index.html` 的输出路径 (相对于 `outputDir`)。也可以是一个绝对路径。 | string                                          | index.html                        |
| filenameHashing            | 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 `false` 来关闭文件名哈希。 | boolean                                         | true                              |
| pages                      | 在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件。其值应该是一个对象。 | Object                                          | undefined                         |
| lintOnSave                 | 是否在开发环境下通过 [eslint-loader](https://github.com/webpack-contrib/eslint-loader) 在每次保存时 lint 代码。这个值会在 [`@vue/cli-plugin-eslint`](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint) 被安装之后生效。 | boolean` | `'warning'` | `'default'` | `'error' | default                           |
| runtimeCompiler            | 是否使用包含运行时编译器的 Vue 构建版本。设置为 `true` 后你就可以在 Vue 组件中使用 `template` 选项了，但是这会让你的应用额外增加 10kb 左右。 | boolean                                         | false                             |
| transpileDependencies      | 默认情况下 `babel-loader` 会忽略所有 `node_modules` 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。 | Array<string \|RegExp>                          | []                                |
| productionSourceMap        | 如果你不需要生产环境的 source map，可以将其设置为 `false` 以加速生产环境构建。 | boolean                                         | true                              |
| crossorigin                | 设置生成的 HTML 中 `<link rel="stylesheet">` 和 `<script>` 标签的 `crossorigin` 属性。需要注意的是该选项仅影响由 `html-webpack-plugin` 在构建时注入的标签 - 直接写在模版 (`public/index.html`) 中的标签不受影响。更多细节可查阅: [CORS settings attributes](https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_settings_attributes) | string                                          | undefined                         |
| integrity                  | 在生成的 HTML 中的 `<link rel="stylesheet">` 和 `<script>` 标签上启用 [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。<br />需要注意的是该选项仅影响由 `html-webpack-plugin` 在构建时注入的标签 - 直接写在模版 (`public/index.html`) 中的标签不受影响。 | boolean                                         | false                             |
| configureWebpack           | 如果这个值是一个对象，则会通过 [webpack-merge](https://github.com/survivejs/webpack-merge) 合并到最终的配置中。如果这个值是一个函数，则会接收被解析的配置作为参数。该函数既可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。<br />更多细节可查阅：[配合 webpack > 简单的配置方式](https://cli.vuejs.org/zh/guide/webpack.html#简单的配置方式) | Object \|Function                               | -                                 |
| chainWebpack               | 是一个函数，会接收一个基于 [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain) 的 `ChainableConfig` 实例。允许对内部的 webpack 配置进行更细粒度的修改。<br />更多细节可查阅：[配合 webpack > 链式操作](https://cli.vuejs.org/zh/guide/webpack.html#链式操作-高级) | Function                                        | -                                 |
| css.modules                | 从 v4 起已弃用，请使用[`css.requireModuleExtension`](https://cli.vuejs.org/zh/config/#css-requireModuleExtension)。 在 v3 中，这个选项含义与 `css.requireModuleExtension` 相反。 | -                                               | -                                 |
| css.requireModuleExtension | 默认情况下，只有 `*.module.[ext]` 结尾的文件才会被视作 CSS Modules 模块。设置为 `false` 后你就可以去掉文件名中的 `.module` 并将所有的 `*.(css|scss|sass|less|styl(us)?)` 文件视为 CSS Modules 模块。 | boolean                                         | true                              |
| css.extract                | 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。同样当构建 Web Components 组件时它总是会被禁用 (样式是 inline 的并注入到了 shadowRoot 中)。当作为一个库构建时，你也可以将其设置为 `false` 免得用户自己导入 CSS。 | boolean \|Object                                | 生产环境 `true`，开发环境 `false` |
| css.sourceMap              | 是否为 CSS 开启 source map。设置为 `true` 之后可能会影响构建的性能。 | boolean                                         | false                             |
| css.loaderOptions          | 向 CSS 相关的 loader 传递选项。                              | Object                                          | {}                                |
| devServer                  | [所有 `webpack-dev-server` 的选项](https://webpack.js.org/configuration/dev-server/)都支持。 | Object                                          | -                                 |
| devServer.proxy            | 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。这个问题可以通过 `vue.config.js` 中的 `devServer.proxy` 选项来配置。 | string \|Object                                 | -                                 |
| parallel                   | 是否为 Babel 或 TypeScript 使用 `thread-loader`。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。 | boolean                                         | require('os').cpus().length > 1   |
| pwa                        | 向 [PWA 插件](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa)传递选项。 | Object                                          | -                                 |
| pluginOptions              | 这是一个不进行任何 schema 验证的对象，因此它可以用来传递任何第三方插件选项。 | Object                                          | -                                 |



## 1. 配置 Element-Puls

### 1.1 安装 Element-Plus

```
npm install element-plus --save
```

### 1.2 全局引入

`./main.ts`

```typescript
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(ElementPlus)
```

### 1.3 使用方法

[Element Plus+](https://element-plus.org/#/zh-CN)



## 1. SVG 配置

### 1.1 安装依赖

```bash
cnpm install svg-sprite-loader --save-dev
```



### 1.2 添加配置

`./vue.config.js`

```javascript
chainWebpack: config => {
  // svg
  const svgRule = config.module.rule('svg')
  svgRule.uses.clear()
  svgRule
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: 'icon-[name]'
    })
}
```



### 1.3 创建 SVG 资源文件夹

`@/assets/svg`

### 1.4 创建 SVG 公共组件

`@/components/index.ts`

```typescript
// 引入 @/assets/svg 下的所有 svg 文件
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext)
const req = require.context('@/assets/svg', true, /\.svg$/)
requireAll(req)
```



`@/components/s-svg-icon`

```vue
<template>
  <svg
    v-bind="$attrs"
    :class="svgClass"
    :style="{
      color: color,
      width: size,
      height: size
    }"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/runtime-core'

export default defineComponent({
  props: {
    // svg name
    name: {
      type: String,
      required: true
    },
    // svg 颜色
    color: {
      type: String,
      default: ''
    },
    // svg 大小
    size: {
      type: String,
      default: '16px'
    }
  },
  setup (props) {
    const iconName = computed(() => `#icon-${props.name}`)
    const svgClass = computed(() => props.name ? `svg-icon icon-${props.name}` : '404')
    return {
      iconName,
      svgClass
    }
  }
})
</script>

<style lang="scss">
.svg-icon {
  fill: currentColor;
  vertical-align: middle;
}
</style>

```



### 1.5 全局注册组件

`./main.ts`

```typescript
import '@/components/s-svg-icon/index'
import svgIcon from '@/components/s-svg-icon/index.vue'

createApp(App).component('svg-icon', svgIcon)
```



### 1.6 使用组件

```html
<svg-icon name="404" color="#e74e3d" size="30"></svg-icon>
```



## 1. 目录结构以及规范

```json
├── src
│  ├── assets
│  ├── ├── images
│  ├── ├── styles
│  ├── ├── ├── common                                  # 常用样式
│  ├── ├── ├── element                                 # 覆盖 element 样式
│  ├── ├── ├── guage                                   # 内外边距
│  ├── ├── ├── layout                                  # 基础框架样式
│  ├── ├── ├── variable                                # 全局样式变量
│  ├── ├── ├── index.scss                              # 入口文件
│  ├── ├── svg                                         # svg 文件
│  ├── components
│  ├── language                                        # i18n 多语言
│  ├── ├── ├── en.ts                                   # 英文配置
│  ├── ├── ├── i18n.ts                                 # 注册多 i18n 语言实例
│  ├── ├── ├── index.ts                                # 入口文件
│  ├── ├── ├── ja.ts                                   # 日文配置
│  ├── ├── ├── zh-CN.ts                                # 中文配置
│  ├── router
│  ├── ├── index.ts
│  ├── ├── modules
│  ├── store
│  ├── ├── index.ts
│  ├── ├── modules
│  ├── views                                           # 所有视图
│  ├── App.vue                                         # 入口页面
│  ├── main.ts                                         # 入口文件
│  ├── registerServiceWorker.ts                        # 离线缓存
│  ├── shims-vue.d.ts                                  # 为TS做的适配定义文件
```



## 1. CSS 样式系统

### 1.1 常用样式

#### 1.1.1 常用样式文件

`@/assets/assets/styles/common/index.scss`

```css
/**
 * Reset
 */
* { margin: 0; padding: 0; box-sizing: border-box; }
ul li, li { list-style: none; }
body { line-height: 1.75; font-size: 14px; color: #2c3e50; font-family: Avenir, Helvetica, Arial, sans-serif; }
.svg-icon:focus { outline: none; }

/**
 * Cursor
 */
$cursor: pointer;
@each $i in $cursor {
  .cursor-#{$i} { cursor: $i; }
}

/**
 * Flex
 */
.flex { display: flex; align-items: center; flex-wrap: wrap; }
.flex-center { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; }

$flex-x: "center", "space-between", "space-around", "space-evenly";
$flex-y: "center", "flex-start", "flex-end", "space-evenly", "baseline";
@each $i in $flex-x {
  .flex-x-#{$i} { display: flex; justify-content: #{$i}; flex-wrap: wrap; }
  .flex-y-#{$i} { display: flex; align-items: #{$i}; flex-wrap: wrap; }
}

/**
 * Gauge
 */
$gauge: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20,
        5, 10, 15, 20, 25, 30, 35, 40, 45, 50,
        60, 70, 80, 90, 100;

@each $i in $gauge {
  .m-#{$i} { margin: $i+px; }
  .m-t#{$i} { margin-top: $i+px; }
  .m-b#{$i} { margin-bottom: $i+px; }
  .m-l#{$i} { margin-left: $i+px; }
  .m-r#{$i} { margin-right: $i+px; }
  .m-lr#{$i} { margin-left: $i+px; margin-right: $i+px; }
  .m-tb#{$i} { margin-top: $i+px; margin-bottom: $i+px; }

  .p-#{$i} { padding: $i+px; }
  .p-t#{$i} { padding-top: $i+px; }
  .p-b#{$i} { padding-bottom: $i+px; }
  .p-l#{$i} { padding-left: $i+px; }
  .p-r#{$i} { padding-right: $i+px; }
  .p-lr#{$i} { padding-left: $i+px; padding-right: $i+px; }
  .p-tb#{$i} { padding-top: $i+px; padding-bottom: $i+px; }
}

/**
 * Color & Background
 */
 $colors: (
  "primary": #1890ff,
  "dark": #001529,
  "light": #1890ff,
  // white
  "w": #ffffff,
  "w-1": #fefefe,
  "w-2": #f7f7f7,
  "w-3": #efefef,
  "w-4": #eeeeee,
  "w-5": #dddddd,
  "w-6": #cccccc,
  "w-7": #bbbbbb,
  "w-8": #aaaaaa,
  // black
  "b": #000000,
  "b-1": #111111,
  "b-2": #222222,
  "b-3": #333333,
  "b-4": #444444,
  "b-5": #555555,
  "b-6": #666666,
  "b-7": #777777,
  "b-8": #888888,
  "b-9": #999999,
);

@each $colorKey, $color in $colors{
  .color-#{$colorKey}{ color: $color; }
  .bg-#{$colorKey} { background-color: $color; }
}

```



#### 1.1.2 使用方法

```html
<div class="cursor-pointer">box</div>
<div class="flex">box</div>
<div class="m-10">box</div>
<div class="p-10">box</div>
<div class="color-primary">box</div>
<div class="color-b-6">box</div>
<div class="bg-primary">box</div>
<div class="bg-b-6">box</div>
<div class="cursor-pointer flex-x-space-between p-10 color-b-9 bg-b-1">
  <div>left</div>
  <div>center</div>
  <div>right</div>
</div>
```



### 1.2 全局样式变量

#### 1.2.1 配置全局变量

`./vue.config.js`

```javascript
css: {
  loaderOptions: {
    sass: {
      prependData: '@import "@/assets/styles/variable/index.scss";'
    }
  }
}
```



#### 1.2.2 全局样式变量文件

`@/assets/styles/variable/index.scss`

```css
/*
 * Color
 */
$color-primary: #1890ff;
$color-dark: #001529;
$color-light: #1890ff;
// white
$color-w: #ffffff;
$color-w-1: #fefefe;
$color-w-2: #f7f7f7;
$color-w-3: #efefef;
$color-w-4: #eeeeee;
$color-w-5: #dddddd;
$color-w-6: #cccccc;
$color-w-7: #bbbbbb;
$color-w-8: #aaaaaa;
// black
$color-b: #000000;
$color-b-1: #111111;
$color-b-2: #222222;
$color-b-3: #333333;
$color-b-4: #444444;
$color-b-5: #555555;
$color-b-6: #666666;
$color-b-7: #777777;
$color-b-8: #888888;
$color-b-9: #999999;
```



#### 1.2.3 使用全局变量

```css
<style lang="scss" scoped>
.box {
  color: $color-primary;
  background: $color-b-6;
}
</style>
```



## 1. 基础框架搭建

## 1. Vscode 代码片段

### 1.1 作用

使用快捷键自动生成代码片段

### 1.2 文档

| 快捷键                     | 描述                       | 生成代码                                                     |
| -------------------------- | -------------------------- | ------------------------------------------------------------ |
| cl                         | 控制台输出片段             | console.log('')                                              |
| cd                         | 控制台输出片段             | console.dir('')                                              |
| ct                         | 控制台输出片段             | console.table('')                                            |
| vue3.x-typescript-template | 生成一个 vue3.x 空模板片段 | -                                                            |
| api                        | 生成一个 api 请求片段      | .({})<br />.then((res: any) => { console.log(res) })<br />.catch((error: any) => console.log(error))<br />.finally(() => {}) |
| map                        | map 遍历数组片段           | .map((item: any) => {})                                      |
| foreach                    | foreach遍历数组片段        | .forEach((item: any) => {})                                  |
| find                       | find 遍历数组片段          | .find((item: any) => {})                                     |
| filter                     | filter 遍历数组片段        | .filter((item: any) => {})                                   |
| every                      | every 遍历数组片段         | .every((item: any) => {})                                    |
| some                       | some 遍历数组片段          | .some((item: any) => {})                                     |



### 1.3 配置方法

复制以下配置信息，粘贴到 Vscode `首选项 => 用户片段 => 新建全局代码片段文件` 

```json
{
  /**
   * Console
   */
  "console.log": {
    "scope": "javascript, typescript",
    "prefix": "cl",
    "body": [
      "console.log('$1', $2)"
    ],
    "description": "syy-console.log()"
  },
  "console.dir": {
    "scope": "javascript, typescript",
    "prefix": "cd",
    "body": [
      "console.dir('$1', $2)"
    ],
    "description": "syy-console.dir()"
  },
  "console.table": {
    "scope": "javascript, typescript",
    "prefix": "ct",
    "body": [
      "console.table('$1', $2)"
    ],
    "description": "syy-console.table()"
  },
  /**
   * Template
   */
  "vue3.x typescript template": {
    "scope": "",
    "prefix": "vue3.x-typescript-template",
    "body": [
      "<template>\n\t<div class=\"${1}\">\n\t\t$2\n\t</div>\n</template>\n\n<script lang='ts'>\nimport { defineComponent } from 'vue'\n\nexport default defineComponent({\n\tsetup () {\n\t\tconsole.log('$3')\n\t}\n})\n</script>\n"
    ],
    "description": "syy-vue3.x-typescript-template"
  },
  /**
   * API
   */
  "api": {
    "scope": "javascript, typescript",
    "prefix": "api",
    "body": [
      "${1}({$2}).then((res: any) => {\n\tconsole.log(res)\n}).catch((error: any) => console.log(error)).finally(() => {$3})"
    ],
    "description": "syy-api"
  },
  /**
   * Array
   */
  "map": {
    "scope": "javascript, typescript",
    "prefix": "map",
    "body": [
      "${1}.map((item: ${2:any}) => {$3})"
    ],
    "description": "syy-map"
  },
  "foreach": {
    "scope": "javascript, typescript",
    "prefix": "foreach",
    "body": [
      "${1}.forEach((item: ${2:any}) => {${3}})",
    ],
    "description": "syy-foreach"
  },
  "find": {
    "scope": "javascript, typescript",
    "prefix": "find",
    "body": [
      "${1}.find((item: ${2:any}) => {$3})"
    ],
    "description": "syy-find"
  },
  "filter": {
    "scope": "javascript, typescript",
    "prefix": "filter",
    "body": [
      "${1}.filter((item: ${2:any}) => {$3})"
    ],
    "description": "syy-filter"
  },
  "every": {
    "scope": "javascript, typescript",
    "prefix": "every",
    "body": [
      "${1}.every((item: ${2:any}) => {$3})"
    ],
    "description": "syy-every"
  },
  "some": {
    "scope": "javascript, typescript",
    "prefix": "some",
    "body": [
      "${1}.some((item: ${2:any}) => {$3})"
    ],
    "description": "syy-some"
  },
}
```



## 1. 多主题切换

多主题的实现方式有很多种，考虑到对整体框架结构的污染和编译打包配置关联，此框架暂时选用实现最简单、配置最简单的动态 class 方式

### 1.1 创建多主题公共组件

`@/components/s-picker-theme/index.vue`

```vue
<template>
  <el-popover popper-class="popper-theme" title="主题色" trigger="hover">
    <template #reference>
      <slot></slot>
    </template>
    <div class="themes flex">
      <div
        class="theme"
        v-for="theme in themes"
        :key="theme.key"
        @click="changeTheme(theme)"
      >
        <el-tooltip :content="theme.value">
          <div
            :class="theme.key"
            :style="{ backgroundColor: theme.color }"
          ></div>
        </el-tooltip>
      </div>
    </div>
  </el-popover>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { ElLoading } from 'element-plus'

export default defineComponent({
  setup () {
    // 默认主题色
    const themes = ref([
      { key: 'theme-dark', value: '深色', color: '#001529' },
      { key: 'theme-light', value: '浅色', color: '#ffffff' },
      { key: 'theme-blue', value: '蓝色', color: '#1890ff' },
      { key: 'theme-orange', value: '橙色', color: '#ed6827' }
    ])

    // 切换主题色
    const changeTheme = (item: { key: string}) => {
      // 设置本地存储 & 修改app class
      localStorage.setItem('syy_theme', item.key)
      const app = document.querySelector('#app')
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      app!.className = item.key

      // 开启切换主题提示
      const loadingInstance = ElLoading.service({
        text: '切换主题中...'
      })

      // 关闭切换主题提示
      setTimeout(() => loadingInstance.close(), 360)
    }

    return {
      themes,
      changeTheme
    }
  }
})
</script>
<style scoped lang="scss">
.themes {
  .theme {
    width: 26px;
    height: 26px;
    padding: 1px;
    margin-right: 4px;
    border-radius: 2px;
    border: 1px solid #dddddd;
    & > div {
      opacity: 1;
      width: 100%;
      height: 100%;
      cursor: pointer;
      border-radius: 2px;
    }
    & > div:hover {
      opacity: 0.75;
    }
  }
}
</style>
```



### 1.2 创建各主题样式

`@/assets/styles/theme/index.scss`

```scss
@import url("../variable/index.scss");
// theme-dark
.theme-dark {
  .header-menu, .aside-menu {
    background-color: $color-dark;
  }
}

// theme-light
.theme-light {
  .header-menu, .aside-menu {
    background-color: $color-light;
  }
}

// theme-blue
.theme-blue {
  .header-menu, .aside-menu {
    background-color: $color-blue;
  }
}

// theme-orange
.theme-orange {
  .header-menu, .aside-menu {
    background-color: $color-orange;
  }
}
```



### 1.3 创建默认主题方法

`@/utils/common/index.ts`

```typescript
/**
 * 设置为本地存储的主题色
 * {default} - theme-dark
 */
export const renderTheme = (): void => {
  const theme = localStorage.getItem('syy_theme') || 'theme-dark'
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document.querySelector('#app')!.className = theme
}
```



### 1.4 入口文件设置默认主题

`./src/main.ts`

```
import { renderTheme } from '@/utils/common'
renderTheme()
```



### 1.5 使用方法

```vue
<s-picker-theme>
  // 自定义触发选择多主题内容
  <span class="cursor-pointer">切换主题</span>
</s-picker-theme>
```



## 1. I18N 国际化

### 1.1 安装依赖

```powershell
cnpm install vue-i18n@next
```



### 1.2 创建多语言资源

#### 1.2.1 中文

`./language/cn.ts`

```typescript
const cn = {
  message: {
    lang: 'cn',
    name: '李林林',
    title: '后台管理中心'
  }
}
export default cn
```



#### 1.2.2 英文

`./language/en.ts`

```typescript
const en = {
  message: {
    lang: 'en',
    name: 'lean',
    title: 'Control center'
  }
}
export default en
```



#### 1.2.3 日文

`./language/ja.ts`

```typescript
const ja = {
  message: {
    lang: 'ja',
    name: '李林林',
    title: 'コントロールセンター'
  }
}
export default ja
```



#### 1.2.4 入口文件

`./language/index.ts`

```typescript
import en from './en'
import ja from './ja'
import cn from './zh-CN'

export default {
  en,
  ja,
  cn
}
```



#### 1.2.3 注册实例

`./language/i18n.ts`

```typescript
import { createI18n } from 'vue-i18n'
import messages from './index'

// 注册实例，引入多语言
const i18n = createI18n({
  locale: localStorage.language || 'cn',
  messages
})
console.log('i18n', i18n)
export default i18n
```



### 1.3 全局引入

`./main.ts`

```typescript
import i18n from '@/language/i18n'

app.use(i18n)
```



### 1.4 使用和切换方法

```vue
<template>
  <div class="lang">
    <el-select v-model="lang" @change="changeLang">
      <el-option
        v-for="lang in ['cn', 'en', 'ja']"
        :key="lang"
        :value="lang"
        :label="lang"
      />
    </el-select>
    {{ t('message.lang') }} - {{ t('message.name') }} - {{ t('message.title') }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup () {
    /**
     * I18n 多语言使用和切换方法
     */
    const { t, locale } = useI18n()
    const lang = ref('cn')
    const changeLang = (val: string) => (locale.value = val)

    return {
      t,
      lang,
      changeLang
    }
  }
})
</script>
```



### 1.5 去除 vue-i18n 控制台警告

`./vue.config.js`

``` typescript
// 解决 vue-i18n 控制台警告提示
config.resolve.alias.set('vue-i18n', 'vue-i18n/dist/vue-i18n.cjs.js')
```



## 1. Router

## 1. Axios

## 1. Mock

## 1. Vuex

## 1. 公共组件

## 1. 自定义指令

## 1. 扩展插件

## 1. 公用方法

## 1. 权限验证

## 1. 错误日志

## 1. 辅助脚本

## 1. 使用基础框架及更新版本

某些项目基于该基础框架开发，基础框架更新后，需要同步到各个项目中

### 1.1 查看项目中已有远程仓库

```shell
git remote
```

### 1.2 添加远程基础框架仓库

```shell
git remote add framework git-url
```

### 1.3 查看基础框架信息

```shell
git fetch framework
```

### 1.4 获取或者初始化基础框架

```shell
# 获取v1.0.0分支的代码
git merge framework/v1.0.0 --allow-unrelated-historie
```

### 1.5 解决冲突

更新基础框架，如有冲突先解决冲突，然后提交并推送代码，项目中的基础框架更新完成



## 1. 自动化部署



------



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
