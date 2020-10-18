/*A 表示左表达式，B 表示右表达式
A instanceof B
如果B的显式原型在A的原型链上，返回true*/
function instance_of(A, B) {
    let R = B.prototype; // 取 B 的显示原型
    A = A.__proto__;// 取 A 的隐式原型
    // A的  __proto__  是不是强等于 B.prototype，不等于再找  A.__proto__ .__proto__  直到 __proto__ 为 null
    while (true) {
        if (A === null || A === undefined) return false;
        if (R === A) return true;
        A = A.__proto__;
    }
}
let a = [];
console.log(instance_of(a, Array)); // true