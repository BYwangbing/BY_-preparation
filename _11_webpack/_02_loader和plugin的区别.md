<!-- https://www.jianshu.com/p/c021b78c9ef2 -->

- `Loader` 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果
- 因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作 加载和解析非 JavaScript 文件的能力
- `Plugin` 就是插件，基于事件流框架 Tapable，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。
- Loader 在 module.rules 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 test(类型文件)、loader、options (参数)等属性
- Plugin 在 plugins 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入。

# Loader

loader 是 webpack 的核心概念之一，它的基本工作流是将一个文件以字符串的形式读入，对其进行语法分析及转换（或者直接在 loader 中引入现成的编译工具，例如 sass-loader 中就引入了 node-sass 将 SCSS 代码转换为 CSS 代码，再交由 css-loader 处理），然后交由下一环节进行处理，所有载入的模块最终都会经过 moduleFactory 处理，转成 javascript 可以识别和运行的代码，从而完成模块的集成。

loader 支持链式调用，所以开发上需要严格遵循“单一职责”原则，即每个 loader 只负责自己需要负责的事情：将输入信息进行处理，并输出为下一个 loader 可识别的格式。

## Loader 的职责

一个 Loader 的职责是单一的，只需要完成一种转换。 如果一个源文件需要经历多步转换才能正常使用，就通过多个 Loader 去转换。 在调用多个 Loader 去转换一个文件时，每个 Loader 会链式的顺序执行， 第一个 Loader 将会拿到需处理的原内容，上一个 Loader 处理后的结果会传给下一个接着处理，最后的 Loader 将处理后的最终结果返回给 Webpack。
所以，在你开发一个 Loader 时，请保持其职责的单一性，你只需关心输入和输出。

## Loader 基础

由于 Webpack 是运行在 Node.js 之上的，一个 Loader 其实就是一个 Node.js 模块，这个模块需要导出一个函数。 这个导出的函数的工作就是获得处理前的原内容，对原内容执行处理后，返回处理后的内容。

## 了解 loader 的基本原理和编译器的基本原理

# Plugin

Webpack 启动后，在读取配置的过程中会先执行 new BasicPlugin(options)初始化一个 BasicPlugin 获得其实例。 在初始化 compiler 对象后，再调用 basicPlugin.apply(compiler)给插件实例传入 compiler 对象。 插件实例在获取到 compiler 对象后，就可以通过 compiler.plugin(事件名称, 回调函数)监听到 Webpack 广播出来的事件。 并且可以通过 compiler 对象去操作 Webpack。
