/*浅拷贝 + 递归*/
function _deepCopy(source) {
    let target = new obj.constructor;
    for (let item in source) {
        if (source.hasOwnProperty(item)) {
            if (typeof source[item] === 'object') {
                target[item] = _deepCopy(source[item])
            } else {
                target[item] = source[item]
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
// object.prototype.toString.call()用于判断值的数据类型
function checkType(target) {
    // 截取字符串[object 到 ] 去掉前后符号
    return Object.prototype.toString.call(target).slice(8, -1);
}

function deepCopy(source) {
    // 判断拷贝的数据类型
    let result, target = checkType(source);
    // 初始化变量 result 成为最终数据
    if (target === 'Object') {
        result = {}
    } else if (target === 'Array') {
        result = []
    } else {
        return result;
    }
    // 遍历目标数据
    for (let item in source) {
        if (checkType(source[item]) === 'Object' || checkType(source[item]) === 'Array') {
            result[item] = deepCopy(source[item])
        } else {
            result[item] = source(item)
        }
    }
    return result;
}

/*
JSON.stringify()：将对象转成 JSON 字符串
JSON.parse()：将字符串解析成对象

通过 JSON.parse(JSON.stringify()) 将 JavaScript 对象转序列化（转换成 JSON 字符串），
再将其还原成 JavaScript 对象，一去一来我们就产生了一个新的对象，而且对象会开辟新的栈，从而实现深拷贝。
*/

// lodash 深拷贝
let lodash = require('lodash');

/**
 * @name jQuery深拷贝
 * @description $.extend(deep, target, object1, object2...)
 * @param {Boolean} deep 可选 true 或者 false，默认是 false，所以一般如果需要填写，最好是 true。
 * @param {Object} target 需要存放的位置
 * @param {Object} object 可以有 n 个原数据
 */