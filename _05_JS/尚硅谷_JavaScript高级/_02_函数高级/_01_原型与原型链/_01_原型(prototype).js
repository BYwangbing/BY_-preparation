/*
1. 函数的prototype属性
    * 每个函数都有一个prototype属性, 它默认指向一个Object空对象(即称为: 原型对象)
    * 原型对象中有一个属性constructor, 它指向函数对象
2. 给原型对象添加属性(一般都是方法)
    * 作用：函数的所有实例对象自动拥有原型中的属性(方法)
 */
// 每个函数都有一个prototype属性, 它默认指向一个Object空对象(即称为: 原型对象)
console.log(Date.prototype, typeof Date.prototype);

function Fun() {

}

console.log(Fun.prototype);

// 原型对象中有一个属性constructor, 它指向函数对象
console.log(Date.prototype.constructor === Date);
console.log(Fun.prototype.constructor === Fun);

Fun.prototype.test = function () {
    console.log('王福坤坤大坏蛋');
};

let fun = new Fun();
fun.test();