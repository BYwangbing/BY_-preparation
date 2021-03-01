> https://juejin.im/post/6844904191610060814

> https://es6.ruanyifeng.com/?tdsourcetag=s_pctim_aiomsg#docs/set-map

- 数组去重和数据存储
- Set 是一种叫做集合的数据结构，Map 是一种叫做字典的数据结构。

## Set

- Set 本身是一个构造函数，用来生成 Set 数据结构。
- Set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。
- Set 对象允许你存储任何类型的值，无论是原始值或者是对象引用。
- 它类似于数组，但是成员的值都是唯一的，没有重复的值。

### Set 中的特殊值

- +0 与 -0 在存储判断唯一性的时候是恒等的，所以不重复
- undefined 与 undefined 是恒等的，所以不重复
- NaN 与 NaN 是不恒等的，但是在 Set 中认为 NaN 与 NaN 相等，所有只能存在一个，不重复。

### Set 的属性：

size：返回集合所包含元素的数量

### Set 实例对象的方法

- add(value)：添加某个值，返回 Set 结构本身(可以链式调用)。
- delete(value)：删除某个值，删除成功返回 true，否则返回 false。
- has(value)：返回一个布尔值，表示该值是否为 Set 的成员。
- clear()：清除所有成员，没有返回值。

### 遍历方法

- keys()：返回键名的遍历器。
- values()：返回键值的遍历器。
- entries()：返回键值对的遍历器。
- forEach()：使用回调函数遍历每个成员。

```js
let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
```

### Array 和 Set 对比

- Array 的 indexOf 方法比 Set 的 has 方法效率低下
- Set 不含有重复值（可以利用这个特性实现对一个数组的去重）
- Set 通过 delete 方法删除某个值，而 Array 只能通过 splice。两者的使用方便程度前者更优
- Array 的很多新方法 map、filter、some、every 等是 Set 没有的（但是通过两者可以互相转换来使用）

### Set 的应用

- 1、Array.from 方法可以将 Set 结构转为数组。

```js
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);
```

- 2、数组去重

```js
// 去除数组的重复成员
[...new Set(array)];
Array.from(new Set(array));
```

- 3、数组的 map 和 filter 方法也可以间接用于 Set

```js
let set = new Set([1, 2, 3]);
set = new Set([...set].map((x) => x * 2));
// 返回Set结构：{2, 4, 6}

let _set = new Set([1, 2, 3, 4, 5]);
set = new Set([..._set].filter((x) => x % 2 === 0));
// 返回Set结构：{2, 4}
```

- 4、实现并集 (Union)、交集 (Intersect) 和差集

```js
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter((x) => b.has(x)));
// set {2, 3}

// 差集
let difference = new Set([...a].filter((x) => !b.has(x)));
// Set {1}
```

## weakSet

WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别:

- WeakSet 的成员只能是对象，而不能是其他类型的值。
  > 若调用 add() 方法时传入了非数组和类似数组的对象的参数，就会抛出错误。
- WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用 可以用来保存 DOM 节点，不容易造成内存泄漏。
  > 也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。
- WeakSet 不可迭代，因此不能被用在 for-of 等循环中
- 不能遍历，方法有 add、delete、has
- WeakSet 没有 size 属性。

## Map

- Map 中存储的是 key-value 形式的键值对, 其中的 key 和 value 可以是任何类型的, 即对象也可以作为 key。
- Map 的出现，就是让各种类型的值都可以当作键。Map 提供的是 “值-值”的对应。

### Map 和 Object 的区别

- Object 对象有原型， 也就是说他有默认的 key 值在对象上面， 除非我们使用 Object.create(null)创建一个没有原型的对象；
- 在 Object 对象中， 只能把 String 和 Symbol 作为 key 值， 但是在 Map 中，key 值可以是任何基本类型(String, Number, Boolean, undefined, NaN….)，或者对象(Map, Set, Object, Function , Symbol , null….);
- Map 元素的顺序遵循插入的顺序，而 Object 的则没有这一特性
- Map 继承自 Object 对象。
- 数据访问: map.get(1) || Object 可以通过 . 和 [ ] 来访问
- 判断某个元素是否在 Map 中可以使用 map.has(1);

### Map 的属性

size: 返回集合所包含元素的数量

### Map 对象的方法

- set(key, val): 向 Map 中添加新元素
- get(key): 通过键值查找特定的数值并返回
- has(key): 判断 Map 对象中是否有 Key 所对应的值，有返回 true，否则返回 false
- delete(key): 通过键值从 Map 中移除对应的数据
- clear(): 将这个 Map 中的所有元素删除

```js
const m = new Map();
const o = { p: 'Hello World' };

m.set(o, 'content');
m.get(o); // "content"

m.has(o); // true
m.delete(o); // true
m.has(o); // false
```

### 遍历方法

- keys()：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回键值对的遍历器
- forEach()：使用回调函数遍历每个成员

### 数据类型转化

- Map 转为数组 比较快速的方法是使用扩展运算符（...）

```js
const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

[...map.keys()];
// [1, 2, 3]

[...map.values()];
// ['one', 'two', 'three']

[...map.entries()];
// [[1,'one'], [2, 'two'], [3, 'three']]

[...map];
// [[1,'one'], [2, 'two'], [3, 'three']]
```

- 数组转为 Map 将数组传入 Map 构造函数，就可以转为 Map。

```js
// Map: map = new Map(arr)
new Map([
  [true, 7],
  [{ foo: 3 }, ['abc']],
]);
// Map {
//   true => 7,
//   Object {foo: 3} => ['abc']
// }
```

- Map 转为对象
- 对象转为 Map

## WeakMap

WeakMap 结构与 Map 结构类似，也是用于生成键值对的集合。 WeakMap 与 Map 的区别有两点:

- WeakMap 只接受对象作为键名（null 除外），不接受其他类型的值作为键名。
- WeakMap 的键名所指向的对象，不计入垃圾回收机制。键名是弱引用，键值可以是任意
- 不能遍历，方法有 get、set、has、delete
