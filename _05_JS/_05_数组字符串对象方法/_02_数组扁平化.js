/*
对于[1, [1,2], [1,2,3]]这样多层嵌套的数组，我们如何将其扁平化为[1, 1, 2, 1, 2, 3]这样的一维数组呢：
 */
/*// 简单的二维:
var $arr = [1, [2, 3]];
[].concat.apply([], $arr); // [1, 2, 3]
[].concat(...$arr);    // [1, 2, 3] */


const arr = [1, [1, 2], [1, 2, 3]];
/*——1.ES6的flat()——*/
console.log(arr.flat());

/*——2.序列化后正则——*/
const _arr = `[${JSON.stringify(arr).replace(/\[|\]/g, '')}]`;
console.log(JSON.parse(_arr));

/*——3. 递归 对于树状结构的数据，最直接的处理方式就是递归—— */
function flat(array) {
    let result = [];
    for (let item of array) {
        item instanceof Array ? result = result.concat(flat(item)) : result.push(item);
    }
    return result;
}

/*——4.reduce()递归——*/
function _flatt(array) {
    return array.reduce((perv, cur) => {
        return perv.concat(cur instanceof Array ? _flatt(array) : cur)
    })
}

/*—— 5.迭代+展开运算符—— */
function $flatt(array) {
    while (array.some(item => Array.isArray(item))) {
        array = [].concat(...array)
    }
    return array;
}

// 如果数组的元素均为数字，可以考虑使用toString()方法或者join()方法，在使用split()方法转化为数组
function $flat(array) {
    return array.toString().split(',').map(item => parseInt(item))
}

const array = [1, [2], [3, [4], [5, [6]]], [[[[7]]]]];
console.log($flat(array));


var $arr = [1, [2, [3, 4]]];
/*这种方法只可以扁平一层*/
console.log([].concat(...$arr)); // [1, 2, [3, 4]]