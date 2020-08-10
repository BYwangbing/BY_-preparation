/*
apply() 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。
语法：func.apply(thisArg, [argsArray])
 */
Function.prototype.myApply = function (thisArg, args) {
    if (typeof this !== 'function') {
        throw new TypeError('error');
    }
    const fn = Symbol('fn');      // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
    thisArg = thisArg || window;   // 若没有传入this, 默认绑定window对象
    thisArg[fn] = this;          // this指向调用call的对象,即我们要改变this指向的函数
    const result = thisArg[fn](...args); // 执行当前函数
    delete thisArg[fn];            // 删除我们声明的fn属性
    return result                  // 返回函数执行结果
};
Function.prototype._call = function (thisArgs, ...args) {
    if (typeof this !== "function") {
        throw new TypeError("类型错误")
    }
    let fn = Symbol('fn');
    thisArgs = thisArgs || window;
    thisArgs[fn] = this;
    const result = thisArgs[fn](...args);
    delete thisArgs[fn];
    return result;
};