/*~打印出 1 - 10000 之间的所有对称数 例如 121、1331 等 ~*/

const result = [...Array(1000).keys()].map(x => x + 1).slice(9).filter(x => {
    return x.toString().length > 1 && x === Number(x.toString().split('').reverse().join(''))
});

console.log(result);

/*
JS 快速生成自然数数组
* */
const n = 10000;

// 方法一：
let i = 0;
new Array(n).fill(i++);

// 方法二：
Array.from({length: n}, (v, i) => i);

// 方法三：
[...Array(n).keys()];

/*
// 方法四：
let lodash = require('lodash');
console.log(lodash.times(n));
*/
/*
    从基准测试的结果来看,lodash.times 最快，看源码是通过 new Array 和 while 循环实现的。
    方法一的 fill 和 lodash.times 的速度差不多。
* */