// 定义父类型构造函数
function Supper() {
    this.supProp = 'Supper property'
}

// 给父类型的原型添加方法
Supper.prototype.showSupperProp = function () {
    console.log(this.supProp);
};

// 定义子类型的构造函数
function Sub() {
    this.subProp = 'Sub property'
}

// 继承父类型：子类型的原型为父类型的一个实例对象（关键）
Sub.prototype = new Supper();
// 将子类型原型的构造属性设置为子类型 让子类型的原型的constructor指向子类型

Sub.prototype.constructor = Sub;
// 给子类型的原型添加方法
Sub.prototype.showSubProp = function () {
    console.log(this.subProp);
};

let sub = new Sub();
sub.showSubProp();
sub.showSupperProp();
// 实例的constructor访问对应的构造函数
console.log(sub.constructor);