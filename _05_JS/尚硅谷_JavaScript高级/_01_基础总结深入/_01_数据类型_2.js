/*
* 1. undefined和null的区别？
*       undefined 定义未赋值
*       null 定义并赋值，只是值为null空值
* 2. 什么时候给变量赋值为null呢?
*       1）.初始赋值，表明要赋值为对象
*       2）.结束前， 让这个对象成为垃圾对象（即被垃圾回收器回收）
*       3）.作为对象的原型链终点
* */
console.log(null == undefined); // true
console.log(null === undefined); // false
/*
     null表示"没有对象"，即该处不应该有值
     undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义
 */
console.log(typeof null);
console.log(typeof undefined);