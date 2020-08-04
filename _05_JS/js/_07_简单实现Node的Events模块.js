/*
    setTimeout采用的是类似IO观察者，
    setImmediate采用的是check观察者，
    而process.nextTick()采用的是idle观察者
    三种观察者的优先级顺序是：idle观察者>>io观察者>check观察者
    process.nextTick的执行却优先于setImmediate
    同一个tick里的process.nextTick被优先执行，其次才是setImmediate，
    setImmediate回调中的process.nextTick属于下一次tick，因此“强势插入”最后才输出。
 */
setTimeout(function(){
    console.log("setTimeout");
},0);

setImmediate(function(){
    console.log("setImmediate");
});