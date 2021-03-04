// https://blog.csdn.net/yjltx1234csdn/article/details/102518866
/* 去重 unique() 方法 */
const unique = (arr) => {
  // return Array.from(new Set(arr))
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};
/* 并集 union() 方法 */
const union = (A, B) => {
  // return new Set([A, B]);
  // 直接将两个数组连接起来，然后去重即可。 连接用 concat() 方法
  return unique(A.concat(B));
};

/* 交集 intersect() 方法 */
const intersect = (A, B) => {
  // return new Set(A.filter((x) => B.includes(x)));
  /*
    交集，需要遍历主的数组，即A数组，然后判断一下 A中的每一个数据，是否在 B数组中。
    如果有的话，就放置在交集集合里面，属于两个集合的共同元素。
  */
};

/* 差集 minus() 方法 */
const minus = (A, B) => {
  // return new Set(A.filter((x) => !B.includes(x)));
};

/*
补集 complement（） 方法 补集=并集-差集
*/

let arrA = [1, 2, 3, 4, 5];

let arrB = [3, 4, 5, 6, 7];

console.log(union(arrA, arrB));
console.log(intersect(arrA, arrB));
console.log(minus(arrA, arrB));

/*

JSON.stringify(obj) === '{}';

JSON.stringify(obj) === '[]'
*/
