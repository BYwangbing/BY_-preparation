new Promise((resolve, reject) => {
    console.log('-------------');
    if (Date.now() % 2 === 0) {
        resolve('Second resolve: ' + Date.now() + ' 为偶数')
    } else {
        reject('Second reject: ' + Date.now() + ' 为奇数')
    }
}).then(
    value => {
        console.log(value);
    },
    reason => {
        console.log(reason);
    }
);
console.log('+++++++++++++');

/*
4. promise.then()返回的新 promise 的结果状态由什么决定?
    (1) 简单表达: 由 then()指定的回调函数执行的结果决定
    (2) 详细表达:
        ① 如果抛出异常, 新 promise 变为 rejected, reason 为抛出的异常
        ② 如果返回的是非promise的任意值, 新promise变为resolved, value为返回的值
        ③ 如果返回的是另一个新promise, 此promise的结果就会成为新promise的结果
* */

new Promise((resolve, reject) => {
    resolve('王福坤坤是个憨球')
}).then(
    value => {
        console.log('First onResolved(): ' + value);
        // throw new Error('出错啦')
        // return 4
        // return Promise.reject(5)
        return Promise.resolve(6)
    },
    reason => {
        console.log('First onRejected(): ' + reason);
    }
).then(
    value => {
        console.log('Second onResolved(): ' + value);
    },
    reason => {
        console.log('Second onRejected(): ' + reason);
    }
);