/*
    浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存
    深拷贝会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象
 */

/*
赋值：引用地址的拷贝。修改赋值后的数据，不管是基本数据类型还是引用数据类型，都会影响到原数据。

浅拷贝：一层拷贝。在浅拷贝中，修改基本数据类型不会影响原有数据的基本数据类型，修改引用数据类型会影响原有的数据类型。

深拷贝：无限层级拷贝。在深拷贝中，修改基本数据类型和引用数据类型都不会影响原有的数据类型。*/

/*
hasOwnProperty
作用：确定某个对象是否具有带指定名称的属性。
语法：object.hasOwnProperty( proName )
参数：
    object ：必传参数，对象的实例，也就是要判断的那个对象。
    proName：必传参数。要判断的这个属性名
返回值： 布尔值。 如果 object 具有带指定名称的属性，则返回 true，否则返回 false。
（此方法不会检查对象原型链中的属性；该属性必须是对象本身的一个成员。
 */
var s = {
    name: 'a',
    other: {
        age: 13,
        like: 10
    }
};

console.log(s.hasOwnProperty('other'));

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
/*
function deepClone(source) {
    let target = {};
    for (let i in source) {
        if (source.hasOwnProperty(i)) {
            if (typeof source[i] === 'object') {
                target[i] = deepClone(source[i])
            }else {
                target[i] = source[i]
            }
        }
    }
}*/
function checkType(x) {
    return Object.prototype.toString.call(x).slice(8,-1);
}
function deepClone(source) {
    let result, target = checkType(source);
    if (target === 'Object'){
        result = {}
    }else if (target === 'Array'){
        result = []
    }else {
        return target
    }
    for (let i in source){
        if (checkType(source[i]) === 'Object' || checkType(source[i]) === 'Array') {
            result[i] = deepClone(source[i])
        }else {
            result[i] = source[i]
        }
    }
    return result
}