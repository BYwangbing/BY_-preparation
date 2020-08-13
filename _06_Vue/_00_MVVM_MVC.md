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
vue Observer 数据监听器，把一个普通的 JavaScript 对象传给 Vue 实例的 data 选项，Vue 将遍历此对象所有的属性，并使用Object.defineProperty()方法把这些属性全部转成setter、getter方法。当data中的某个属性被访问时，则会调用getter方法，当data中的属性被改变时，则会调用setter方法。Compile指令解析器，它的作用对每个元素节点的指令进行解析，替换模板数据，并绑定对应的更新函数，初始化相应的订阅。Watcher 订阅者，作为连接 Observer 和 Compile 的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数。Dep 消息订阅器，内部维护了一个数组，用来收集订阅者（Watcher），数据变动触发notify 函数，再调用订阅者的 update 方法。