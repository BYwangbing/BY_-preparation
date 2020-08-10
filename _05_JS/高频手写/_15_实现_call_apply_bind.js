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
    newFnBound.prototype = new fnNOP;
    return newFnBound()
};
/*let bibi = Person._bind(egg, '瑞娜', '静晓', '老大', '胡爷爷')("BY");
let b = new bibi('胡星星');*/
