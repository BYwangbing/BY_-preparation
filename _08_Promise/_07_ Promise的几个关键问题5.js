/*
6. promise 异常传透?
    (1) 当使用 promise 的 then 链式调用时, 可以在最后指定失败的回调,
    (2) 前面任何操作出了异常, 都会传到最后失败的回调中处理
7. 中断 promise 链?
    (1) 当使用 promise 的 then 链式调用时, 在中间中断, 不再调用后面的回调函数
    (2) 办法: 在回调函数中返回一个 pending 状态的 promise 对象
* */
new Promise((resolve, reject) => {
    reject('王福坤坤是个智障障')
}).then(
    value => {
        console.log('First onResolved(): ' + value);
        return '陌上人如玉，公子世无双'
    },
    reason => {
        throw reason
    }
).then(
    value => {
        console.log('Second onResolved(): ' + value);
        return '斯人若彩虹，遇上方知有'
    },
    reason => {
        throw reason
    }
).then(
    value => {
        console.log('Third onResolved(): ' + value);
    },
    reason => {
        throw reason
    }
).catch(
    reason => {
        console.log('onRejected(): ' + reason);
        // throw reason
        // return reason
        // return Promise.reject(reason)
        // 返回一个状态为pending的promise  中断promise链
        return new Promise(() => {
        })
    }
).then(
    value => {
        console.log('onResolved(): ' + value);
    },
    reason => {
        console.log('onRejected(): ' + reason);
    }
);