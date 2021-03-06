https://blog.csdn.net/zl_best/article/details/94447018

https://segmentfault.com/a/1190000014495089

> 在使用它之前需要引入 babel 模块 transform-decorators-legacy 编译成 ES5 或 ES6。

Decorator 是 ES7 的一个新语法 正如其“装饰器”的叫法所表达的:
通过添加`@方法名`可以对一些对象进行装饰包装然后返回一个被包装过的对象，可以装饰的对象包括：类，属性，方法等。
依赖于 ES5 的 Object.defineProperty 方法

## 类的装饰

当装饰的对象是类时，我们操作的就是这个类本身，即装饰器函数的第一个参数，就是所要装饰的目标类。
示例：添加一个日志装饰器

```js
@log
class MyClass {}

function log(target) {
  // 这个 target 在这里就是 MyClass 这个类
  target.prototype.logger = () => `${target.name} 被调用`;
}

const test = new MyClass();
test.logger(); // MyClass 被调用
```

由于装饰器是表达式，我们也可以在装饰器后面再添加个参数：

```js
@log('hi')
class MyClass {}

function log(text) {
  return function (target) {
    target.prototype.logger = () => `${text}，${target.name} 被调用`;
  };
}

const test = new MyClass();
test.logger(); // hello，MyClass 被调用
```

装饰器对类的行为的改变，是代码编译时发生的，而不是在运行时
装饰器能在编译阶段运行代码。也就是说，装饰器本质就是编译时执行的函数。

## 属性或方法的装饰

对于类属性或方法的装饰本质是操作其描述符，可以把此时的装饰器理解成是 Object.defineProperty(obj, prop, descriptor)的语法糖。
