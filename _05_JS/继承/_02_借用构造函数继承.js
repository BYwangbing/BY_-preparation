// 定义父类型构造函数
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 定义子类型构造函数
function Student(name, age, price) {
    // 在子类型构造函数中调用父类型构造
    // 关键：在子类型构造函数中通用call()调用父类型构造函数
    Person.call(this, name, age);   // 相当于: this.Person(name, age)
    this.price = price;
}

let s = new Student('Tom', 12, 1300);
console.log(s instanceof Person);
console.log(s instanceof Student);
console.log(s);