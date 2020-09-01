/*
* filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素 | 新数组中的元素是通过检查指定数组中符合条件的所有元素
* 注意： filter() 不会对空数组进行检测。
         filter() 不会改变原始数组。
* */
Array.prototype._filter = function (filterCallback, thisValue) {
    if (!Array.isArray(this) || typeof filterCallback !== 'function' || !this.length) {
        return [];
    }
    let arr = thisValue || this;
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (filterCallback.call(this, this[i], i, arr)) {
            result.push(this[i]);
        }
    }
    return result;
};

function filter(array, filterCallback) {
    if (!Array.isArray(array) || typeof filterCallback !== 'function' || !array.length) {
        return [];
    }
    let result = [];
    for (let i = 0; i < array.length; i++) {
        // 检查 filterCallback 的返回值是否是真值
        if (filterCallback.call(array[i], i, array)) {
            // 如果条件为真，则将数组元素 push 到 result 中
            result.push(array[i])
        }
    }
    return result;
}