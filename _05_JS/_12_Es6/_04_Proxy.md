>https://es6.ruanyifeng.com/?tdsourcetag=s_pctim_aiomsg#docs/proxy

+ ` get(target, propKey, receiver)`：拦截对象属性的读取，比如`proxy.foo`和proxy`['foo']`。
    + 目标对象、属性名和 proxy 实例本身（严格地说，是操作行为所针对的对象），其中最后一个参数可选。
```js
var person = {
  name: "张三"
};

var proxy = new Proxy(person, {
  get: function(target, propKey) {
    if (propKey in target) {
      return target[propKey];
    } else {
      throw new ReferenceError("Prop name \"" + propKey + "\" does not exist.");
    }
  }
});

proxy.name; // "张三"
proxy.age; // 抛出一个错误
```
上面代码表示，如果访问目标对象不存在的属性，会抛出一个错误。如果没有这个拦截函数，访问不存在的属性，只会返回undefined。



+ `set(target, propKey, value, receiver)`：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
+ `has(target, propKey)`：拦截`propKey in proxy`的操作，返回一个布尔值。
+` deleteProperty(target, propKey)`：拦截`delete proxy[propKey]`的操作，返回一个布尔值。
+ `ownKeys(target)`：拦截`Object.getOwnPropertyNames(proxy)`、`Object.getOwnPropertySymbols(proxy)`、`Object.keys(proxy)`、`for...in`循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
+ `getOwnPropertyDescriptor(target, propKey)`：拦截`Object.getOwnPropertyDescriptor(proxy, propKey)`，返回属性的描述对象。
+ `defineProperty(target, propKey, propDesc)`：拦截`Object.defineProperty(proxy, propKey, propDesc）`、`Object.defineProperties(proxy, propDescs)`，返回一个布尔值。
+ `preventExtensions(target)`：拦截`Object.preventExtensions(proxy)`，返回一个布尔值。
+ `getPrototypeOf(target)`：拦截`Object.getPrototypeOf(proxy)`，返回一个对象。
+ `isExtensible(target)`：拦截`Object.isExtensible(proxy)`，返回一个布尔值。
+ `setPrototypeOf(target, proto)`：拦截`Object.setPrototypeOf(proxy, proto)`，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
+ `apply(target, object, args)`：拦截 Proxy 实例作为函数调用的操作，比如`proxy(...args)`、`proxy.call(object, ...args)`、`proxy.apply(...)`。
+ `construct(target, args)`：拦截 Proxy 实例作为构造函数调用的操作，比如`new proxy(...args)`。