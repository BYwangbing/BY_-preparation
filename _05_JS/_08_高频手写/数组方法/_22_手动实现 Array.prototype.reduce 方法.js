/*
* 与map()的实现 ，filter()的实现中的迭代方法不一样，reduce() 是归并方法
* reduce 接收两个参数：
    第一个参数是在每一项上调用的函数
        该函数接收 4 个参数：前一个值  (累计器) | 当前值 cur | 项的索引 index | 数组对象 array
    第二个可选参数是作为归并基础的初始值
reduce 方法返回一个最终的值
* arr.reduce(function(prev, cur, index, arr){}, initialValue)
* 归并 与之前的迭代不同，归并不是对每一项都执行目标函数，而是可以概括为如下两步：
    不断地对数组的前两项“取出”，对其执行目标函数，计算得到的返回值
    把上述返回值“填回”数组首部，作为新的 array[0]
    持续循环执行这个过程，直到数组中每一项都访问了一次
    返回最终结果
* */
Array.prototype._reduce = function (reduceCallback, thisValue) {
    if (!Array.isArray(this) || typeof reduceCallback !== 'function' || !this.length) {
        return [];
    }
    // 如果没有将initialValue传递给该函数，我们将使用第一个数组项作为initialValue
    let hasInitialValue = (initialValue !== undefined);
    let value = hasInitialValue ? initialValue : this[0];
    // 如果有传递 initialValue，则索引从 1 开始，否则从 0 开始
    for (let i = hasInitialValue ? 1 : 0; i < this.length; i++) {
        value = reduceCallback(value, this[i], i, this);
    }
    return value;
}
