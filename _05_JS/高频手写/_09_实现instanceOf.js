// L 表示左表达式，R 表示右表达式
// A instanceof B
function instance_of(A, B) {
    let R = B.prototype; // 取 R 的显示原型
    A = A.__proto__;// 取 L 的隐式原型
    // A的  __proto__  是不是强等于 B.prototype，不等于再找  A.__proto__ .__proto__  直到 __proto__ 为 null
    while (true) {
        if (A === null) return false;
        if (R === A) return true;
        A = A.__proto__;
    }
}
let a = [];
console.log(instance_of(a, Array)); // true