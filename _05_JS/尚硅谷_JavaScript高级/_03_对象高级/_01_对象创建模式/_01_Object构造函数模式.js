/*
方式一: Object构造函数模式
    * 套路: 先创建空Object对象, 再动态添加属性/方法
    * 适用场景: 起始时不确定对象内部数据
    * 问题: 语句太多
 */

/*   一个人: name:"Tom", age: 12   */

// 先创建空Object对象
var p = new Object();
p = {}; //此时内部数据是不确定的
// 再动态添加属性/方法
p.name = 'Tom';
p.age = 12;
p.setName = function (name) {
    this.name = name
};
//测试
console.log(p.name, p.age);
p.setName('Bob')
console.log(p.name, p.age);