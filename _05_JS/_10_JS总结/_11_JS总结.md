## Number.isFinite() VS isFinite()
Number.isFinite()检测有穷性的值，唯一和全局isFinite()函数相比，
这个方法不会强制将一个非数值的参数转换成数值，
这就意味着，只有数值类型的值，且是有穷的（finite），才返回 true。

```js
Number.isFinite('0') === isFinite('0');

Number.isFinite(0) === isFinite('0');
```

## toString() VS valueOf()
* {} 的 valueOf 结果为 {} ，toString 的结果为 "[object Object]"
* [] 的 valueOf 结果为 [] ，toString 的结果为 ""

* valueOf()会把数据类型转换成原始类型
* toString()会把数据类型转换成string类型
* 这两个方法在不同使用场景会有不同的优先级：
*   正常情况下，优先调用toString()
*   有运算操作符的情况下valueOf()的优先级高于toString()
*   当调用valueOf()方法无法运算后还是会再调用toString()方法

## Math.min() 为什么比 Math.max() 大？
+ Math.min 的参数是 0 个或者多个。如果是多个参数很容易理解，返回参数中最小的。
+ 如果是0个参数，或者没有参数，则返回 「Infinity」。
+ 而 Math.max() 没有传递参数时返回的是 -Infinity。

## [].concat[1,2,3]
逗号操作符对它的每个操作对象求值（从左至右），然后返回最后一个操作对象的值。

## 字符串连接比三元运算有更高的优先级 

## 函数的名字不可变.

## 高阶函数只是将函数作为参数或返回值的函数
```js
function higherOrderFunction(param,callback){
    return callback(param);
}
```

## JavaScript定义函数的几种方式
+ 1、函数式声明
+ 2、函数表达式（函数字面量）
+ 3、函数构造法
+ 4、箭头函数
+ 5、Generator函数
+ 6、Async函数
