##  MVVM定义
MVVM是Model-View-ViewModel的简写, 即模型-视图-视图模型。
+ 【模型】指的是后端传递的数据。
+ 【视图】指的是所看到的页面。
+ 【视图模型】mvvm模式的核心，它是连接view和model的桥梁。
    + 一是将【模型】转化成【视图】，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。
    + 二是将【视图】转化成【模型】，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。

这两个方向都实现的，我们称之为数据的双向绑定。

总结：
+ 在MVVM的框架下视图和模型是不能直接通信的, 它们通过ViewModel来通信

+ ViewModel通常要实现一个observer观察者，当数据发生变化，ViewModel能够监听到数据的这种变化，然后通知到对应的视图做自动更新，而当用户操作视图，ViewModel也能监听到视图的变化，然后通知数据做改动，这实际上就实现了数据的双向绑定。
+ 并且MVVM中的View 和 ViewModel可以互相通信。

## MVC的定义
MVC是Model-View- Controller的简写。即模型-视图-控制器
+ M和V指的意思和MVVM中的M和V意思一样。
+ C即Controller指的是页面业务逻辑
+ 使用MVC的目的就是将M和V的代码分离。MVC是单向通信。
+ 也就是View跟Model，必须通过Controller来承上启下。
<hr />

+ ViewModel存在目的在于抽离Controller中展示的业务逻辑，而不是替代Controller
+ MVVM实现的是业务逻辑组件的重用

## 为什么会有MVVM框架
## MVVM框架:VUE的介绍
Vue就是基于MVVM模式实现的一套框架，在vue中：
+ Model:指的是js中的数据，如对象，数组等等。
+ View:指的是页面视图viewModel:指的是vue实例化对象
### 为什么说VUE是一个渐进式的JS框架

## 主流框架实现双向绑定（响应式）的做法：
### 1. 脏值检查
Angular.js 是通过脏值检测的方式比对数据是否有变更，来决定是否更新视图

最简单的方式就是通过 setInterval() 定时轮询检测数据变动


### 2.观察者-订阅者（数据劫持）
![Image text](img/观察者_订阅者(数据劫持).jpg)
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

