// 自定义Promise函数模块： IIFE
// IIFE: Immediately Invoked Function Expression 意为立即调用的函数表达式，即声明函数的同时立即调用这个函数
;(function (window) {
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
        that.callbacks = [];        // 每个元素的结构: { onResolved() {}, onRejected() {}}

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
        return new Promise((resolve, reject) => {
            // 返回promise的结果由onResolved/onRejected执行结果决定
            function handle(callback) {
                try {
                    const result = callback(that.data);
                    if (result instanceof Promise) {
                        // result.then(resolve, reject)
                        result.then(
                            value => resolve(value),
                            reason => reject(reason)
                        )
                    } else {
                        resolve(result)
                    }
                } catch (e) {
                    reject(e)
                }
            }

            if (that.status === RESOLVED) {
                setTimeout(() => {
                    handle(onResolved)
                })
            } else if (that.status === REJECTED) {
                setTimeout(() => {
                    handle(onRejected)
                })
            } else {
                that.callbacks.push({
                    onResolved(value) {
                        handle(onResolved)
                    },
                    onRejected(reason) {
                        handle(onRejected)
                    }
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
        return new Promise((resolved, rejected) => {
            if (value instanceof Promise) {
                value.then(resolved, rejected)
            } else {
                resolved(value)
            }
        })
    };
    /*
    * Promise函数对象的reject方法 返回一个指定reason的失败的promise
    * */
    Promise.reject = function (reason) {
        return new Promise((resolved, rejected) => {
            rejected(reason)
        })
    };
    /*
    * Promise函数对象的all方法
    * 返回一个Promise，只有当所有Promise都成功时才成功，否则只要有一个失败就失败
    * */
    Promise.all = function (promises) {
        let values = new Array(promises.length);
        let resolveCount = 0;
        return new Promise((resolve, reject) => {
            // 遍历promises获取每个promise的结果
            promises.forEach((p, index) => {
                Promise.resolve(p).then(
                    value => {
                        resolveCount++;
                        // values.push(value)
                        values[index] = value;
                        if (resolveCount === promises.length) {
                            resolve(values);
                        }
                    },
                    reason => {
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
    window.Promise = Promise
})(window);