// 定义检测数据类型的功能函数
const checkedType = (target) => {
    // 检测传入值是什么类型，进行截取返回类型值
    console.log(Object.prototype.toString.call(target));
    return Object.prototype.toString.call(target).slice(8, -1);
}

// 实现深度克隆对象或者数组
const deepClone = (target) => {
    // 判断拷贝的数据类型
    // 初始化变量 result 成为最终数据
    let result, targetType = checkedType(target);
    if (targetType === 'Object') {
        result = {};
    } else if (targetType === 'Array') {
        result = [];
    } else {
        return target;
    }

    // 遍历目标数据
    for (let i in target) {
        // 获取遍历数据结构的每一项值
        let value = target[i];
        // 判断目标结构里的每一项值是否存在对象或者数组
        if (checkedType(value) === 'Object' || checkedType(value) === 'Array') {
            // 如果对象或者数组中还嵌套了对象或者数组，那么继续遍历
            result[i] = deepClone(value);
        } else {
            result[i] = value;
        }
    }
    // 返回最终值
    return result;
}

const obj1 = [1, 'Hello!', {name: '张'}, [{name: '李',}],];
const obj2 = deepClone(obj1);
obj2[0] = 2;
obj2[1] = 'Hi!';
obj2[2].name = '小张';
obj2[3][0].name = '小李';

console.log(obj1);

console.log(obj2);

// 一、

// 方式一：typeof：无法判断 null 或者 new String() 等数据类型。

// 方式二：instanceof：无法判断 'zhang'、123 等数据类型。

// 方式三：constructor：判断 null 和 undefined 会直接报错。

// 方式四：Object.prototype.toString.call()：稳健地判断 JavaScript 数据类型方式，
// 可以符合预期的判断基本数据类型 String、Undefined 等，也可以判断 Array、Object 这些引用数据类型。

// 然后，我们通过方法 targetType() 中的 Object.prototype.toString.call()，
// 判断传入的数据类型属于那种，从而改变 result 的值为 {}、[] 或者直接返回传入的值（return target）。

// 最后，我们再通过 for...in 判断 target 的所有元素，如果属于 {} 或者 []，那么就递归再进行 clone() 操作；
// 如果是基本数据类型，则直接传递到数组中……从而在最后返回一个深拷贝的数据。

// 死循环

// const obj3 = {};
// obj3.a = obj3;
// console.log(deepClone(obj3));

// 爆栈

// 检测深度和广度

// const createData = (deep, breadth) => {
//     const data = {};
//     let temp = data;

//     for (let i = 0; i < deep; i++) {
//       temp = temp['data'] = {};
//       for (let j = 0; j < breadth; j++) {
//         temp[j] = j;
//       }
//     }

//     return data;
//   };

// console.log(createData(1, 3));
// // 1 层深度，每层有 3 个数据 { data: { '0': 0, '1': 1, '2': 2 } }

// console.log(createData(3, 0));
// // 3 层深度，每层有 0 个数据 { data: { data: { data: {} } } }

// console.log(deepClone(createData(1000)));
// // 1000 层深度，无压力 { data: { data: { data: [Object] } } }

// console.log(deepClone(createData(10, 100000)));
// // 100000 层广度，没问题，数据遍历需要时间

// console.log(deepClone(createData(10000)));
// // 10000 层深度，直接爆栈：Maximum call stack size exceeded

