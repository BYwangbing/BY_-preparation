/*
函数柯理化： 预先处理的思想（利用闭包的机制）
柯里化函数的定义：将多参数的函数转换成单参数的形式。
柯里化函数实现的原理：
    利用闭包原理在执行可以形成一个不销毁的作用域，
    然后把需要预先处理的内容都储存在这个不销毁的作用域中，并且返回一个最少参数函数。
*/

// 接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数
function add() {
    // arguments转换为一个真正的Array：
    /* var args = Array.prototype.slice.call(arguments);
     var args = [].slice.call(arguments);
     const args = Array.from(arguments);
     const args = [...arguments];*/
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    let _args = [...arguments];
    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    let _adder = function () {
        _args.push(...arguments);
        return _adder;
    };
    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    // 利用toString隐式调用的特性，当最后执行时隐式调用，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        })
    };
    return _adder
}

console.log(add(1, 2)(4)(5)().toString());
console.log(add(1)(2)(3)(4, 5)().toString()); //15
console.log(add(1)(2)(3, 4, 5)().toString()); //15
console.log(add(1)(2, 3, 4, 5)().toString()); //15

function _add() {
    let arr = [...arguments];
    let _adder = function () {
        arr.push(...arguments);
        return _adder;
    };
    _adder.toString = function () {
        return arr.reduce((prev, cur) => {
            return prev + cur
        })
    };
    return _adder;
}

const currying = () => {
    // let _args = Array.prototype.slice.call(arguments);
    let _args = [...arguments];
    let _adder = () => {
        _args.push(...arguments);
        return _adder
    };
    _adder.toString = () => {
        _args.reduce(((previousValue, currentValue) => previousValue + currentValue))
    };
    return _adder
};
/*var out = 25,
    inner = {
        out: 20,
        fun: function () {
            var out = 30;
            return this.out
        }
    };
console.log((inner.fun, inner.fun)());
console.log(inner.fun());
console.log((inner.fun)());
let result = (inner.fun = inner.fun)();
console.log(result);*/
