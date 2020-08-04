/*
1. 如何改变 promise 的状态?
    (1) resolve(value): 如果当前是 pending 就会变为 resolved
    (2) reject(reason): 如果当前是 pending 就会变为 rejected
    (3) 抛出异常: 如果当前是 pending 就会变为 rejected
2. 一个 promise 指定多个成功/失败回调函数, 都会调用吗?
    当 promise 改变为对应状态时都会调用
*/
const p = new Promise((resolve, reject) => {
    // resolve(1);      //  promise变为resolved成功状态
    // reject(2);       //  promise变为rejected成功状态
    // throw new Error('出错啦');  // 抛出异常，promise变 为rejected失败状态，reason为 抛出的error
    throw 3;            // 抛出异常，promise变 为rejected失败状态，reason为 抛出的3
});
p.then(null,
    reason => {
        console.log('reason: ', reason);
    },
);
p.catch(
    reason => {
        console.log('reason 3: ', reason);
    }
);