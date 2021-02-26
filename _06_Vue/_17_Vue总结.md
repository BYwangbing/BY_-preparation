https://juejin.cn/post/6844904084374290446

# Vue中组件生命周期调用顺序说一下
+ 组件的调用顺序都是先父后子,渲染完成的顺序是先子后父。
+ 组件的销毁操作是先父后子，销毁完成的顺序是先子后父。

## 加载渲染过程
+ 父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount- >子mounted->父mounted

## 子组件更新过程
+ 父beforeUpdate->子beforeUpdate->子updated->父updated

## 父组件更新过程
+ 父 beforeUpdate -> 父 updated

## 销毁过程
+ 父beforeDestroy->子beforeDestroy->子destroyed->父destroyed


# keep-alive
+ keep-alive可以实现组件缓存，当组件切换时不会对当前组件进行卸载
+ 常用的两个属性include/exclude，允许组件有条件的进行缓存。
+ 两个生命周期activated/deactivated，用来得知当前组件是否处于活跃状态。
+ keep-alive的中还运用了LRU(Least Recently Used)算法。

# Vue的性能优化
## 用户体验
+ 骨架屏
+ PWA

## 编码阶段
+ 尽量减少data中的数据，data中的数据都会增加getter和setter，会收集对应的watcher
+ v-if和v-for不能连用
+ 如果需要使用v-for给每项元素绑定事件时使用事件代理
+ SPA 页面采用keep-alive缓存组件
+ 在更多的情况下，使用v-if替代v-show
+ key保证唯一使用
+ 路由懒加载、异步组件
+ 防抖、节流
+ 第三方模块按需导入
+ 长列表滚动到可视区域动态加载
+ 图片懒加载

## 打包优化
+ 压缩代码
+ Tree Shaking/Scope Hoisting
+ 使用cdn加载第三方模块
+ 多线程打包
+ splitChunks抽离公共文件
+ sourceMap优化

## SEO优化
+ 预渲染
+ 服务端渲染SSR