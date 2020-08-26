/*
1.箭头函数语法上比普通函数更加简洁(ES6中每一种函数都可以使用形参赋默认值和剩余运算符)
2.箭头函数没有自己的this，它里的this是继承函数所处上下文中的this ( 使用call/apply等任何方式都无法改变this的指向)
3.箭头函数中没有arguments (类数组)，只能基于...arg获取传递的参数集合(数组)
4.箭头函数不能被new执行(因为:箭头函数没有this也没有prototype)
*/
/*
new 过程发生了什么？
1. 创建空对象；let var obj = {};
2. 设置新对象的constructor属性为构造函数的名称，
    设置新对象的proto属性指向构造函数的prototype对象；
    obj.proto = Fn.prototype;
3. 使用新对象调用函数，函数中的this被指向新实例对象 Fn.call(obj);　　//{}.构造函数();
4. 返回this指针。当存在显示的返回时，返回return后面的内容。新建的空对象作废
*/

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