// 直接赋值

const initData = [ 1 , { obj: '123' } ];
const finalData = initData;

finalData[0] = 2;
finalData[1].obj = '456';

console.log(initData);
console.log(finalData);

// 基本数据类型

let str1 = '123';
str2 = str1;
str2 = '456';
console.log(str1); // '123'
console.log(str2); // '456'

// // 引用数据类型

let arr1 = [1, 2, 3];
arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]








// concat()

// 诞生问题  
// let arr = [1, 2, {val: 4}];
// let newArr = arr.slice();
// newArr[2].val = 1000;

// console.log(arr);//[ 1, 2, { val: 1000 } ]
// 这就是浅拷贝的限制所在了。它只能拷贝一层对象。如果有对象的嵌套，那么浅拷贝将无能为力。
// 但幸运的是，深拷贝就是为了解决这个问题而生的，它能 解决无限极的对象嵌套问题，实现彻底


