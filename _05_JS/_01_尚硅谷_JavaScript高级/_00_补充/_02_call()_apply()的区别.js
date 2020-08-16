/*
使用call、apply和bind都能够是函数的上下文发生改变

call方法：
    语法：call([thisObj[,arg1[, arg2[,   [,.argN]]]]])
    定义：调用一个对象的一个方法，以另一个对象替换当前对象。
    说明：call 方法可以用来代替另一个对象调用一个方法
          call 方法可将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。
　　      如果没有提供 thisObj 参数，那么 Global 对象被用作 thisObj。
apply方法：
    语法：apply([thisObj[,argArray]])
    定义：应用某一对象的一个方法，用另一个对象替换当前对象。
    说明：如果 argArray 不是一个有效的数组或者不是 arguments 对象，那么将导致一个 TypeError。
          如果没有提供 argArray 和 thisObj 任何一个参数，那么 Global 对象将被用作 thisObj， 并且无法被传递任何参数
bind语法：
    func.bind(thisArg[, arg1[, arg2[, ...]]])
    thisArg 当绑定函数被调用时，该参数会作为原函数运行时的this指向。当使用new 操作符调用绑定函数时，该参数无效。
    arg1, arg2, ... 当绑定函数被调用时，这些参数将置于实参之前传递给被绑定的方法。


1. 每个函数都包含两个非继承而来的方法：call()方法和apply()方法
相同点：
    都能够改变方法的执行上下文（执行环境），将一个对象的方法交给另一个对象来执行，并且是立即执行
 */

let obj = {};

function test() {
    this.name = 'match'
}

// obj.test()  // 不能直接, 根本就没有
test.call(obj);  // obj.test2()   // 可以让一个函数成为指定任意对象的方法进行调用
console.log(obj.name);

console.log('+++++++');

function add(a, b) {
    console.log(a + b);
}

function sub(a, b) {
    console.log(a - b);
}

add.call(sub, 3, 1); // 是用 add 来替换 sub，add.call(sub,3,1) == add(3,1)