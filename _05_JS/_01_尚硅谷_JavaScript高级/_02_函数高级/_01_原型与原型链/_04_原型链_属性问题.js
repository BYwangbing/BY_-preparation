/*
1. 读取对象的属性值时: 会自动到原型链中查找
2. 设置对象的属性值时: 不会查找原型链, 如果当前对象中没有此属性, 直接添加此属性并设置其值
3. 方法一般定义在原型中, 属性一般通过构造函数定义在对象本身上
 */
function Fun() {

}

Fun.prototype.name = 'Match';
let fun1 = new Fun();
console.log(fun1.name, fun1);
let fun2 = new Fun();
fun2.name = '王福坤坤';
fun2.age = '23';
console.log(fun1.name, fun1.age, fun2, fun2.name);

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.setName = function (name) {
    this.name = name
};
let p1 = new Person('Tom', 12);
p1.setName('Match');
let p2 = new Person('Jack', 18);
p2.setName('Bob');
console.log(p1);
console.log(p2);
console.log(p1.__proto__ === p2.__proto__);