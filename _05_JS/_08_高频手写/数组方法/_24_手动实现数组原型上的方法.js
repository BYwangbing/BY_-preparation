/*删除数组的最后一个元素，减少数组长度 返回删除的值*/
Array.prototype.pop = function () {
    let result = this[this.length - 1];
    this.length--;
    return result;
};
/*将参数加载到数组的最后， 返回新数组的长度*/
Array.prototype.push = function () {
    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }
    return this.length;
};
/*删除数组的第一个元素 返回删除的值 同时数组长度减一*/
Array.prototype.shift = function () {
    let result = this[0];
    for (let i = 1; i < this.length; i++) {
        this[i - 1] = this[i];
    }
    this.length--;
    return result;
};
/*
* indexOf() 方法可返回数组中某个指定的元素位置
* 该方法将从头到尾地检索数组，看它是否含有对应的元素。
* 开始检索的位置在数组 start 处或数组的开头（没有指定 start 参数时）。
* 如果找到一个 item，则返回 item 的第一次出现的位置。开始位置的索引为 0
* 如果在数组中没找到指定元素则返回 -1。
* array.indexOf(item,start)
* */
Array.prototype._indexOf = function (item, start = 0) {
    for (let i = start; i < this.length; i++) {
        if (item === this[i]) {
            return i;
        }
    }
    return -1;
};
let arr = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple"];
let result = arr._indexOf("Apple", 4);
console.log(result); // 6

/*
* http://cnblogs.com/yalong/p/11606865.html
* */

/*
* forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
* forEach方法用于操作原数组，没有返回值
* */
Array.prototype._forEach = function (forEachCallback) {
    if (!Array.isArray(this) || typeof forEachCallback !== 'function' || !this.length) {
        return [];
    }
    for (let i=0; i<this.length; i++){
        forEachCallback.call(this, this[i], i, this);
    }
};