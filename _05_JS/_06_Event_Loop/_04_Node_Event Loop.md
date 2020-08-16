+ process.nextTick 永远大于 promise.then
+ MessageChannel属于宏任务，优先级是：MessageChannel->setTimeout

&emsp;&emsp;同步代码执行 -> 查找异步队列，推入执行栈，执行callback1[事件循环1] ->查找异步队列，推入执行栈，执行callback2[事件循环2]...