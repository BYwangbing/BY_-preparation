console.log('---------------排序---------------');
const arr = [1, 3, 10, 4, 2];
arr.sort();
console.log(arr);   //1,10,2,3,4
/*
sort()排序是按照字符串的Unicode码
 */
const _arr = [1, 3, 10, 4, 2];

function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0
    }
}

_arr.sort(compare);
console.log(_arr);   //1,2,3,4,10
/*
sort()方法在接受到函数返回的-1时，就做出按照升序的原理不换位置
 */

const _arr1 = [1, 3, 10, 4, 2, 5];

function _compare(value1, value2) {
    console.log(value1, value2);
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0
    }
}

_arr1.sort(_compare);
console.log(_arr1);   //1,2,3,4,10

function sortNumber(a, b) {
    return a - b;
}

console.log([1, 100, 12, 6, 60].sort());
console.log([1, 100, 12, 6, 60].sort(sortNumber));

console.log('---------------最大值---------------');
Math.max(...[1, 2, 3, 4]);
Math.max.apply(this, [1, 2, 3, 4]);
/*
Math.max()是Math对象内置的方法,参数是字符串;
reduce是ES5的数组api,参数有函数和默认初始值;
函数有四个参数,pre(上一次的返回值),cur(当前值),curIndex(当前值索引),arr(当前数组)
 */
[1, 2, 3, 4].reduce((prev, cur, curIndex, arr) => {
    return Math.max(prev, cur);
}, 0); //4
console.log('---------------求和---------------');

[1, 2, 3, 4].reduce((prev, cur) => {
    return prev + cur;
}, 0); //10
// 开始篇
/*利用slice截取改变数组,再利用递归求和*/
function sum(array) {
    let length = array.length;
    if (length === 0) {
        return 0;
    } else if (length === 1) {
        return array[0];
    } else {
        return array[0] + sum(array.slice(1));
    }
}

console.log('---------------合并---------------');
console.log([1, 2, 3, 4].concat([5, 6])); // [1,2,3,4,5,6]
console.log([...[1, 2, 3, 4], ...[4, 5]]);// [1,2,3,4,5,6]
let arrA = [1, 2], arrB = [3, 4];
Array.prototype.push.apply(arrA, arrB);// arrA值为[1,2,3,4]
console.log(arrA);
console.log('---------------判断是否包含值---------------');

console.log([1, 2, 3].includes(4)); // false

console.log([1, 2, 3].indexOf(4)); // -1 如果存在换回索引
let arr1 = [1, 2, 3];
arr1.find((item) => item === 3);
//3 如果数组中无值返回undefined
arr1.findIndex((item) => item === 3); //2 如果数组中无值返回-1

/*includes(),find(),findIndex()是ES6的api*/

arr1.some(item => item === 3); //true 如果不包含返回false

console.log('---------------类数组转化---------------');
/*
Array.prototype.slice.call(arguments) //arguments是类数组(伪数组)
Array.prototype.slice.apply(arguments)
Array.from(arguments)
[...arguments]
*/
/*
类数组:表示有length属性,但是不具备数组的方法
call,apply:是改变slice里面的this指向arguments,所以arguments也可调用数组的方法
Array.from是将类似数组或可迭代对象创建为数组
...是将类数组扩展为字符串,再定义为数组
 */
console.log('---------------每一项设置值---------------');
arr1.fill(false); //[false,false,false]
console.log(arr1);
console.log('---------------对象和数组转化---------------');
Object.keys({name:'张三',age:14}); //['name','age']
Object.values({name:'张三',age:14}); //['张三',14]
Object.entries({name:'张三',age:14}); //[[name,'张三'],[age,14]]
Object.fromEntries([name,'张三'],[age,14]); //ES10的api,Chrome不支持 , firebox输出{name:'张三',age:14}

[{count: 1}, {count: 2}, {count: 3}].reduce((p, e) => p + (e.count), 0);



