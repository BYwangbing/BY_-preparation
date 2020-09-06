+ 首先js 是单线程运行的，在代码执行的时候，通过将不同函数的执行上下文压入执行栈中来保证代码的有序执行。
+ 在执行同步代码的时候，如果遇到了异步事件，js 引擎并不会一直等待其返回结果，而是会将这个事件挂起，继续执行执行栈中的其他任务
+ 当同步事件执行完毕后，再将异步事件对应的回调加入到与当前执行栈中不同的另一个任务队列中等待执行。
+ 任务队列可以分为宏任务对列和微任务对列，当当前执行栈中的事件执行完毕后，js 引擎首先会判断微任务对列中是否有任务可以执行，如果有就将微任务队首的事件压入栈中执行。
+ 当微任务对列中的任务都执行完成后再去判断宏任务对列中的任务。

## 优先级

+ process.nextTick 永远大于 promise.then
+ process.nextTick > promise.then > setTimeout > setImmediate
+ MessageChannel属于宏任务，优先级是：MessageChannel->setTimeout

+ macrotask（按优先级顺序排列）: script(你的全部JS代码，“同步代码”）, setTimeout, setInterval, setImmediate, I/O,UI rendering
+ microtask（按优先级顺序排列）:process.nextTick,Promises（这里指浏览器原生实现的 Promise）, Object.observe, MutationObserver

&emsp;&emsp;同步代码执行 -> 查找异步队列，推入执行栈，执行callback1[事件循环1] ->查找异步队列，推入执行栈，执行callback2[事件循环2]...


JS中有两种任务类型：
+ 微任务（microtask）和宏任务（macrotask）
+ 在ES6中，microtask称为 jobs，macrotask称为 task。

+ 宏任务： script （主代码块）、setTimeout 、setInterval 、setImmediate 、I/O 、UI rendering
+ 微任务：process.nextTick（Nodejs） 、promise 、Object.observe 、MutationObserver

+ process.nextTick 优先级永远大于 promise.then
+ MessageChannel属于宏任务，优先级是：MessageChannel->setTimeout
<hr />

## setInterval运行机制
+ setInterval具有累积效应 可以执行多次 直到clearInterval把它清除 使用 `setInterval()` 创建的定时器可以使代码循环执行
+ 会每隔指定的时间将注册的函数置入Event Queue，如果前面的任务耗时太久，那么同样需要等待
+ 对于setInterval(fn,ms)来说，而是每过ms秒，会有fn进入Event Queue


+ setInterval的运行机制是，将指定的代码移出本次执行，等到下一轮Event Loop时，再检查是否到了指定时间。
+ 如果到了，就执行对应的代码；如果不到，就等到再下一轮Event Loop时重新判断
+ 当使用setInterval（）时，仅当没有该定时器的其他代码实例时才将定时器代码插入队列
```js
console.log('script start');
const interval = setInterval(() => {
 console.log('setInterval')
}, 0);
setTimeout(() => {
 console.log('setTimeout 1');
 Promise.resolve()
   .then(() => console.log('promise 3'))
   .then(() => console.log('promise 4'))
   .then(() => {
     setTimeout(() => {
       console.log('setTimeout 2');
       Promise.resolve().then(() => console.log('promise 5'))
         .then(() => console.log('promise 6'))
         .then(() => clearInterval(interval))
     }, 0)
   })
}, 0);
Promise.resolve()
 .then(() => console.log('promise 1'))
 .then(() => console.log('promise 2'));
```