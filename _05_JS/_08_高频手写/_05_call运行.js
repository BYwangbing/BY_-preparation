function fn1() {
  console.log(1);
}

function fn2() {
  console.log(2);
}

fn1.call(fn2); //分析: fn2.$fn = fn1; 然后执行 fn2.$fn()  相当于执行  fn1(),  输出 1
// 实际上就是给fn2对象上添加fn1函数，然后执行fn1()
fn1.call.call(fn2); //  相当于调用  fn2.call();
fn1.call.call.call.call(fn2); //
fn2.call();
fn1.call();
Function.prototype.call(fn2); // Function.prototype  比较特殊，它是匿名空函数,其它任何对象的 prototype 都是对象。所以它什么也不输出
// Array.prototype.call([1,2,3]); //  所以这样调用会报  TypeError  错误，Array.prototype.call is not a function
Function.prototype.call.call.call(fn2); //  实际上执行 fn2()
Function.prototype.call.call.call(fn1); //  实际上执行 fn1()

/*
https://blog.csdn.net/ahiai/article/details/105145285
*/
