/*
    内存分类：
        * 栈: 全局变量/局部变量
        * 堆: 对象
    问题: var a = xxx, a内存中到底保存的是什么?
        xxx是基本数据： 保存的就是这个数据
        xxx是对象： 保存的是对象的地址值 即该对象的访问地址
        xxx是变量： 保存的是的xxx的内存内容（可能是基本数据也可能是地址值）
    问题：关于引用变量赋值问题
        1. n个引用变量指向同一个对象，通过一个变量修改对象内部数据，其他所有变量看到的是修改之后的数据
        2. n个引用变量指向同一个对象, 让其中一个引用变量指向另一个对象，其他的引用变量依然指向前一个对象
    问题: 在js调用函数时传递变量参数时, 是值传递还是引用传递
 */

//  n个引用变量指向同一个对象，通过一个变量修改对象内部数据，其他所有变量看到的是修改之后的数据
let obj1 = {name: 'Tom'};
let obj2 = obj1;
obj2.age = 12;
console.log(obj1.age);

function fn1(obj) {
    obj.name = 'Jack'
}

fn1(obj1);
console.log(obj2.name);

// 2. n个引用变量指向同一个对象, 让其中一个引用变量指向另一个对象，其他的引用变量依然指向前一个对象
console.log('------------------------------');
let obj3 = {age: 18};
let obj4 = obj3;
obj3 = {name: 'Bob', age: 21};
console.log(obj4.age, obj4.name, obj3.name, obj3.age);

obj4.age = 16;
console.log(obj4.age, obj3.age);

function fn2(obj) {
    obj = {age: 15}
}

fn2(obj3);
console.log(obj3.age);

