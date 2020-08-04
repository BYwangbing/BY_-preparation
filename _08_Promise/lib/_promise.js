// 自定义Promise函数模块： IIFE
// IIFE: Immediately Invoked Function Expression 意为立即调用的函数表达式，即声明函数的同时立即调用这个函数
/*
  Promise 构造函数
  executor: 执行器函数(同步执行)
*/
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function Promise(executor) {
    const that = this;
    that.status = PENDING;    // 给promise对象指定status属性，初始值为pending
    that.data = undefined;      // 给promise对象指定一个用于存储结果数据的属性
    that.callbacks = [];         // 每个元素的结构: { onResolved() {}, onRejected() {}}

    function resolve(value) {
        if (that.status !== PENDING) {    // 如果当前状态不是pending，直接结束
            return
        }
        // 将结果状态改为resolved
        that.status = RESOLVED;
        // 保存value数据
        that.data = value;
        // 如果有待执行的callback函数，立即异步执行回调函数onResolved
        if (that.callbacks.length) {
            setTimeout(() => {      // 放入队列中执行所有成功的回调
                that.callbacks.forEach(callbacksObj => {
                    callbacksObj.onResolved(value)
                })
            })
        }
    }

    function reject(reason) {
        if (that.status !== PENDING) {    // 如果当前状态不是pending，直接结束
            return
        }
        // 将结果状态改为rejected
        that.status = REJECTED;
        // 保存value数据
        that.data = reason;
        // 如果有待执行的callback函数，立即异步执行回调函数onRejected
        if (that.callbacks.length) {
            setTimeout(() => {      // 放入队列中执行所有成功的回调
                that.callbacks.forEach(callbacksObj => {
                    callbacksObj.onRejected(reason)
                })
            })
        }
    }

    // 立即同步执行executor
    try {
        executor(resolve, reject)
    } catch (e) {   //  如果执行器抛出异常，promise对象变为rejected状态
        reject(e)
    }
}

// Promise原型对象的then() 指定成功和失败的回调函数 返回一个新的promise对象
// 返回promise的结果由onResolved/onRejected执行结果决定
Promise.prototype.then = function (onResolved, onRejected) {
    const that = this;
    // 指定回调函数的默认值(必须是函数)
    onResolved = typeof onResolved === 'function' ? onResolved : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {
        throw reason
    };
    // 返回一个新的promise对象
    return new Promise((resolve, reject) => {
        /* 执行指定的回调函数 根据执行的结果改变return的promise的状态/数据 */
        function handle(callback) {
            /*
                返回promise的结果由onResolved/onRejected执行结果决定
                    1. 抛出异常, 返回promise的结果为失败, reason为异常
                    2. 返回的是promise, 返回promise的结果就是这个结果
                    3. 返回的不是promise, 返回promise为成功, value就是返回值
            */
            try {
                const result = callback(that.data);
                if (result instanceof Promise) { // 2. 返回的是promise, 返回promise的结果就是这个结果
                    result.then(
                        value => resolve(value),
                        reason => reject(reason)
                    );
                    // result.then(resolve, reject)
                } else { // . 返回的不是promise, 返回promise为成功, value就是返回值
                    resolve(result)
                }
            } catch (e) {   // 1. 抛出异常, 返回promise的结果为失败, reason为异常
                reject(e)
            }
        }

        if (that.status === PENDING) {
            //  当前状态还是pending状态， 将成功和失败的回调函数保存callbacks容器中缓存起来
            that.callbacks.push({
                onResolved(value) {
                    handle(onResolved)
                },
                onRejected(reason) {
                    handle(onRejected)
                }
            })
        } else if (that.status === RESOLVED) { // 当前promise的状态是resolved
            setTimeout(() => {  // 立即异步执行成功的回调函数
                handle(onResolved)
            })
        } else {  // 当前promise的状态是rejected
            setTimeout(() => {  // 立即异步执行失败的回调函数
                handle(onRejected)
            })
        }
    })
};

// Promise原型对象的catch() 指定失败的回调函数 返回一个新的promise对象
Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected)
};

/*
* Promise函数对象的resolve方法 返回一个指定结果的成功的promise
* */
Promise.resolve = function (value) {
    return new Promise((resolve, reject) => {
        if (value instanceof Promise) {
            value.then(resolve, reject)
        } else {
            resolve(value)
        }
    })
};
/*
* Promise函数对象的reject方法 返回一个指定reason的失败的promise
* */
Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
        reject(reason)
    })
};

/*
* Promise函数对象的all方法
* 返回一个Promise，只有当所有Promise都成功时才成功，否则只要有一个失败就失败
* */
Promise.all = function (promises) {
    // 用来保存所有成功value的数组
    const values = new Array(promises.length);
    // 用来保存成功promise的数量
    let resolvedCount = 0;
    return new Promise((resolve, reject) => {
        // 遍历promises获取每个promise的结果
        promises.forEach((p, index) => {
            Promise.resolve(p).then(
                value => {
                    resolvedCount++;
                    // p成功, 将成功的value保存values
                    // values.push(value)
                    values[index] = value;
                    // 如果全部成功了, 将return的promise改变成功
                    if (resolvedCount === promises.length) {
                        resolve(values)
                    }
                },
                reason => {     // 只要一个失败了, return的promise就失败
                    reject(reason)
                }
            )
        })
    })
};

/*
* Promise函数对象的race方法
* 返回一个Promise，其结果由第一个完成的promise决定
* */
Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        // 遍历promises获取每个promise的结果
        promises.forEach((p, index) => {
            Promise.resolve(p).then(
                value => {
                    resolve(value)
                },
                reason => {
                    reject(reason)
                }
            )
        })
    })
};

/*
 返回一个promise对象, 它在指定的时间后才确定结果
 */
Promise.resolveDelay = function (value, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value instanceof Promise) {
                value.then(resolve, reject)
            } else {
                resolve(value)
            }
        }, time)
    })
};

/*
 返回一个promise对象, 它在指定的时间后才失败
 */
Promise.rejectDelay = function (reason, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(reason)
        }, time)
    })
};

// 向外暴露Promise函数
module.exports = Promise;
