/*
常见的监听方法
    1. 基于ES5的getter和setter
    2. 脏值检测
    3. ES6的Proxy
 */
/*
在ES5中新增了一个Object.defineProperty，  Object.defineProperty(obj, prop, descriptor)
直接在一个对象上定义一个新属性， 或者修改一个已存在的属性，并返回这个对象
参数
    obj： 要在其上定义属性的对象
    prop： 要定义或修改的属性的名称
    descriptor： 将被定义或修改的属性描述符
缺点：
    Eg：如果id不在user对象中，则不能监听id的变化
    无法监听数组的变化： 数组的这些方法是无法触发set的:push, pop, shift, unshift,splice, sort, reverse.
                        vue中能监听是因为对这些方法进行了重写
    只能监听属性，而不是监听对象本身，需要对对象的每个属性进行遍历。对于原本不在对象中的属性难以监听
 */
let obj = {};
Object.defineProperty(obj, 'data', {
    get: function () {
        return data;
    },
    set: function (newValue) {
        data = newValue;
        console.log('set :', newValue);
        //需要触发的渲染函数写在这...
    }
});
/* 当我们给obj的data赋值的时候，就会触发set 的方法 */
obj.data = 5;

/*
如果要一下子定义多个变量的getter和setter，你可以使用Object.defineProperties(obj,props)
参数
obj: 要在其上定义属性的对象
props: 要定义其可枚举属性或修改的属性描述符的对象
 */
let _obj = {};
Object.defineProperties(_obj, {
    a: {
        configurable: true,　//表示该属性描述符可以被改变（默认为false）
        get: function () {
            console.log('get: ', a);
            return a
        },
        set: function (newValue) {
            a = newValue;
            console.log('set: ', a)
        }
    },
    b: {
        configurable: true,
        get: function () {
            console.log('get: ', b);
            return b;
        },
        set: function (newValue) {
            b = newValue;
            console.log('set: ', b)
        }
    }
});

/*
2. 脏值检测
    脏值检测原理就是比较新值和旧值， 当值真的发生改变时再去更改DOM，目前Angular使用脏值检测
    缺点是如果不注意，每次脏值检测会检测大量的数据， 而很多数据是没有检测的必要的，容易影响性能。
 */

/*
3. ES6的Proxy
类似HTTP中的代理： let p = new Proxy(target, handler);
参数
    target：用Proxy包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
    handler：一个对象，其属性是当执行一个操作时定义代理的行为的函数。
可以监听数组变化 监听的是对象本身
 */
// 示例：当对象中不存在属性名时，缺省返回数为37
let handler = {
    get: function (target, name) {
        return name in target ? target[name] : 37;
    }
};

let p = new Proxy({}, handler);

p.a = 1;
p.b = undefined;

console.log(p.a, p.b);    // 1, undefined

console.log('c' in p, p.c);    // false, 37


// 示例：通过代理，验证向一个对象的传值

let validator = {
    set: function(obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if (value > 200) {
                throw new RangeError('The age seems invalid');
            }
        }
        // The default behavior to store the value
        obj[prop] = value;
    }
};

let person = new Proxy({}, validator);

person.age = 100;

console.log(person.age);
// 100

person.age = 'young';
// 抛出异常: Uncaught TypeError: The age is not an integer

person.age = 300;
// 抛出异常: Uncaught RangeError: The age seems invalid