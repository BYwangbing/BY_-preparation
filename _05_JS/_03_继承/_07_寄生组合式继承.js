function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}
Person.prototype.getSex = function () {
    console.log(this.sex);
};
function Student(name, age, sex, _class) {
    Person.call(this, name, age, sex);
    this._class = _class;
}
// Object.creat(obj): 创建一个空对象 让空对象的__proto__指向obj
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.getClass = function () {
    console.log(this._class);
};