/*/!*
对于[1, [1,2], [1,2,3]]这样多层嵌套的数组，我们如何将其扁平化为[1, 1, 2, 1, 2, 3]这样的一维数组呢：
 *!/
/!* 1.ES6的flat() *!/
console.log('----------------1.ES6的flat()----------------');
const arr_1 = [1, [1, 2], [1, 2, 3]];
console.log(arr_1.flat());

/!* 2.序列化后正则 *!/
console.log('----------------2.序列化后正则----------------');
const arr_2 = [1, [1, 2], [1, 2, 3]];
// const _str = `[${JSON.stringify(arr_2).replace(/(\[|\])/g, '')}]`;
const str = `[${JSON.stringify(arr_2).replace(/(\[|\])/g, '')}]`;
console.log(JSON.parse(str));

const args = `[${JSON.stringify(arr_2).replace(/(\[|\])/g, '')}]`;
console.log('王福坤坤大坏蛋');
console.log(args);
console.log(JSON.parse(args));

/!* 3.递归 对于树状结构的数据，最直接的处理方式就是递归 *!/
function flat(array) {
    let result = [];
    for (let item of array) {
        item instanceof Array ? result = result.concat(flat(item)) : result.push(item)
    }
    return result;
}

const arr_3 = [1, [1, 2], [1, 2, 3]];
console.log('----------------3.递归----------------');
console.log(flat(arr_3));
/!* 4.reduce()递归 *!/
console.log('----------------4.reduce()递归----------------');

function _flat(array) {
    return array.reduce((prev, cur) => {
        return prev.concat(cur instanceof Array ? _flat(cur) : cur)
    }, []);
}

/!* 5.迭代+展开运算符 *!/
console.log('----------------5.迭代+展开运算符----------------');

function flatten(array) {
    while (array.some(item => Array.isArray(item))) {
        array = [].concat(...array)
    }
    return array;
}

function fn(array) {
    /!*while (array.some(item => Array.isArray(item))){
        array = [].concat(...array)
    }
    return array*!/
    /!* let result = [];
     for (let item of array) {
         return item instanceof Array ? result = result.concat(fn(item)) : result.push(item)
     }
     return result;*!/
    return array.reduce((prev, cur) => {
        return prev.concat(cur instanceof Array ? fn(cur) : cur);
    })
}

const s = `${JSON.stringify(arr_3).replace(/(\[|\])/g, '')}`;

function f1(array) {
    let result = [];
    for (let item of array) {
        item instanceof Array ? result = result.concat(f1(item)) : result.push(item)
    }
    return result
}

function f2(array) {
    while (array.some((item) => Array.isArray(item))) {
        array = [].concat(...array)
    }
    return array;
}

function f3(array) {
    return array.reduce((prev, cur) => {
        return prev.concat(cur instanceof Array ? f3(cur) : cur)
    }, [])
}*/

/*
function f9(array) {
    while (array.some(item => Array.isArray(item))) {
        array = [].concat(...array)
    }
    return array
}*/
