Function.prototype.a = 'a';
Object.prototype.b = 'b';

// Person函数才是Function对象的一个实例
function Person() {
}

// new Person()返回来的是一个对象，它是Object的一个实例,是没有继承Function的
var p = new Person();

console.log('p.a: ' + p.a); // p.a: undefined
console.log('p.b: ' + p.b); // p.b: b
console.log('Person.a: ' + Person.a); // Person.a: a
// js里面所有对象都是Object的实例 Person函数可以访问到Object原型里面的属性
console.log('Person.b: ' + Person.b); // Person.a: b

console.log(p.__proto__ === Person.prototype);
console.log(Person.prototype.__proto__ === Object.prototype);
console.log(p.__proto__.____proto__ === Object.prototype);


/*
* 每个对象都具有一个名为__proto__的属性
* 每个构造函数都具有一个名为prototype的方法 ，所以prototype同样带有__proto__属性
* 首先Object和Function都是构造函数，而所有的构造函数的都是Function的实例对象. 因此Object是Function的实例对象
* Function.prototype是Object的实例对象
* 当我们访问一个属性值的时候, 它会沿着原型链向上查找, 直到找到或者到Object.prototype.__proto__(为null)截止.
* */

/*Object和Function都是构造函数，而所有的构造函数的都是Function的实例对象
Function.prototype是Object的实例对象
实例对象的原型会指向其构造函数的prototype属性*/
console.log(Object.__proto__ === Function.prototype);
console.log(Function.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);


var foo = {},
    F = function () {
    };

Object.prototype.a = 'value a';
Function.prototype.b = 'value b';

console.log(foo.a);    // value a
console.log(foo.b);    // undefined
console.log(F.a);      // value a
console.log(F.b);      // value b