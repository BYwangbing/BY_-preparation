const Promise = require('./lib/promise_class');
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(1);
        console.log('resolve()改变状态之后');
    }, 1000)
}).then(
    value => {
        console.log('First onResolved1: ' + value);
    },
    reason => {
        console.log('First onRejected1: ' + reason);
        return new Promise((resolve, reject) => {
            reject(2)
        })
    }
).then(
    value => {
        console.log('First onResolved2: ' + value);
    },
    reason => {
        console.log('First onRejected2: ' + reason);
        throw 4
    }
).catch(
    reason => {
        console.log('First onRejected3: ' + reason);
        return new Promise(() => {
        })  // 中断promise链
    }
).then(
    value => {
        console.log('First onResolved4: ' + value);
    },
    reason => {
        console.log('First onRejected4: ' + reason);
    }
);

// --------------------------------------------------------------------------------------
const p1 = Promise.resolve(1);  // 如果是一般值, p1成功, value就是这个值
const p2 = Promise.reject(2);
// 如果是成功的promise, p3成功, value是这个promise的value
const p3 = Promise.resolve(Promise.resolve(3));
// 如果是失败的promise, p4失败, reason是这个promise的reason
const p4 = Promise.resolve(Promise.reject(4));
const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5)
    })
});
p1.then(value => {
    console.log('p1: ', value);
});
p2.catch(reason => {
    console.log('p2: ', reason);
});
p3.then(value => {
    console.log('p3: ', value);
});
p4.catch(reason => {
    console.log('p4: ', reason);
});

Promise.all([p5, p1, 7, p3]).then(
    value => {
        console.log('Promise.all: ', value);
    },
    reason => {
        console.log('Promise.all: ', reason);
    }
);

Promise.race([p5, 7, p2, p3]).then(
    value => {
        console.log('Promise.race: ', value);
    },
    reason => {
        console.log('Promise.race : ', reason);
    }
);