+ arguments对象是函数中传递的参数值的集合
+ 它是一个类似数组的对象，因为它有一个length属性,但它没有数组中的内置方法
+ 注意:箭头函数中没有arguments对象 使用`...`语法，可以解决这个问题
```js
let args = Array.prototype.slice.call(arguments);
let _args = [].slice.call(arguments);
let args1 = Array.from(arguments);
let args2 = [...arguments];
```