/*
1. 代码分类(位置)
  * 全局代码
  * 函数(局部)代码
2. 全局执行上下文
  * 在执行全局代码前将window确定为全局执行上下文
  * 对全局数据进行预处理
    * var定义的全局变量==>undefined, 添加为window的属性
    * function声明的全局函数==>赋值(fun), 添加为window的方法
    * this==>赋值(window)
  * 开始执行全局代码
3. 函数执行上下文
  * 在调用函数, 准备执行函数体之前, 创建对应的函数执行上下文对象(虚拟的, 存在于栈中)
  * 对局部数据进行预处理
    * 形参变量==>赋值(实参)==>添加为执行上下文的属性
    * arguments==>赋值(实参列表), 添加为执行上下文的属性
    * var定义的局部变量==>undefined, 添加为执行上下文的属性
    * function声明的函数 ==>赋值(fun), 添加为执行上下文的方法
    * this==>赋值(调用函数的对象)
  * 开始执行函数体代码
 */
/*console.log(a1);
console.log(a2());
a2();
console.log(a2, a2());

var a1 = 123;

function a2() {
    console.log('a2() 打印值');
}

console.log(this.a1, this.a2, this.a2());*/

/*function Person() {
};
var person1 = new Person();
var person2 = new Person();
Person.prototype.getName = function () {
    return this.name;
};
Person.prototype.name = 'tom';
person1.name = 'jerry';
var name = person2.getName();
console.log(name);*/

/*var name = 'tom';
function getMethod() {
    var result = function () {
        return name;
    };
    var name = 'jerry';
    return result;
}
var getName = getMethod();
var name1 = getName();
console.log(name1);*/

/*var name = '1';
new Promise(function (resolve, reject) {
    resolve();
    reject();
}).then(function () {
    name = '2';
}).catch(function () {
    name = '3';
});
name = '4';
setTimeout(() => {
    console.log(name);
});*/

/*// 函数执行上下文
function f(a1) {
    console.log(a1);
    console.log(a2);
    console.log('+++++++++++++');
    console.log(a3);
    console.log('+++++++++++++');
    console.log(arguments);
    console.log('+++++++++++++');
    console.log(a3());
    var a2 = 3;

    function a3() {
        console.log('a3()')
    }

}

f(2, 3)*/ /*console.log([1, 2] instanceof Array);
console.log(Array.isArray([1, 2, 3]));
Array.prototype.isPrototypeOf([1, 2]); //true表示是数组，false不是数组*/

/*
let foo = function () {
    console.log('foo1');
};
foo();  // foo1
foo = function () {
    console.log('foo2');
};
foo(); // foo2*/
function foo() {
  console.log('foo1');
}
foo(); // foo2
function foo() {
  console.log('foo2');
}
foo(); // foo2
