/*
* map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
* map() 方法创建一个新数组，其结果是该数组中的每个元素调用一个提供的函数
* map 方法会给原数组中的每个元素都按顺序调用一次 callback 函数。callback 每次执行后的返回值（包括 undefined）组合起来形成一个新数组
* */
function _map(array, callback) {
    // 首先，检查传递的参数是否正确
    if (!Array.isArray(array) || typeof callback !== 'function' || !array.length) {
        return [];
    }
    let result = [];
    for (let i = 0; i < array.length; i++) {
        // 每次调用此函数时，我们都会创建一个 result 数组
        // 因为我们不想改变原始数组
        result.push(callback(array[i], i, array));
    }
    return result;
}