const person = {name: "王福坤坤"};

function sayHi(age) {
    return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 5));
console.log(sayHi.bind(person, 5));

const num = {
    a: 10,
    add() {
        return this.a + 2;
    },
    reduce: () => this.a - 2
};
console.log(num.add());
console.log(num.reduce());

/*for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}*/

var foo = {
    bar: function () {
        return this.baz;
    },
    baz: 1
};
console.log(typeof (f = foo.bar)());

function fa() {
    return fa;
}

console.log(new fa() instanceof fa);

var x = 1;
// 函数声明写在运算符中，其为true，但放在运算符中的函数声明在执行阶段是找不到的
if (function fb() {
}) {
    x += typeof fb;
}
console.log(x);

console.log('----------------');
var _foo = function bar() {
    return 12;
};
console.log(typeof bar);
console.log(typeof _foo);
console.log(typeof _foo());
// console.log(typeof bar()); // ReferenceError: bar is not defined

console.log('----------------');
var company = {
    address: 'beijing'
};
// 这里的 yiDeng 通过 prototype 继承了 company的 address。
// yiDeng 自己并没有address属性。所以delete操作符的作用是无效的。
var yiDeng = Object.create(company);
delete yiDeng.address;
console.log(yiDeng.address);

console.log('----------------');
var fullName = 'a';
var obj = {
    fullName: 'b',
    prop: {
        fullName: 'c',
        getFullName: function () {
            return this.fullName;
        }
    }
};

console.log(obj.prop.getFullName()); // c
var test = obj.prop.getFullName;
console.log(test());  // a Node环境下 是undefined

console.log('----------------');
// 立即调用的函数表达式（IIFE） 有一个 自己独立的 作用域
// 如果函数名称与内部变量名称冲突，就会永远执行函数本身
var a = 1;
(function a() {
    a = 2;
    console.log(a);
})();
/*
* Math.min 的参数是 0 个或者多个，如果多个参数很容易理解，返回参数中最小的。
* 如果没有参数，则返回 Infinity，无穷大
* 而 Math.max 没有传递参数时返回的是-Infinity.所以输出 false
* */
var min = Math.min(), max = Math.max();
console.log(min < max);

console.log('----------------');

function side(arr) {
    arr[0] = arr[2];
}
/*因为 aside 函数加了默认值，就按 ES 的方式解析，ES6 是有块级作用域的，所以 c 的值是不会改变的  为1
* 不加默认值的话 为10
* */
function aside(a, b, c = 3) {
    c = 10;
    side(arguments);
    return a + b + c;
}

console.log(aside(1, 1, 1));



