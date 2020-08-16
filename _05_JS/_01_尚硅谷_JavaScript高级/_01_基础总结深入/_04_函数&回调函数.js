/*
1. 什么是函数?
2. 为什么要用函数?
3. 如何定义函数?
    * 函数声明
    * 函数表达式
4. 如何调用(执行)函数?
    * test(): 直接调用
    * obj.test(): 通过对象调用
    * new test(): new 调用
    * test.call/apply(obj): 临时让test成为obj的方法进行调用
5. 什么函数才是回调函数?
    1). 你定义的
    2). 你没有调
    3). 但最终它执行了(在某个时刻或某个条件下)
6. 常见的回调函数?
    * dom事件回调函数 ==>发生事件的dom元素
    * 定时器回调函数 ===>window
    * ajax请求回调函数(后面讲)
    * 生命周期回调函数(后面讲)
 */
let obj = {};

function test() {
    this.name = 'match'
}

// obj.test()  // 不能直接, 根本就没有
test.call(obj);  // obj.test2()
// 可以让一个函数成为指定任意对象的方法进行调用
// 将一个对象的方法交给另一个对象来执行
console.log(obj.name);