## treeshking 的原理:

webpack 的 treeshking 是基于 es module 的静态分析，
能够在编译期间就确定哪些模块用到了哪些模块没用到， 并且配合解构赋值还能确定哪些 export 用到了，哪些 export 没用到。
然后对用到的部分和没用到的部分进行标记，在压缩阶段就可以删除标记出的没有用到的部分，从而达到 treeshking 的目的。

根据 treeshking 的原理，想要触发 treesking 需要满足 3 个条件：

1. 使用 es module 的模块规范、使用解构赋值
2. 开启 optimization.usedExports
3. 使用压缩的插件
