>https://zhuanlan.zhihu.com/p/44438844

> https://juejin.im/post/6844904094281236487

webpack 是一个现代 JavaScript 应用程序的静态模块打包器
+ 压缩各种静态资源的工具
+ 性能优化 
+ 减少浏览器向服务器的请求次数 
+ 节约服务器的带宽资源

Webpack是基于Nodejs,运行在Nodejs环境下

## webpack与grunt、gulp的不同？
+ webpack是基于入口的。webpack会自动地递归解析入口所需要加载的所有资源文件，然后用不同的Loader来处理不同的文件，用Plugin来扩展webpack功能

## 有哪些常见的Loader？你用过哪些Loader？
+ `style-loader`：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS
+ `css-loader`：加载 CSS，支持模块化、压缩、文件导入等特性
+ `sass-loader`：将SCSS/SASS代码转换成CSS
+ `less-loader`：
+ `postcss-loader`：扩展 CSS 语法，使用下一代 CSS，可以配合 autoprefixer 插件自动补齐 CSS3 前缀
+ `vue-loader`：加载 Vue.js 单文件组件
+ `file-loader`：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件 (处理图片和字体)
+ `url-loader`：与 file-loader 类似，区别是用户可以设置一个阈值，大于阈值会交给 file-loader 处理，小于阈值时返回文件 base64 形式编码 (处理图片和字体)
+ `image-loader`：加载并且压缩图片文件
+ `babel-loader`：把 ES6 转换成 ES5
+ `awesome-typescript-loader`：将 TypeScript 转换成 JavaScript，性能优于 ts-loader
+ `eslint-loade`r：通过 ESLint 检查 JavaScript 代码
+ `tslint-loader`：通过 TSLint检查 TypeScript 代码
## 有哪些常见的Plugin？你用过哪些Plugin？
+ `html-webpack-plugin`：简化 HTML 文件创建 (依赖于 html-loader)
+ `clean-webpack-plugin`：目录清理
+ `HotModuleReplacementPlugin`：启用热模块更换（HMR）启用热模块更换（HMR）
+ `VueLoaderPlugin`
+ `ignore-plugin`：忽略部分文件
+ `define-plugin`：定义环境变量
+ `commons-chunk-plugin`：提取公共代码
## Loader和Plugin的不同？
+ `Loader` 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果
+ 因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作 加载和解析非JavaScript文件的能力
+ `Plugin` 就是插件，基于事件流框架 Tapable，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。
+ Loader 在 module.rules 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 test(类型文件)、loader、options (参数)等属性
+ Plugin 在 plugins 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入。

