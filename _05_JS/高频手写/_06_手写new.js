function _new(Fn, ...args) {
    // 创建一个空对象， 让它的原型链指向Fn.prototype（作为Fn的一个实例）
    /*Object.create([AA对象])： 创建一个空对象obj 并且让空对象obj作为AA对象所属构造函数的实例 */
    // let  obj = {};
    // obj.__proto__ = Fn.prototype;
    let obj = Object.create(Fn.prototype);
    Fn.call(obj, ...args);
    return obj;
}