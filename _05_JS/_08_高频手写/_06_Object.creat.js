Object._create = function (obj) {
    // 排除传入的对象是 null 和 非object的情况
    if (obj === null || typeof obj !== 'object') {
        throw new TypeError(`Object prototype may only be an Object: ${prototype}`);
    }
    // 让空对象的 __proto__指向 传进来的 对象(prototype)
    // 目标 {}.__proto__ = obj
    function Fn() {

    }

    Fn.prototype = obj;
    return new Fn()
};
// 没有原型的对象也是存在
/*
* Object.create(null) 创建的对象是一个空对象，
* 在该对象上没有继承 Object.prototype 原型链上的属性或者方法,
* 例如：toString(), hasOwnProperty()等方法
* Object.create()方法接受两个参数:Object.create(obj,propertiesObject) ;
*   proto 该对象应该是新创建对象的原型
*   propertiesObject：可选。该参数对象是一组属性与值，
       * 该对象的属性名称将是新创建的对象的属性名称，值是属性描述符
       * 注意：该参数对象不能是 undefined，另外只有该对象中自身拥有的可枚举的属性才有效，也就是说该对象的原型链上属性是无效的、
*总结：
    * 使用Object.create()是将对象继承到__proto__属性上
    * 可以通过Object.create(null) 创建一个干净的对象，也就是没有原型，
    * 而 new Object() 创建的对象是 Object的实例，原型永远指向Object.prototype.
    * 使用Object.create()是将对象继承到原型链上，然后可以通过对象实例的__proto__属性进行访问原型链上的属性
    *
    * {}是JS对象字面量创建的形式，其本质和new Object()并无区别，默认都是继承了Object对象上的prototype
    *
    * 字面量和new关键字创建的对象是Object的实例，原型指向Object.prototype，继承内置对象Object
    * Object.create(arg, pro)创建的对象的原型取决于arg，arg为null，新对象是空对象，没有原型，不继承任何对象；arg为指定对象，新对象的原型指向指定对象，继承指定对象
* */