// 1. 创建一个新的Promise对象
new Promise((resolve, reject) => {  //  执行器函数  同步回调
    console.log('执行 executor');
    // 2. 执行异步操作任务
    setTimeout(() => {
        const time = Date.now(); // 当前时间为奇数，可执行操作
        if (time % 2 === 1) {  // 如果成功了, 调用 resolve(value)
            resolve('成功的数据， time = ' + time)
        } else { // 如果成功了, 调用 reject(reason)
            reject('失败的数据， time = ' + time)
        }
    }, 500)
}).then(
    value => {
        console.log('成功的回调， value: ' + value);
    },
    reason => {
        console.log('失败的回调， reason: ' + reason);
    }
);
// 通过 promise 的 then()指定成功和失败的回调函数

console.log('new Promise() 之后');