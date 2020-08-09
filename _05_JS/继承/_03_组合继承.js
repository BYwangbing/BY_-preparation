function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green']
}
SuperType.prototype.sayName = function () {
    console.log(this.name)
};
function SubType(name, job) {
    // 继承属性
    SuperType.call(this, name);
    this.job = job;
}
// 继承方法
SubType.prototype = new SuperType();
// 因重写原型而失去constructor属性，所以要对constructor重新赋值
SubType.prototype.constructor = SuperType;
SubType.prototype.sayJob = function() {
    console.log(this.job)
};
var instance1 = new SubType('Jiang', 'student');
instance1.colors.push('black');
console.log(instance1.colors); //["red", "blue", "green", "black"]
instance1.sayName(); // 'Jiang'
instance1.sayJob(); // 'student'
var instance2 = new SubType('J', 'doctor');
console.log(instance2.colors); // //["red", "blue", "green"]
instance2.sayName(); // 'J'
instance2.sayJob(); // 'doctor'