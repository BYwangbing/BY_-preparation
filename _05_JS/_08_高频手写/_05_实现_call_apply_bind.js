Function.prototype._call = function (thisArg, ...args) {
    if (typeof this !== 'function') {
        throw new Error('Error')
    }
    let obj = thisArg || window; // 若没有传入this, 默认绑定window对象
    let fn = Symbol('fn'); // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
    obj[fn] = this; // this指向调用call的对象,即我们要改变this指向的函数
    let result = obj[fn](...args); // 执行当前函数
    delete obj[fn]; // 删除我们声明的fn属性
    return result; // 返回函数执行结果
};
let egg = {name: '王福坤坤'};

function Person(a, b, c, d) {
    return {
        name: this.name,
        a: a,
        b: b,
        c: c,
        d: d
    }
}

let bili = Person._call(egg, '瑞娜', '静晓', '老大', '胡爷爷');
console.log(bili);

Function.prototype._apply = function (thisArg, args) {
    if (typeof this !== 'function') {
        throw new Error('Error')
    }
    let obj = thisArg || window;
    let fn = Symbol('fn');
    thisArg[fn] = obj;
    let result = thisArg[fn](...args);
    delete thisArg[fn];
    return result;
};

function _Person(...a) {
    console.log(this.name);
    console.log(...a);
}

Function.prototype._bind = function (thisArg) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    let _self = this, args = [...arguments].slice(1);
    let fnNOP = function () {

    };
    let newFnBound = function () {
        let arr = args.concat([...arguments]);
        // 实例会绑定到函数调用的this ==> true ==> 变量b是函数bili的实例
        this instanceof fnNOP ? _self.apply(this, arr) : _self.apply(thisArg, arr);
    };
    // Person的原型对象复制给bili的原型对象
    fnNOP.prototype = _self.prototype;
    newFnBound.prototype = new fnNOP();
    return newFnBound()
};
/*let bibi = Person._bind(egg, '瑞娜', '静晓', '老大', '胡爷爷')("BY");
let b = new bibi('胡星星');*/

// 第一版 返回函数的模拟实现
Function.prototype.$bindI = function (thisArg) {
    let self = this;
    return function () {
        self.apply(thisArg)
    }
};

//第二版 传参的模拟实现
Function.prototype.$bindII = function (thisArg) {
    let self = this;
    // 获取$bindII函数从第二个参数到最后一个参数
    let args = Array.prototype.slice.call(arguments, 1);
    return function () {
        // 这个时候的arguments是指bind返回的函数传入的参数
        let bindArgs = Array.prototype.slice.call(arguments);
        self.apply(thisArg, args.concat(bindArgs))
    }
};

//第三版 构造函数效果的模拟实现
Function.prototype.$bindIII = function (thisArg) {
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }
    let self = this;
    // 获取$bindIII函数从第二个参数到最后一个参数
    let args = Array.prototype.slice.call(arguments, 1);
    let fNOP = function () {
    };
    let fBound = function () {
        let bindArgs = Array.prototype.slice.call(arguments);
        // 当作为构造函数时，this 指向实例，self 指向绑定函数，因为下面一句 `fbound.prototype = this.prototype;`，已经修改了 fbound.prototype 为 绑定函数的 prototype，此时结果为 true，当结果为 true 的时候，this 指向实例。
        // 当作为普通函数时，this 指向 window，self 指向绑定函数，此时结果为 false，当结果为 false 的时候，this 指向绑定的 context。
        self.apply(this instanceof self ? this : thisArg, bindArgs.concat(args))
    };
    // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承函数的原型中的值
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound()
};