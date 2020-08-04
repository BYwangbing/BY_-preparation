/*
Set 类似于数组，但是成员的值都是唯一的，没有重复的值
Set本身是一个构造函数，用来生成 Set 数据结构。
 */
let s = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
for (let i of s) {
    console.log(i);
}
/* 通过add()方法向 Set 结构加入成员，结果表明 Set 结构不会添加重复的值 */
// 例一
const set = new Set([1, 2, 3, 4, 4]);
console.log([...set]);
// [1, 2, 3, 4]
// 例二
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(items.size); // 5

/*
// 例三
const _set = new Set(document.querySelectorAll('div'));
console.log(_set.size); // 56*/

// 去除数组的重复成员
console.log([...new Set([1, 2, '2', 3, 4, 2, 1, NaN, NaN, {}, {}])]);

// 去除字符串里面的重复字符
console.log([...new Set('abacus')].join(''));

// 向 Set 加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值
/*
    Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，它类似于精确相等运算符（===）
    主要的区别是向 Set 加入值时认为NaN等于自身，而精确相等运算符认为NaN不等于自身
 */
/*两个NaN是相等的*/
let setN = new Set();
let a = NaN;
let b = NaN;
setN.add(a);
setN.add(b);
console.log(setN); // Set {NaN}
/*两个对象总是不相等的*/
let set1 = new Set();
set1.add({});
console.log(set1.size); // 1
set1.add({});
console.log(set1.size); // 2

/*
操作方法：
    Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
    Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
    Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
    Set.prototype.clear()：清除所有成员，没有返回值。
遍历操作： Set的遍历顺序就是插入顺序
    Set.prototype.keys()：返回键名的遍历器
    Set.prototype.values()：返回键值的遍历器
    Set.prototype.entries()：返回键值对的遍历器
    Set.prototype.forEach()：使用回调函数遍历每个成员
 */
console.log('-----------------------------');
let _s = new Set();
_s.add(1).add(2).add(2); // 注意2被加入了两次
console.log(_s.size); // 2
console.log(_s.has(1)); // true
console.log(_s.has(2)); // true
console.log(_s.has(3)); // false
_s.delete(2);
console.log(_s.has(2)); // false
console.log('-----------------------------');
/* Array.from方法可以将 Set 结构转为数组 */
const _items = new Set([1, 2, 3, 4, 5, {}, {}]);
const array = Array.from(_items);
console.log(array);
console.log(_items);
console.log(..._items);

/* 去除数组重复成员的另一种方法 */
function dedupe(array) {
    return Array.from(new Set(array));
}

console.log(dedupe([1, 1, 2, 3])); // [1, 2, 3]

console.log('----------------------------------');

let opsSet = new Set(['red', 'green', 'blue']);

for (let item of opsSet.keys()) {
    console.log(item);
}
// red
// green
// blue

for (let item of opsSet.values()) {
    console.log(item);
}
// red
// green
// blue

for (let item of opsSet.entries()) {
    console.log(item);
}

/* Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的values方法 */
for (let item of opsSet) {
    console.log(item);
}
console.log('----------------------------------');
let forEachSet = new Set([1, 4, 9]);
forEachSet.forEach((value, key) => console.log(key + ' : ' + value));

/*
扩展运算符（...）内部使用for...of循环，所以也可以用于 Set 结构
扩展运算符和 Set 结构相结合，就可以去除数组的重复成员
数组的map和filter方法也可以间接用于 Set

let set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x * 2));
// 返回Set结构：{2, 4, 6}

let set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter(x => (x % 2) == 0));
// 返回Set结构：{2, 4}

Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）
*/
let _a = new Set([1, 2, 3]);
let _b = new Set([4, 3, 2]);

// 并集
let union = new Set([..._a, ..._b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([..._a].filter(x => _b.has(x)));
// set {2, 3}

// 差集
let difference = new Set([..._a].filter(x => !_b.has(x)));
// Set {1}

let j = new Set([..._a].filter(x => {
    console.log(_b.has(x));
    return _b.has(x)
}));
console.log(j);

console.log('-----------------------');
/*
如果想在遍历操作中，同步改变原来的 Set 结构，目前没有直接的方法，但有两种变通方法。
一种是利用原 Set 结构映射出一个新的结构，然后赋值给原来的 Set 结构；
另一种是利用Array.from方法。
 */

/*
WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。

首先，WeakSet 的成员只能是对象，而不能是其他类型的值。
其次，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用
 */

const w = [[1, 2], [3, 4]];
const ws = new WeakSet(w);
// WeakSet {[1, 2], [3, 4]}
/*
a的成员会自动成为 WeakSet 的成员
注意，是a数组的成员成为 WeakSet 的成员，而不是a数组本身。这意味着，数组的成员只能是对象。
 */

/*
WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。
WeakSet 没有size属性，没有办法遍历它的成员。
 */

console.log('--------------Map--------------');
const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content');
console.log(m.get(o)); // "content"

console.log(m.has(o)); // true
console.log(m.delete(o)); // true
console.log(m.has(o)); // false

/*
如果对同一个键多次赋值，后面的值将覆盖前面的值。
 */
const map = new Map();

map.set(1, 'aaa').set(1, 'bbb');

console.log(map.get(1)); // "bbb"

/*由上可知，Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键*/
/*

const map = new Map();

map.set(['a'], 555);
map.get(['a']) // undefined
------------------------------------------------------
const map = new Map();

const k1 = ['a'];
const k2 = ['a'];

map
.set(k1, 111)
.set(k2, 222);

map.get(k1) // 111
map.get(k2) // 222
 */

/*实例的属性和操作方法*/
/*
size属性返回 Map 结构的成员总数
Map.prototype.set(key, value)
    set方法设置键名key对应的键值为value，然后返回整个 Map 结构。
    如果key已经有值，则键值会被更新，否则就新生成该键。
    set方法返回的是当前的Map对象，因此可以采用链式写法。
Map.prototype.get(key)
    get方法读取key对应的键值，如果找不到key，返回undefined。
Map.prototype.has(key)
    has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
Map.prototype.delete(key)
    delete方法删除某个键，返回true。如果删除失败，返回false。
Map.prototype.clear()
    clear方法清除所有成员，没有返回值。



    Map.prototype.keys()：返回键名的遍历器。
    Map.prototype.values()：返回键值的遍历器。
    Map.prototype.entries()：返回所有成员的遍历器。
    Map.prototype.forEach()：遍历 Map 的所有成员。

    Map 的遍历顺序就是插入顺序

    const map = new Map([
  ['F', 'no'],
  ['T',  'yes'],
]);

for (let key of map.keys()) {
  console.log(key);
}
// "F"
// "T"

for (let value of map.values()) {
  console.log(value);
}
// "no"
// "yes"

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
// "F" "no"
// "T" "yes"

// 或者
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"

// 等同于使用map.entries()
for (let [key, value] of map) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"
    Map 结构的默认遍历器接口（Symbol.iterator属性），就是entries方法。

    Map 结构转为数组结构，比较快速的方法是使用扩展运算符（...）。
    onst map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

[...map.keys()]
// [1, 2, 3]

[...map.values()]
// ['one', 'two', 'three']

[...map.entries()]
// [[1,'one'], [2, 'two'], [3, 'three']]

[...map]
// [[1,'one'], [2, 'two'], [3, 'three']]
 */
/*
与其他数据结构的互相转换
（1）Map 转为数组
    前面已经提过，Map 转为数组最方便的方法，就是使用扩展运算符（...）。
（2）数组 转为 Map
    将数组传入 Map 构造函数，就可以转为 Map。
 */