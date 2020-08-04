/*
    问题: 在js调用函数时传递变量参数时, 是值传递还是引用传递
        * 理解1: 都是值(基本/地址值)传递
        * 理解2: 可能是值传递, 也可能是引用传递(地址值)
    问题: JS引擎如何管理内存?
        1. 内存生命周期
            * 分配小内存空间, 得到它的使用权
            * 存储数据, 可以反复进行操作
            * 释放小内存空间
        2. 释放内存
            * 局部变量: 函数执行完自动释放
            * 对象: 成为垃圾对象==>垃圾回收器回收
 */
var a = 3;

function fn(a) {
    a = a + 1;
}

fn(a);
/*a只是获取了b的值，并没有对b进行修改*/
console.log(a);

function fn2(obj) {
    console.log(obj.name);
}

var obj = {name: 'Bob'};

fn2(obj);

var pro = {name: 'Sara'};

function fn3(obj) {
    obj.name = 'Tom'
}

fn3(pro);
console.log(pro.name);

let b = 4;

function f() {
    let b = 5;
}

f();
console.log(b);