function _new(Fn, ...args) {
    // 创建一个空对象， 让它的原型链指向Fn.prototype
    // let obj = {};
    // obj.__proto__ = Fn.prototype;
    let obj = Object.create(Fn.prototype);
    // 只改this指向并且把参数传递过去,call和apply都可以
    let rel = Fn.call(obj, ...args);
    // 正常规定,如何Fn返回的是null或undefined(也就是不返回内容),我们返回的是obj,否则返回rel
    // 根据规范，返回 null 和 undefined 不处理，依然返回obj
    return rel instanceof Object ? rel : obj;
}
/*Object.create([AA对象])： 创建一个空对象obj 并且让空对象obj作为AA对象所属构造函数的实例 */