/*
* find() 方法返回通过测试（函数内判断）的数组的第一个元素的值。
* find() 方法为数组中的每个元素都调用一次函数执行：
* 当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数。
* 如果没有符合条件的元素返回 undefined
* array.find(function(currentValue, index, arr),thisValue)
* */
Array.prototype._find = function (findCallback, thisValue) {
    if (!Array.isArray(this) || typeof findCallback !== 'function' || !this.length) {
        return [];
    }
    let arr = thisValue || this;
    for (let i = 0; i < this.length; i++) {
        let result = findCallback.call(this, this[i], i, arr);
        if (result) {
            return this[i];
        }
    }
    return undefined;
};