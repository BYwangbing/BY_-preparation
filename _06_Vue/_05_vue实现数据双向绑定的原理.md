> https://segmentfault.com/a/1190000006599500

# vue实现数据双向绑定主要是：
+ 采用 **数据劫持** 结合 **发布者-订阅者模式** 的方式，数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之发生改变
+ 核心( Vue2.0 )：通过Object.defineProperty（）来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应监听回调。
## 观察者-订阅者（数据劫持）
![Image text](img/观察者_订阅者(数据劫持).jpg)
+ 数据监听器Observer
+ 指令解析器Compile
+ 订阅者 Watcher
+ Dep 消息订阅器
<hr />

+ 数据监听器Observer，能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者
+ 利用Obeject.defineProperty()来监听属性变动 那么将需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter和getter 这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化
+ 这样我们已经可以监听每个数据的变化了，那么监听到变化之后就是怎么通知订阅者了，所以接下来我们需要实现一个消息订阅器
+ Dep 消息订阅器，内部维护了一个数组，用来收集订阅者（Watcher），数据变动触发notify 函数，再调用订阅者的 update 方法。
+ Dep 用于储存订阅者并发布消息

+ compile主要做的事情是解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图，如图所示：
![Image text](img/compile指令解析器.png)

+ Watcher 订阅者，作为连接 Observer 和 Compile 的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数， 从而更新视图
    + 在自身实例化时往属性订阅器(dep)里面添加自己
    + 自身必须有一个update()方法
    + 待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。
+ MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果。

### 为什么Vue3.0不再使用defineProperty实现数据监听
1. Object.defineProperty 真的无法监测数组下标的变化吗？<br />
&emsp;&emsp;Object.defineProperty 对数组和对象的表现一致，并非不能监控数组下标的变化，vue2.x中无法通过数组索引来实现响应式数据的自动更新是vue本身的设计导致的，不是 defineProperty 的锅.
2. 分析 Vue2.x 中对数组 Observe 部分源码
3. 对比Object.defineProperty和 Proxy
    1. Object.defineProperty只能劫持对象的属性，而Proxy是直接代理对象。<br />
        + 由于 Object.defineProperty 只能对属性进行劫持，需要遍历对象的每个属性，如果属性值也是对象，则需要深度遍历。而 Proxy 直接代理对象，不需要遍历操作。
    2. Object.defineProperty对新增属性需要手动进行Observe。<br />
        + 由于 Object.defineProperty 劫持的是对象的属性，所以新增属性时，需要重新遍历对象，对其新增属性再使用 Object.defineProperty 进行劫持。
        + 也正是因为这个原因，使用vue给 data 中的数组或对象新增属性时，需要使用 vm.$set 才能保证新增的属性也是响应式的。
    3.  Proxy支持13种拦截操作，这是defineProperty所不具有的
    4. 新标准性能红利 
        + Proxy 作为新标准，长远来看，JS引擎会继续优化 Proxy ，但 getter 和 setter 基本不会再有针对性优化。
    5. Proxy兼容性差
>https://blog.csdn.net/qq_27127385/article/details/103959956
### 总结：
+ Object.defineProperty 对数组和对象的表现一直，并非不能监控数组下标的变化，vue2.x中无法通过数组索引来实现响应式数据的自动更新是vue本身的设计导致的，不是 defineProperty 的锅。
+ Object.defineProperty 和 Proxy 本质差别是，defineProperty 只能对属性进行劫持，所以出现了需要递归遍历，新增属性需要手动 Observe 的问题。
+ Proxy 作为新标准，浏览器厂商势必会对其进行持续优化，但它的兼容性也是块硬伤，并且目前还没有完整的polifill方案。

## 什么是Vue响应式呢
数据发生变化后，会重新对页面渲染，这就是Vue响应式

### 想完成这个过程，我们需要做些什么
+ 侦测数据的变化 即 数据劫持 / 数据代理
+ 收集视图依赖了哪些数据 即依赖收集
+ 数据变化时，自动“通知”需要更新的视图部分，并进行更新 即发布订阅模式

### 如何侦测数据的变化
