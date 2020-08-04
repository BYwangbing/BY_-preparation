/*
方式2: 借用构造函数继承(假的)
    1. 套路:
          1). 定义父类型构造函数
          2). 定义子类型构造函数
          3). 在子类型构造函数中调用父类型构造
    2. 关键:
        1). 在子类型构造函数中通用call()调用父类型构造函数
 */
function Person(name, age) {
    this.name = name;
    this.age = age;
}
function Student(name, age, price) {
    Person.call(this, name, age);   // 相当于: this.Person(name, age)
    this.price = price;
}
var s = new Student('Tom', 12, 1300);
console.log(s instanceof Person);
console.log(s instanceof Student);
console.log(s);