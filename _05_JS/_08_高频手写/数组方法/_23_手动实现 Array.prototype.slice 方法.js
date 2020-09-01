/*
arrayObject.slice(start,end)
* 返回一个新的数组，不改变原来的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素
* */
Array.prototype._slice = function (start, end) {
    let result = [];
    start < (-this.length) ? start = 0 : null;
    end > this.length ? end = this.length : null;
    start < 0 ? start = start + this.length : start;
    end < 0 ? end = end + this.length : end;
    if (start === undefined) {
        return this;
    } else if (end === undefined) {
        for (let i = start; i < this.length; i++) {
            result.length += 1;
            result[result.length - 1] = this[i];
        }
        return result;
    } else {
        for (let i = start; i < end; i++) {
            result.push(this[i]);
        }
        return result;
    }
};