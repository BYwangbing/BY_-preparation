### 2.7.1 理解
+ 组件对象从创建到死亡它会经历特定的生命周期阶段
+ React 组件对象包含一系列的勾子函数(生命周期回调函数), 在生命周期特定时刻回调
+ 我们在定义组件时, 可以重写特定的生命周期回调函数, 做特定的工作

>组件加载之前，组件加载完成，以及组件更新数据，组件销毁。触发的一系列的方法 ，这就是组件的生命周期函数

### 2.7.2 生命周期详述
#### 组件的三个生命周期状态：
+ Mount：插入真实 DOM 
    + 初始渲染阶段 这是组件即将开始其生命之旅并进入 DOM 的阶段
+ Update：被重新渲染
    + 更新阶段：一旦组件被添加到 DOM，它只有在 prop 或状态发生变化时才可能更新和重新渲染。这些只发生在这个阶段。
+ Unmount：被移出真实 DOM 
    + 卸载阶段 这是组件生命周期的最后阶段，组件被销毁并从 DOM 中删除

#### React 为每个状态都提供了勾子(hook)函数
+ componentWillMount() 在渲染之前执行，在客户端和服务器端都会执行
+ componentDidMount() 仅在第一次渲染后在客户端执行
+ componentWillReceiveProps()  当从父类接收到 props 并且在调用另一个渲染器之前调用
+ shouldComponentUpdate() 根据特定条件返回 true 或 false。如果你希望更新组件，请返回true* 否则返回 false。默认情况下，它返回 false。
+ componentWillUpdate() 在 DOM 中进行渲染之前调用
+ componentDidUpdate()  在渲染发生后立即调用
+ componentWillUnmount() 从 DOM 卸载组件后调用。用于清理内存空间

#### 生命周期流程:
+ 第一次初始化渲染显示: ReactDOM.render()
    + constructor(): 创建对象初始化 state
    + componentWillMount() : 将要插入回调
    + render() : 用于插入虚拟 DOM 回调
    + componentDidMount() : 已经插入回调
+ 每次更新 state: this.setSate()
    + componentWillUpdate() : 将要更新回调
    + render() : 更新(重新渲染)
    + componentDidUpdate() : 已经更新回调
+ 移除组件: ReactDOM.unmountComponentAtNode(containerDom)
     + componentWillUnmount() : 组件将要被移除回调

###  2.7.3 重要的勾子
+ render(): 初始化渲染或更新渲染调用
+ componentDidMount(): 开启监听, 发送 ajax 请求
+ componentWillUnmount(): 做一些收尾工作, 如: 清理定时器
+ componentWillReceiveProps(): 后面需要时讲

<hr />

组件加载的时候触发的函数： 

    constructor 、componentWillMount、 render 、componentDidMount

组件数据更新的时候触发的生命周期函数：

    shouldComponentUpdate、componentWillUpdate、render、componentDidUpdate

你在父组件里面改变props传值的时候触发的：

    componentWillReceiveProps

组件销毁的时候触发的：

    componentWillUnmount

必须记住的生命周期函数：

    加载的时候：componentWillMount、 render 、componentDidMount（dom操作）

    更新的时候：componentWillUpdate、render、componentDidUpdate

    销毁的时候： componentWillUnmount


>初始化阶段：
+ getDefaultProps:获取实例的默认属性
+ getInitialState:获取每个实例的初始化状态
+ componentWillMount：组件即将被装载、渲染到页面上
+ render:组件在这里生成虚拟的 DOM 节点
+ componentDidMount:组件真正在被装载之后
>运行中状态：
+ componentWillReceiveProps:组件将要接收到属性的时候调用
+ shouldComponentUpdate:组件接受到新属性或者新状态的时候（可以返回 false，接收数据后不更新，阻止 render 调用，后面的函数不会被继续执行了）
+ componentWillUpdate:组件即将更新不能修改属性和状态
+ render:组件重新描绘
+ componentDidUpdate:组件已经更新

>销毁阶段：
+ componentWillUnmount:组件即将销毁
<hr />
    
+ **componentWillMount**() – 在渲染之前执行，在客户端和服务器端都会执行。
+ **componentDidMount**() – 仅在第一次渲染后在客户端执行。
+ **componentWillReceiveProps**() – 当从父类接收到 props 并且在调用另一个渲染器之前调用。
+ **shouldComponentUpdate**() – 根据特定条件返回 true 或 false。如果你希望更新组件，请返回true 否则返回 false。默认情况下，它返回 false。
+ **componentWillUpdate**() – 在 DOM 中进行渲染之前调用。
+ **componentDidUpdate**() – 在渲染发生后立即调用。
+ **componentWillUnmount**() – 从 DOM 卸载组件后调用。用于清理内存空间。

###shouldComponentUpdate 是做什么的，（react 性能优化是哪个周期函数？）
+ **shouldComponentUpdate** 这个方法用来判断是否需要调用 render 方法重新描绘 dom。因为 dom 的描绘非常消耗性能，如果我们能在 shouldComponentUpdate 方法中能够写出更优化的 dom diff 算法，可以极大的提高性能。
+ 组件接受到新属性或者新状态的时候（可以返回 false，接收数据后不更新，阻止 render 调用，后面的函数不会被继续执行了）
+ 根据特定条件返回 true 或 false。如果你希望更新组件，请返回true 否则返回 false。默认情况下，它返回 false




1. 组件将要挂载时触发的函数：componentWillMount
2. 组件挂载完成时触发的函数：componentDidMount
3. 是否要更新数据时触发的函数：shouldComponentUpdate
4. 将要更新数据时触发的函数：componentWillUpdate
5. 数据更新完成时触发的函数：componentDidUpdate
6. 组件将要销毁时触发的函数：componentWillUnmount
7. 父组件中改变了props传值时触发的函数：componentWillReceiveProps