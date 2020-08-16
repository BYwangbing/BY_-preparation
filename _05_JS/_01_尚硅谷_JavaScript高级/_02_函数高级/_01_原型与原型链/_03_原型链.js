/*
1. 原型链(图解)
    * 访问一个对象的属性时，
        * 先在自身属性中查找，找到返回
        * 如果没有, 再沿着__proto__这条链向上查找, 找到返回
        * 如果最终没找到, 返回undefined
    * 别名: 隐式原型链
    * 作用: 查找对象的属性(方法)
2. 构造函数/原型/实体对象的关系(图解)
3. 构造函数/原型/实体对象的关系2(图解)
 */
console.log(Object.prototype.__proto__);

function Fun() {
    this.test1 = function () {
        console.log('test1()');
    }
}

console.log(Fun.prototype);
Fun.prototype.test2 = function () {
    console.log('test2()');
};

let fun = new Fun();

fun.test1();
fun.test2();
console.log(fun.toString());

// fun.test3(); // TypeError: fun.test3 is not a function

/*
1. 函数的显示原型指向的对象默认是空Object实例对象(但Object不满足)
 */
console.log(Fun.prototype instanceof Object);
console.log(Object.prototype instanceof Object, Object.prototype instanceof Function);
console.log(Function.prototype instanceof Object);

/*
2. 所有函数都是Function的实例(包含Function)
 */
console.log(Function.prototype === Function.__proto__);
/*
3. Object的原型对象是原型链尽头
 */
console.log(Object.prototype.__proto__); // null