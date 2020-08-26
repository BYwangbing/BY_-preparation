/*
* 1. undefined和null的区别？
*       undefined 定义未赋值               使用typeof运算得到 “undefined”
*       null 定义并赋值，只是值为null空值  使用typeof运算得到 “object”
* 2. 什么时候给变量赋值为null呢?
*       1）.初始赋值，表明要赋值为对象
*       2）.结束前， 让这个对象成为垃圾对象（即被垃圾回收器回收）
*       3）.作为对象的原型链终点
* 1）定义了形参，没有传实参，显示undefined
* 变量被声明了，但没有赋值时，就等于undefined。
* 2）对象属性名不存在时，显示undefined
* 3）函数没有写返回值，即没有写return，拿到的是undefined
* 4）写了return，但没有赋值，拿到的是undefined
* */
console.log(null == undefined); // true
console.log(null === undefined); // false
/*
     null表示"没有对象"，即该处不应该有值
     undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义
 */
console.log(typeof null);
console.log(typeof undefined);

/*
* null和undefined转换成number数据类型
* null 默认转成 0
* undefined 默认转成 NaN
* */