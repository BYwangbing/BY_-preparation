/* 一、利用ES6 Set去重（ES6中最常用） */
let arr = [
  1,
  1,
  'true',
  'true',
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  'NaN',
  0,
  0,
  'a',
  'a',
  {},
  {},
];
console.log([...new Set(arr)]);

function unique_1(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error!');
    return;
  }
  return Array.from(new Set(arr));
}

let arr1 = [
  1,
  1,
  'true',
  'true',
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  'NaN',
  0,
  0,
  'a',
  'a',
  {},
  {},
];

console.log(unique_1(arr1)); // 这种方法还无法去掉“{}”空对象

/*  二、利用for嵌套for，然后splice去重（ES5中最常用）  */
// 双层循环，外层循环元素，内层循环时比较值。值相同时，则删去这个值
function unique_2(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error!');
    return;
  }
  for (let i = 0, length = arr.length; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[i] === arr[j]) {
        //第一个等同于第二个，splice方法删除第二个
        arr.splice(j, 1);
        j--;
        length--;
      }
    }
  }
  return arr;
}

let arr2 = [
  1,
  1,
  'true',
  'true',
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  'NaN',
  0,
  0,
  'a',
  'a',
  {},
  {},
];

console.log(unique_2(arr2)); // NaN和{}没有去重，两个null直接消失了

/* 三、利用indexOf去重 */

// 新建一个空的结果数组，for 循环原数组，判断结果数组是否存在当前元素，如果有相同的值则跳过，不相同则push进数组
function unique_3(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error!');
    return;
  }
  let array = [];
  for (let i in arr) {
    if (array.indexOf(arr[i]) === -1) {
      array.push(arr[i]);
    }
  }
  return array;
}

let arr3 = [
  1,
  1,
  'true',
  'true',
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  'NaN',
  0,
  0,
  'a',
  'a',
  {},
  {},
];

console.log(unique_3(arr3)); // NaN、{}没有去重

/* 四、利用sort() */

// 利用sort()排序方法，然后根据排序后的结果进行遍历及相邻元素比对
function unique_4(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error!');
    return;
  }
  arr = arr.sort();
  let array = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      array.push(arr[i]);
    }
  }
  return array;
}

let arr4 = [
  1,
  1,
  'true',
  'true',
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  'NaN',
  0,
  0,
  'a',
  'a',
  {},
  {},
];
console.log(unique_4(arr4)); // NaN、{}没有去重

/*五、利用对象的属性不能相同的特点进行去重（这种数组去重的方法有问题，不建议用，有待改进）*/
function unique_5(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error!');
    return;
  }
}

/* 六、利用includes */
function unique_6(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error!');
    return;
  }
  let array = [];
  for (let i in arr) {
    if (!array.includes(arr[i])) {
      // includes 检测数组是否有某个值
      array.push(arr[i]);
    }
  }
  return array;
}

let arr6 = [
  1,
  1,
  'true',
  'true',
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  'NaN',
  0,
  0,
  'a',
  'a',
  {},
  {},
];
console.log(unique_6(arr6)); // {}没有去重

/* 七、利用hasOwnProperty */

// 利用hasOwnProperty 判断是否存在对象属性
function unique_7(arr) {
  let obj = {};
  return arr.filter((item, index, arr) => {
    return obj.hasOwnProperty(typeof item + item)
      ? false
      : (obj[typeof item + item] = true);
  });
}

let arr7 = [
  1,
  1,
  'true',
  'true',
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  'NaN',
  0,
  0,
  'a',
  'a',
  {},
  {},
];
console.log(unique_7(arr7)); // 所有的都去重了

/* 八、利用filter */
function unique_8(arr) {
  return arr.filter((item, index, arr) => {
    // 当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
    return arr.indexOf(item, 0) === index;
  });
}

let arr8 = [
  1,
  1,
  'true',
  'true',
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  'NaN',
  0,
  0,
  'a',
  'a',
  {},
  {},
];
console.log(unique_8(arr8));

function fn(arr) {
  return arr.filter((item, index, arr) => arr.indexOf(item) === index);
}

function _fn(arr) {
  let obj = {};
  arr.forEach((item) => {
    obj[item] = '';
  });

  return Object.keys(obj);
}
console.log(_fn(arr8));
