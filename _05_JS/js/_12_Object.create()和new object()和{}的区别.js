/*
使用Object.create()是将对象继承到__proto__属性上
 */
/*创建对象的方式不同*/
// new Object() 方式创建
let a = {rep: 'apple'};
let b = new Object(a);
console.log(b);
console.log(b.__proto__);
console.log(b.rep);
// Object.create() 方式创建
let c = {rep: 'apple'};
let d = Object.create(a);
console.log(d);
console.log(d.__proto__);
console.log(d.rep);
/*
Object.create()方法创建的对象时，属性是在原型下面的，也可以直接访问 d.rep // {rep: "apple"} ,
此时这个值不是吧b自身的，是它通过原型链proto来访问到b的值。
 */
/*创建对象属性的性质不同*/
// 创建一个以另一个空对象为原型,且拥有一个属性p的对象
let o = Object.create({}, { p: { value: 42 } });

// 省略了的属性特性默认为false,所以属性p是不可写,不可枚举,不可配置的:
o.p = 24;
console.log(o.p);
//42

o.q = 12;
for (let prop in o) {
    console.log(prop)
}
//"q"

console.log(delete o.p);
//false
/*3）创建空对象时不同*/
console.log(new Object());
console.log(Object.create(null));
/*
当用构造函数或对象字面量方法创建空对象时，对象时有原型属性的，即有_proto_;
当用Object.create()方法创建空对象时，对象是没有原型属性的。
 */