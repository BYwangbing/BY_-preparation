# Vue 3.0 性能提升主要是通过哪几方面体现的？

## 1. 响应式系统提升

- vue2 在初始化的时候，对 data 中的每个属性使用 definepropery 调用 getter 和 setter 使之变为响应式对象。如果属性值为对象，还会递归调用 defineproperty 使之变为响应式对象。
- vue3 使用 proxy 对象重写响应式。proxy 的性能本来比 defineproperty 好，proxy 可以拦截属性的访问、赋值、删除等操作，不需要初始化的时候遍历所有属性，另外有多层属性嵌套的话，只有访问某个属性的时候，才会递归处理下一级的属性。

优势：

- 可以监听动态新增的属性；
- 可以监听删除的属性 ；
- 可以监听数组的索引和 length 属性；

## 2. 编译优化

- 优化编译和重写虚拟 dom，让首次渲染和更新 dom 性能有更大的提升
  - vue2 通过标记静态根节点,优化 diff 算法
  - vue3 标记和提升所有静态根节点,diff 的时候只比较动态节点内容
- Fragments, 模板里面不用创建唯一根节点,可以直接放同级标签和文本内容
- 静态提升
- patch flag, 跳过静态节点,直接对比动态节点
  - 在与上次虚拟结点进行对比的时候，值对比带有 patch flag 的节点，并且可以通过 flag 的信息得知当前节点要对比的具体内容化。
- 缓存事件处理函数
- slot 编译优化
  - Vue.js 2.x 中，如果有一个组件传入了 slot，那么每次父组件更新的时候，会强制使子组件 update，造成性能的浪费。
  - Vue.js 3.0 优化了 slot 的生成，使得非动态 slot 中属性的更新只会触发子组件的更新。

## 3. 源码体积的优化

- vue3 移除了一些不常用的 api，例如：inline-template、filter 等
- 使用 tree-shaking

  - Tree-shaking 的本质是消除无用的 js 代码
  - 用来在打包编译成 bundle 时消除 ES6 Module 语法中未使用到的代码和模块。

  * Tree-Shaking 的作用

    - 用于跨文件代码的 DCE 优化。
    - 依赖 ES6 module 特性。
    - 消除未被 import 的 export 模块。
    - 对 Function 函数模块的处理效果好。
    - 无法直接处理 Class 模块。

# Vue3.0 里为什么要用 Proxy API 替代 defineProperty API？—— 响应式优化
