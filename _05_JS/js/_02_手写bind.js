/*
写一个newBind函数，完成bind的功能
    bind()方法，创建一个新函数，当这个新函数被调用时，
    bind()的第一个参数将作为它运行时的this，之后的一序列参数将会在传递的实参前传入作为它的参数
 */
Function.prototype.bind2 = function (context) {
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }
    let _self = this;
    let args = Array.prototype.slice.call(arguments, 1); // 从第二个参数截取
    let fnNOP = function () {
    }; // 定义一个空函数
    let fnBound = function () {
        // 检测 New 如果当前函数的this指向的是构造函数中的this 则判定为new 操作
        let _this = this instanceof _self ? this : context;
        _self.apply(_this, args.concat(Array.prototype.slice.call(arguments)));
    };
    // 维护原型关系
    if (this.prototype) {
        // 为了完成 new操作 还需要做一件事情 执行原型 链接 （思考题，为什么？）
        fnNOP.prototype = this.prototype;
    }
    fnBound.prototype = new fnNOP();
    return fnBound;
};

Function.prototype.bind3 = function (T) {
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }
    let _self = this;
    let args = Array.prototype.slice.call(arguments, 1);
    let fnNOP = function () {

    };
    let fnBound = function () {
        let _this = this instanceof _sel ? this : T;
        return _self.apply(_this, Array.prototype.slice.call(arguments))
    };
    if (this.prototype) {
        fnNOP.prototype = this.prototype
    }
    fnBound.prototype = new fnNOP();
    return fnBound;
};

Function.prototype.bind4 = function (T) {
    if (typeof this !== "function") {
        return
    }
    let _self = this;
    let args = Array.prototype.slice.call(arguments, 1);
    let fnNOP = function () {

    };
    let fnBound = function () {
        let _this = this instanceof _self ? this : T;
        return _self.apply(_this, Array.prototype.slice.call(arguments))
    };
    if (this.prototype) {
        fnNOP.prototype = this.prototype
    }
    fnBound.prototype = fnNOP.prototype;
    return fnBound;
};

/*
怎么获得对象上的属性：比如说通过Object.key()
从ES5开始，有三种方法可以列出对象的属性
    ①. for（let i in obj）该方法依次访问一个对象及其原型链中所有可枚举的类型
    ②. object.keys:返回一个数组，包括所有可枚举的属性名称
    ③. object.getOwnPropertyNames:返回一个数组包含不可枚举的属性
 */

/*
简单讲一讲ES6的一些新特性
1.不一样的变量声明：const和let
2.解构赋值 模板字符串 字符串拼接  ${``}
3.箭头函数
4. 函数的参数默认值
5.Spread / Rest 操作符 扩展运算符
7.对象和数组解构
9.for…of 和 for…in
10.ES6中的类
11. Set Map
12. Promise对象 await/async
13. class
14.正则、数组、函数、对象、数值的扩展以及对象的新增方法
    * Object.is()
    * Object.assign()
    * Object.getOwnPropertyDescriptors()
    * __proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()
    * Object.keys()，Object.values()，Object.entries()
    * Object.fromEntries() Object.fromEntries()方法是Object.entries()的逆操作，用于将一个键值对数组转为对象。
 */