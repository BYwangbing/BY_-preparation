Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象source复制到目标对象。
它将返回目标对象target。
```js
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source)

target; // { a: 1, b: 4, c: 5 }
returnedTarget; // { a: 1, b: 4, c: 5 }

```
注意：如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。

如果只有一个参数，Object.assign会直接返回该参数。
```js
const obj = {a: 1};

Object.assign(obj); // {a: 1}
Object.assign(obj) === obj // true
```
如果该参数不是对象，则会先转成对象，然后返回。
```js
typeof Object.assign(2) // "object"
```
 由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。
```js
Object.assign(undefined); // 报错
Object.assign(null); // 报错
```
* 如果非对象参数出现在源对象的位置（即非首参数），那么处理规则有所不同。
* 首先，这些参数都会转成对象，如果无法转成对象，就会跳过。
* 这意味着，如果undefined和null不在首参数，就不会报错。
```js
let obj = {a: 1};
Object.assign(obj, undefined) === obj; // true
Object.assign(obj, null) === obj // true

```
* 其他类型的值（即数值、字符串和布尔值）不在首参数，也不会报错。
* 但是，除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果。

```js
const v1 = 'abc';
const v2 = true;
const v3 = 10;

const obj = Object.assign({}, v1, v2, v3);
console.log(obj); // { "0": "a", "1": "b", "2": "c" }

console.log(Object.assign(true));// {[[PrimitiveValue]]: true}
console.log(Object.assign(10));  //  {[[PrimitiveValue]]: 10}
console.log(Object.assign('abc')); // {0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"}
```
Object.assign只能进行值的复制，如果要复制的值是一个取值函数，那么将求值后再复制。
```js
const source = {
    get foo() { return 1 }
};
const target = {};

Object.assign(target, source);
// { foo: 1 }
```
## 注意点
+ （1）浅拷贝 Object.assign方法实行的是浅拷贝
+ （2）同名属性的替换 遇到同名属性，Object.assign的处理方法是替换，而不是添加。
+ （4）取值函数的处理 只能进行值的复制，如果要复制的值是一个取值函数，那么将求值后再复制。

用法
1. 为对象添加属性
2. 为对象添加方法
3. 克隆对象
4. 合并多个对象
5. 为属性指定默认值
