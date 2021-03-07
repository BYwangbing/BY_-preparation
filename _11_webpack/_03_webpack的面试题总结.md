> https://zhuanlan.zhihu.com/p/44438844

> https://juejin.im/post/6844904094281236487

webpack 是一个现代 JavaScript 应用程序的静态模块打包器

- 压缩各种静态资源的工具
- 性能优化
- 减少浏览器向服务器的请求次数
- 节约服务器的带宽资源

Webpack 是基于 Nodejs,运行在 Nodejs 环境下

## webpack 与 grunt、gulp 的不同？

- webpack 是基于入口的。webpack 会自动地递归解析入口所需要加载的所有资源文件，然后用不同的 Loader 来处理不同的文件，用 Plugin 来扩展 webpack 功能

## 有哪些常见的 Loader？你用过哪些 Loader？

- `style-loader`：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS
- `css-loader`：加载 CSS，支持模块化、压缩、文件导入等特性
- `sass-loader`：将 SCSS/SASS 代码转换成 CSS
- `less-loader`：
- `postcss-loader`：扩展 CSS 语法，使用下一代 CSS，可以配合 autoprefixer 插件自动补齐 CSS3 前缀
- `vue-loader`：加载 Vue.js 单文件组件
- `file-loader`：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件 (处理图片和字体)
- `url-loader`：与 file-loader 类似，区别是用户可以设置一个阈值，大于阈值会交给 file-loader 处理，小于阈值时返回文件 base64 形式编码 (处理图片和字体)
- `image-loader`：加载并且压缩图片文件
- `babel-loader`：把 ES6 转换成 ES5
- `awesome-typescript-loader`：将 TypeScript 转换成 JavaScript，性能优于 ts-loader
- `eslint-loade`r：通过 ESLint 检查 JavaScript 代码
- `tslint-loader`：通过 TSLint 检查 TypeScript 代码

## 有哪些常见的 Plugin？你用过哪些 Plugin？

- `html-webpack-plugin`：简化 HTML 文件创建 (依赖于 html-loader)
- `clean-webpack-plugin`：目录清理
- `HotModuleReplacementPlugin`：启用热模块更换（HMR）启用热模块更换（HMR）
- `VueLoaderPlugin`
- `ignore-plugin`：忽略部分文件
- `define-plugin`：定义环境变量
- `commons-chunk-plugin`：提取公共代码

## Loader 和 Plugin 的不同？

- `Loader` 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果
- 因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作 加载和解析非 JavaScript 文件的能力
- `Plugin` 就是插件，基于事件流框架 Tapable，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。
- Loader 在 module.rules 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 test(类型文件)、loader、options (参数)等属性
- Plugin 在 plugins 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入。

## webpack 打包优化的方法

https://segmentfault.com/a/1190000021711249

- 按需加载
  - 路由组件按需加载
  - 第三方组件和插件。按需加载需引入第三方组件
- 优化 loader 配置
  - 优化正则匹配
  - 通过 cacheDirectory 选项开启缓存
  - 通过 include、exclude 来减少被处理的文件
- 优化文件路径——省下搜索文件的时间
  - extension 配置之后可以不用在 require 或是 import 的时候加文件扩展名,会依次尝试添加扩展名进行匹配。
  - mainFiles 配置后不用加入文件名，会依次尝试添加的文件名进行匹配
  - alias 通过配置别名可以加快 webpack 查找模块的速度
- 生产环境关闭 sourceMap
  - sourceMap 本质上是一种映射关系，打包出来的 js 文件中的代码可以映射到代码文件的具体位置,这种映射关系会帮助我们直接找到在源代码中的错误。
  - 打包速度减慢，生产文件变大，所以开发环境使用 sourceMap，生产环境则关闭
- 代码压缩
  - UglifyJS: vue-cli 默认使用的压缩代码方式，它使用的是单线程压缩代码，打包时间较慢
  - ParallelUglifyPlugin: 开启多个子进程，把对多个文件压缩的工作分别给多个子进程去完成
- 提取公共代码
  - 相同资源重复被加载，浪费用户流量，增加服务器成本。
  - 每个页面需要加载的资源太大，导致网页首屏加载缓慢，影响用户体验。
- CDN 优化
  - 随着项目越做越大，依赖的第三方 npm 包越来越多，构建之后的文件也会越来越大。
  - 再加上又是单页应用，这就会导致在网速较慢或者服务器带宽有限的情况出现长时间的白屏。
