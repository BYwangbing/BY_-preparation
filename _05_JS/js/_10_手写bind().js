Function.prototype.myBind = function (thisArgs) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    let _self = this;
    let args = Array.prototype.slice.call(arguments, 1);
    let fnNOP = function () {
    };
    // new优先级
    let fnBound = function () {
        let _this = this instanceof _self ? this : thisArgs;
        _self.apply(_this, args.concat.call(Array.prototype.slice.call(arguments)))
    };
    if (this.prototype) {
        fnNOP.prototype = this.prototype
    }
    fnBound.prototype = new fnNOP();
    /*
       // 继承原型上的属性和方法
        fnBound.prototype = Object.create(self.prototype);
    */
    return fnBound;
};
/*
接受一个或者多个参数，第一个是要绑定的上下文，额外参数当作绑定函数的前置参数。
输出：返回原函数的拷贝，即返回一个函数，这个函数具备原函数的功能
 */
Function.prototype._myBind = function (thisArgs) {
    if (typeof this !== "function") {
        throw new TypeError("TypeError");
    }
    let self = this;
    let fnNOP = function () {
    };
    let args = Array.prototype.slice.call(arguments, 1);
    let fnBound = function () {
        let _this = this instanceof self ? this : thisArgs;
        return self.apply(_this, args.concat(Array.prototype.slice.call(arguments)))
    };
    if (this.prototype){
        fnNOP.prototype = this.prototype
    }
    fnBound.prototype = new fnNOP();
    return fnBound;
};