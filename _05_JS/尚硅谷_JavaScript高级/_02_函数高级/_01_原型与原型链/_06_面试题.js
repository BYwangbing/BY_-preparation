// 测试题一：
function A() {

}

A.prototype.n = 1;

let b = new A();

A.prototype = {
    n: 2,
    m: 3
};

let c = new A();
console.log(b);
console.log(c);
console.log(b.n, b.m, c.n, c.m);

console.log('+++++++++++++++++');

// 测试二：
function F() {
}

Object.prototype.a = function () {
    console.log('a()')
};
Function.prototype.b = function () {
    console.log('b()')
};

let f = new F();
f.a();
// // f.b();
// F.a();
// F.b();
console.log(F);
console.log(f);
console.log(Object.prototype);
// console.log(Function.prototype);