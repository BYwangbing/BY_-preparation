function shallowCopy(obj) {
  let data = {};
  for (let prop in obj) {
    if (obj.hasOwnProperty(obj[prop])) {
      data[prop] = obj[prop];
    }
  }
  return data;
}

// 展开运算符： ...obj
// contact
// slice
// Object.assign()

/*浅拷贝+递归*/
function _deepCopy(source) {
  let target = {};
  for (let prop in source) {
    if (source.hasOwnProperty(source[prop])) {
      if (typeof source[prop] === 'object') {
        target[prop] = _deepCopy(source[prop]);
      } else {
        target[prop] = source[prop];
      }
    }
  }
  return target;
}

/*
    没有对参数做检验: 如果传入进来的不是对象或者数组，我们直接返回即可
    通过 typeof 判断是否对象的逻辑不够严谨  typeof null
    没有考虑数组的兼容
    其实递归方法最大的问题在于爆栈，当数据的层次很深是就会栈溢出
*/

// 定义检测数据类型的功能函数
function checkType(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}

function deepClone(source) {
  // 判断拷贝的数据类型
  let result,
    target = checkType(source);
  // 初始化变量 result 成为最终数据
  if (target === 'Object') {
    result = {};
  } else if (target === 'Array') {
    result = [];
  } else {
    return result;
  }
  // 遍历目标数据
  for (let prop in source) {
    if (
      checkType(source[prop]) === 'Object' ||
      checkType(source[prop]) === 'Array'
    ) {
      result[prop] = deepClone(source[prop]);
    } else {
      result[prop] = source[prop];
    }
  }
  return result;
}
/*
    JSON.stringify()：将对象转成 JSON 字符串
    JSON.parse()：将字符串解析成对象
*/
// lodash 深拷贝 let lodash = require('lodash');
/**
 * @name jQuery深拷贝
 * @description $.extend(deep, target, object1, object2...)
 * @param {Boolean} deep 可选 true 或者 false，默认是 false，所以一般如果需要填写，最好是 true。
 * @param {Object} target 需要存放的位置
 * @param {Object} object 可以有 n 个原数据
 */
