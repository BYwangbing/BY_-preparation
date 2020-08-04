/*
* 1. 数据类型：
*       Number、String、Boolean、Null、undefined、symbol、bigInt、Object（function、Array、Date）
*       ES6 中新增了一种 Symbol
*           这种类型的对象永不相等，即始创建的时候传入相同的值，可以解决属性名冲突的问题，做为标记
*           谷歌67版本中还出现了一种 bigInt: 是指安全存储、操作大整数
* 2. 判断：
*       typeof    typeof返回数据类型的字符串表达
*           可以判断: undefined / 数值 / 字符串 / 布尔值 / function
*           不能判断: null与object  object与array
*       instanceof      判断对象的具体类型
*       ===             可以判断: undefined, null
* */
// 用 isNaN（） 检测是否是非数值型

let a;
console.log(a, typeof a, typeof a === 'undefined', a === undefined);  // undefined 'undefined' true true
console.log(undefined === 'undefined');
console.log('-----------------------------------');
//2. 对象
let b1 = {
    b2: [1, 'abc', console.log],
    b3: function () {
        console.log('b3');
        return function () {
            return 'Shmily'
        }
    }
};
console.log(typeof b1.b2, '-------------');
console.log(b1.b3 instanceof Array);
console.log(typeof b1.b2, typeof b1.b3, typeof b1.b3 === "function");
console.log(typeof b1.b2[2]);
b1.b2[2](4);
console.log(b1.b3()());

console.log('-----------------------------------');
function Person(name, age) {
    this.name = name;
    this.age = age
}
let p = new Person();    //  new 函数产生的对象, 称为实例对象, 简称为对象

// JS如何区分Object与Aarry的六种方法
// 方法一：利用toString方法
// 方法二：通过isArray：
// 方法三：通过instanceof运算符来判断，
// 利用构造函数constructor
var obj = {'k':'v'};
var t1 = new Array(1);
var t2 = t1;
console.log(obj.constructor === Array);
console.log(t1.constructor === Array);
console.log(t2.constructor === Array);
// 使用typeof(对象)+类型名结合判断：
function isArrayFour(arr){
    if(typeof(arr)==="object"){
        if(arr.concat){
            return "This is Array";
        }else{
            return "This Not Array";
        }
    }
}
var arr = [1];
// var obj = {'k':'v'};
console.log(typeof(arr));
console.log(typeof(obj));
console.log(isArrayFour(arr));
console.log(isArrayFour(obj));