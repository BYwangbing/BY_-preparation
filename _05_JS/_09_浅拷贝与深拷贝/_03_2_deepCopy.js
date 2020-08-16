/*
    没有对参数做检验: 如果传入进来的不是对象或者数组，我们直接返回即可
    通过 typeof 判断是否对象的逻辑不够严谨  typeof null
    没有考虑数组的兼容
 */

// 定义检测数据类型的功能函数
// object.prototype.toString.call()用于判断值的数据类型
function checkType(target) {
    // 检测传入值是什么类型，进行截取返回类型值 eg: 截取字符串[object 到 ] 去掉前后符号
    return Object.prototype.toString.call(target).slice(8, -1);
}

// 实现深度克隆对象或者数组
function deepClone(source) {
    // 判断拷贝的数据类型
    // 初始化变量 result 成为最终数据
    let result, target = checkType(source);
    if (target === 'Object') {
        result = {}
    } else if (target === 'Array') {
        result = []
    } else {
        return target
    }
    // 遍历目标数据
    for (let i in source) {
        // 获取遍历数据结构的每一项值
        // 判断目标结构里的每一项值是否存在对象或者数组
        if (checkType(source[i]) === 'Object' || checkType(source[i]) === 'Array') {
            result[i] = deepClone(source[i])
        } else {
            result[i] = source[i]
        }
    }
    return result
}

const obj1 = [1, 'Hello!', {name: '张'}, [{name: '李',}]];
deepClone(obj1);

const obj2 = deepClone(obj1);
obj2[0] = 2;
obj2[1] = 'Hi!';
obj2[2].name = '小张';
obj2[3][0].name = '小李';

console.log(obj1);

console.log(obj2);
// 递归方法最大的问题在于爆栈，当数据的层次很深是就会栈溢出

/*生成指定深度和每层广度的代码*/
function creatData(deep, breadth) {
    const data = {};
    let target = data;
    for (let i = 0; i < deep.length; i++) {
        target = target['data'] = {};
        for (let j = 0; j < breadth.length; j++) {
            target[j] = j
        }
    }
    return data
}

/*
console.log(creatData(1, 3));
// 1层深度，每层有3个数据 {data: {0: 0, 1: 1, 2: 2}}
console.log(creatData(3, 0));
// 3层深度，每层有0个数据 {data: {data: {data: {}}}}

// 当clone层级很深的话就会栈溢出，但数据的广度不会造成溢出
deepClone(createData(1000));
// ok
deepClone(createData(10000));
// Maximum call stack size exceeded
deepClone(createData(10, 100000));
// ok 广度不会溢出 100000 层广度，没问题，数据遍历需要时间*/

/*循环引用*/
let a = {};
a.a = a;

deepClone(a); // Maximum call stack size exceeded 直接死循环了有没有，/(ㄒoㄒ)/~~
/*
    关于循环引用的问题解决思路有两种，一直是循环检测，一种是暴力破解
*/
