/*
https://blog.csdn.net/weixin_34162695/article/details/88027751

用Array的reduce方法实现map方法
https://blog.csdn.net/jwz934738949/article/details/108710484


Array的reduce方法适用于对数组中的每两项进行累加处理，最后得到唯一的值
reducer有4个参数：
    1.acc 累加器
    2.cur 当前值
    3.idx 当前索引
    4.src 源数组
map方法是用于对数组中的每一项都分别进行处理，得到一个新的数组
*/

const map = (arr, fn) => {
  return arr.reduce((mappeedArr, ele) => {
    return [...mappeedArr, fn(ele)];
  }, []);
};
const arr = [2, 4, 5, 6];
console.log(map(arr, (n) => n * 2));

//使用 reduce 实现数组 map 方法
const selfMap2 = function (fn, context) {
  let arr = Array.prototype.slice.call(this);
  // 这种实现方法和循环的实现方法有异曲同工之妙，利用reduce contact起数组中每一项
  // 不过这种有个弊端，会跳过稀疏数组中为空的项
  return arr.reduce((pre, cur, index) => {
    return [...pre, fn.call(context, cur, index, this)];
  }, []);
};

Array.prototype.selfMap = selfMap2;
var arr1 = [1, 2, 3];
arr1.length = 5;

let arrMap = arr1.selfMap(function (x) {
  return x * 2;
});
// [2, 4, 6]

// 可以模仿变成filter方法
const filter = (arr, fn) => {
  return arr.reduce((filteredArr, element) => {
    return fn(element) ? [...filteredArr] : [...filteredArr, element];
  }, []);
};
console.log(filter([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)); // [1, 3, 5]

// 扁平化
function flatDeep(arr) {
  return arr.reduce((flattenArray, element) => {
    return Array.isArray(element)
      ? [...flattenArray, ...flatDeep(element)]
      : [...flattenArray, element];
  }, []);
}

console.log(flatDeep([1, 2, 3, [4, [5, 6]], 8, 9]));
