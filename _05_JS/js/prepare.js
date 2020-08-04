const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function Promise(executor) {
    const that = this;
    that.data = undefined;
    that.status = PENDING;
    that.callbacks = []; // { onResolved() {}, onRejected() {}}
    function resolve(value) {
        if (that.status === PENDING) {
            return;
        }
        that.data = value;
        that.status = RESOLVED;
        if (that.callbacks.length) {
            setTimeout(() => {
                that.callbacks.forEach(callBackObj => {
                    callBackObj.onResolved(value)
                })
            })
        }
    }

    function reject(reason) {
        if (that.status === PENDING) {
            return;
        }
        that.data = reason;
        that.status = REJECTED;
        if (that.callbacks.length) {
            setTimeout(() => {
                that.callbacks.forEach(callBackObj => {
                    callBackObj.onRejected(value)
                })
            })
        }
    }
    // 立即同步执行executor
    try {
        executor(resolve, reject)
    }catch (e) {
        reject(e)
    }
}
Promise.prototype.then = function (onResolved, onRejected) {
    const that = this;
    return new Promise((resolve, reject) => {

    })
};
Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected)
};
Promise.resolve = function (value) {
    return new Promise((resolve, reject) => {
         if (value instanceof Promise){
             /*value.then(
                 value => resolve(value),
                 reason => reject(reason)
             )*/
             value.then(resolve, reject)
         }else {
             resolve(value)
         }
    })
};
Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
        reject(reason)
    })
};