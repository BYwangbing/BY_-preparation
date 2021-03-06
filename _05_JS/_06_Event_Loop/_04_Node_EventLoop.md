https://blog.csdn.net/Sivak_/article/details/102068644
浏览器的 Event Loop 是 HTML5 中定义的规范
而 Node.js 采用 V8 引擎，其中的 Event Loop 是依赖 libuv 库实现的
libuv 是一个基于事件驱动的跨平台抽象层，封装了许多实用的 API

根据 Node.js 官方介绍，每次事件循环都包含了 6 个阶段

- Node.js 的事件循环分为 6 个阶段
- timers 阶段：这个阶段执行 timer（setTimeout、setInterval）的回调
  检查是否有到期的 timer（setTimeout、setInterval），并执行相应的回调函数
- I/O callbacks 阶段：执行一些系统调用错误，比如网络通信的错误回调 执行延迟到下一个循环迭代的 I/O 回调，即普通的回调。
- idle, prepare 阶段：仅 node 内部使用
- poll 阶段：获取新的 I/O 事件, 适当的条件下 node 将阻塞在这里
- check 阶段：执行 setImmediate() 的回调
- close callbacks 阶段：执行 socket 的 close 事件回调
- 重点看 timers、poll、check 这 3 个阶段就好

## timers 阶段

- timers 是事件循环的第一个阶段，Node 会去检查有无已过期的 timer 如果有则把它的回调压入 timer 的任务队列中等待执行
- Node 并不能保证 timer 在预设时间到了就会立即执行

## poll 阶段

poll 阶段主要有 2 个功能：

- 处理 poll 队列的事件
- 当有已超时的 timer，执行它的回调函数

## check 阶段

setImmediate()的回调会被加入 check 队列中， 从 event loop 的阶段图可以知道，check 阶段的执行顺序在 poll 阶段之后。

http://lynnelv.github.io/js-event-loop-nodejs

- 浏览器和 Node 环境下，microtask 任务队列的执行时机不同
- 浏览器环境下，microtask 的任务队列是每个 macrotask 执行完之后执行。
- 在 Node.js 中，microtask 会在事件循环的各个阶段之间执行，也就是一个阶段执行完毕，就会去执行 microtask 队列的任务。
- 递归的调用 process.nextTick()会导致 I/O starving，官方推荐使用 setImmediate()
