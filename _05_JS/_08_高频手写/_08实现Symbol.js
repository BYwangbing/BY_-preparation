// 1. Symbol 值通过 Symbol 函数生成，使用 typeof，结果为 "symbol"

/*var sy = Symbol();
console.log(typeof sy); // "symbol"*/

// 2. Symbol 函数前不能使用 new 命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象。

/*// 3. instanceof 的结果为 false
var s = Symbol('foo');
console.log(s instanceof Symbol); // false*/

// 4. Symbol 函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，
// 主要是为了在控制台显示，或者转为字符串时，比较容易区分

/*var s1 = Symbol('foo');
console.log(s1); // Symbol(foo)*/
// 5. 如果 Symbol 的参数是一个对象，就会调用该对象的 toString 方法，
// 将其转为字符串，然后才生成一个 Symbol 值

/*const obj = {
    a: 'abc'
};
const sym = Symbol(obj);
console.log(sym); // Symbol([object Object])*/

/*const _obj = {
    toString() {
        return 'abc';
    }
};
const sym = Symbol(_obj);
console.log(sym); // Symbol(abc)*/

// 6. Symbol 函数的参数只是表示对当前 Symbol 值的描述，相同参数的 Symbol 函数的返回值是不相等的

/*// 没有参数的情况
var s1 = Symbol();
var s2 = Symbol();

console.log(s1 === s2); // false*/

/*// 有参数的情况
var s1 = Symbol('foo');
var s2 = Symbol('foo');

console.log(s1 === s2); // false*/

// 7. Symbol 值不能与其他类型的值进行运算，会报错
/*var symb = Symbol('My symbol');

console.log("your symbol is " + symb); // TypeError: can't convert symbol to string*/

// 8. Symbol 值可以显式转为字符串
/*
var symb = Symbol('My symbol');

console.log(String(symb)); // 'Symbol(My symbol)'
console.log(symb.toString()); // 'Symbol(My symbol)'
*/

// 9. Symbol 值可以作为标识符，用于对象的属性名，可以保证不会出现同名的属性
/*var mySymbol = Symbol();
// 第一种写法
var x = {};
x[mySymbol] = 'Hello!';
// 第二种写法
var y = {
    [mySymbol]: 'Hello!'
};
// 第三种写法
var z = {};
Object.defineProperty(z, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
console.log(y[mySymbol]); // "Hello!"*/

//  10. Symbol 作为属性名，该属性不会出现在 for...in、for...of 循环中，
// 也不会被 Object.keys()、Object.getOwnPropertyNames()、JSON.stringify() 返回。
// 它未被包含在对象自身的属性名集合(property names)之中
// 利用该特性,我们可以把一些不需要对外操作和访问的属性使用Symbol来定义
// 但是，它也不是私有属性，有一个 Object.getOwnPropertySymbols 方法，
// 可以获取指定对象的所有 Symbol 属性名

/*// 使用Object的API
Object.getOwnPropertySymbols(obj); // [Symbol(name)]

// 使用新增的反射API
Reflect.ownKeys(obj); // [Symbol(name), 'age', 'title']*/

/*var obj = {};
var a = Symbol('a');
var b = Symbol('b');
obj[a] = 'Hello';
obj[b] = 'World';
var objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols);// [Symbol(a), Symbol(b)]*/

// 11. 如果我们希望使用同一个 Symbol 值，可以使用 Symbol.for。
// 它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。
// 如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值。

/*var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');

console.log(s1 === s2); // true*/

// 12. Symbol.keyFor 方法返回一个已登记的 Symbol 类型值的 key

/*var s1 = Symbol.for("foo");
console.log(Symbol.keyFor(s1)); // "foo"

var s2 = Symbol("foo");
console.log(Symbol.keyFor(s2) ); // undefined

symbol的应用场景:
场景一：使用Symbol来作为对象属性名(key)
作为对象属性 当一个复杂对象中含有多个属性的时候，很容易将某个属性名覆盖掉，
利用 Symbol 值作为属性名可以很好的避免这一现象 防止属性名称冲突
场景二：使用Symbol来替代常量

应用场景 1-使用Symbol来作为对象属性名(key) 防止属性名称冲突
应用场景 2-使用 Symbol 定义类的私有属性/方法
应用场景 3-模块化机制 达到私有化的效果
应用场景 4-使用Symbol来替代常量
应用场景 5-注册和获取全局的`Symbol`
*/
/*export const after = (fn) => {
    return (...args) => {
        try {
            const data = fn(...args);
            return {code: 200, message: '', data};
        } catch (message) {
            return {code: 500, message, data: null};
        }
    };
};*/

// 输入[1,3,1,3,2]，输出数组中唯一一个只存在一项的值，比如如上就是 2
const one = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result ^ arr[i];
  }
  return result;
};
const three = (arr) => {
  return arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item))[0];
};
const arr = [1, 3, 1, 3, 2];
console.log(three(arr));
console.log(one(arr));
