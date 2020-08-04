/*
    1. 将要拷贝的数据 obj 以参数的形式传参
    2. 声明一个变量 （ 假如是 data ） 来储存我们拷贝出来的内容
    3. 循环obj 中的每一项，判断 obj 上 有这一项
    4. 将 obj 中的每一个 赋值 给data中的每一项
    5. 最后 将 这个变量 return 出来即可
 */
function shallCopy(obj) {
    let data = {};
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) { // 此方法不会检查对象原型链中的属性；该属性必须是对象本身的一个成员
            data[prop] = obj[prop]
        }
    }
    return data
}

let data = {
    name: "data: 王福坤坤",
    main: {
        m: 1,
        n: 2
    },
    friends: [1, 2, ['html', 'css'], 4],
    fn: function () {

    }
};

let obj = shallCopy(data);
obj.name = "修改的王福坤坤";
obj.main.m = 19;
console.log(obj);
console.log(data);

// 枚举性
let a = [1, 2, 3, 4, 5];
console.log(Object.getOwnPropertyDescriptor(a, 'length'));
// Object.getOwnPropertyDescriptor方法，返回某个对象属性的描述对象（ descriptor ）
/*
{ value: 5, writable: true, enumerable: false, configurable: false }
enumerable: 可枚举性
*/
const _obj = {
    foo: 123,
    get bar() {
        return 'abc'
    }
};
console.log(Object.getOwnPropertyDescriptors(_obj));
// Object.getOwnPropertyDescriptors方法，返回指定对象所有自身属性（非继承属性）的描述对象
/*
{
  foo: { value: 123, writable: true, enumerable: true, configurable: true },
  bar: {
    get: [Function: get bar],
    set: undefined,
    enumerable: true,
    configurable: true
  }
}
 */
