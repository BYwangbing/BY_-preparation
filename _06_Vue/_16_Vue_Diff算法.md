virtual DOM是将真实的DOM的数据抽取出来，以对象的形式模拟树形结构

简单来说，diff算法有以下过程
+ 同级比较，再比较子节点
+ 先判断一方有子节点一方没有子节点的情况(如果新的children没有子节点，将旧的子节点移除)
+ 比较都有子节点的情况(核心diff)
+ 递归比较子节点

正常Diff两个树的时间复杂度是O(n^3)，但实际情况下我们很少会进行跨层级的移动DOM，所以Vue将Diff进行了优化，
从O(n^3) -> O(n)，只有当新旧children都为多个子节点时才需要用核心的Diff算法进行同层级比较。

Vue2的核心Diff算法采用了双端比较的算法，同时从新旧children的两端开始进行比较，借助key值找到可复用的节点，再进行相关操作。

Vue3.x: 在创建VNode时就确定其类型，以及在mount/patch的过程中采用位运算来判断一个VNode的类型，在这个基础之上再配合核心的Diff算法，使得性能上较Vue2.x有了提升。

# 虚拟Dom以及key属性的作用
+ 由于在浏览器中操作DOM是很昂贵的。频繁的操作DOM，会产生一定的性能问题。这就是虚拟Dom的产生原因。
+ Vue2的Virtual DOM借鉴了开源库snabbdom的实现。
+ Virtual DOM本质就是用一个原生的JS对象去描述一个DOM节点。是对真实DOM的一层抽象
+ 也就是源码中的VNode类，它定义在src/core/vdom/vnode.js中
+ VirtualDOM映射到真实DOM要经历VNode的create、diff、patch等阶段。


## 「key的作用是尽可能的复用 DOM 元素。」
+ 新旧 children 中的节点只有顺序是不同的时候，最佳的操作应该是通过移动元素的位置来达到更新的目的。
+ 需要在新旧 children 的节点中保存映射关系，以便能够在旧 children 的节点中找到可复用的节点。
+ key也就是children中节点的唯一标识。


## 当数据发生变化时，vue是怎么更新节点的？
+ 要知道渲染真实DOM的开销是很大的，比如有时候我们修改了某个数据，如果直接渲染到真实dom上会引起整个dom树的重绘和重排，有没有可能我们只更新我们修改的那一小块dom而不要更新整个dom呢？diff算法能够帮助我们。
+ 我们先根据真实DOM生成一颗virtual DOM，当virtual DOM某个节点的数据改变后会生成一个新的Vnode，然后Vnode和oldVnode作对比，发现有不一样的地方就直接修改在真实的DOM上，然后使oldVnode的值为Vnode。
+ diff的过程就是调用名为patch的函数，比较新旧节点，一边比较一边给真实的DOM打补丁。


真实的dom操作代价昂贵，操作频繁还会引起页面卡顿影响用户体验
https://juejin.cn/post/6844903923183157261