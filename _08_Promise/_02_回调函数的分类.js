/*
    1. 同步回调
        1). 理解: 立即执行, 完全执行完了才结束, 不会放入回调队列中
        2). 例子: 数组遍历相关的回调函数 / Promise 的 executor 函数
    2. 异步回调
        1). 理解: 不会立即执行, 会放入回调队列中将来执行
        2). 例子: 定时器回调 / ajax 回调 / Promise 的成功|失败的回调
* */
// 1. 同步回调函数
const arr = [1229, 1009, 425, 914, 1101];
arr.forEach(item => {   // 遍历回调   同步回调函数， 不会放入队列， 一上来就会执行完
    console.log(item);
});
console.log('forEach之后');

// 2. 异步回调函数
setTimeout(() => {      // 异步回调函数，会放入队列中将来执行
    console.log('setTimeout callback');
}, 0);
console.log('setTimeout之后');