var obj = {
    "2": "a",
    "3": "b",
    "length": 2,
    "push": Array.prototype.push
};
obj.push('c');
obj.push('d');
console.log(obj);

/*
数组push方法的原理是：
    在原数组的第 length 位添加元素
    原数组的 length ++
*/

Array.prototype.push = function (target) {
    this[this.length] = target;
    this.length++;
    return this.length;
};
