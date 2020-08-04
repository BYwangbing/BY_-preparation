/*
call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数
语法：function.call(thisArg, arg1, arg2, ...)
 */
Function.prototype.myCall = function (thisArg, ...args) {
    if (typeof this !== "function") {
        throw new Error('error');
    }
    thisArg = thisArg || window; // 若没有传入this, 默认绑定window对象
    const fn = Symbol('fn');  // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
    thisArg[fn] = this;  // this指向调用call的对象,即我们要改变this指向的函数
    const result = thisArg[fn](...args);   // 执行当前函数
    delete thisArg[fn]; // 删除我们声明的fn属性
    return result; // 返回函数执行结果
};

Function.prototype._myCall = function (thisArg, ...args) {
    if (typeof this !== "function") {
        throw new Error('error')
    }
    const fn = Symbol('fn');
    thisArg[fn] = this;
    const result = thisArg[fn](...args);
    delete thisArg[fn];
    return result;
};