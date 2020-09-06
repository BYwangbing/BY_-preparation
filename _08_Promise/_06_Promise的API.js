/*
1. Promise 构造函数: Promise (executor) {}
    (1) executor 函数: 执行器 (resolve, reject) => {}
    (2) resolve 函数: 内部定义成功时我们调用的函数 value => {}
    (3) reject 函数: 内部定义失败时我们调用的函数 reason => {}
    说明: executor 会在 Promise 内部立即同步回调,异步操作在执行器中执行
2. Promise.prototype.then 方法: (onResolved, onRejected) => {}
    (1) onResolved 函数: 成功的回调函数 (value) => {}
    (2) onRejected 函数: 失败的回调函数 (reason) => {}
    说明: 指定用于得到成功 value 的成功回调和用于得到失败 reason 的失败回调, 返回一个新的 promise 对象
3. Promise.prototype.catch 方法: (onRejected) => {}
    (1) onRejected 函数: 失败的回调函数 (reason) => {}
    说明: then()的语法糖, 相当于: then(undefined, onRejected)
4. Promise.resolve 方法: (value) => {}
    (1) value: 成功的数据或 promise 对象
    说明: 返回一个成功/失败的 promise 对象
5. Promise.reject 方法: (reason) => {}
    (1) reason: 失败的原因
    说明: 返回一个失败的 promise 对象
6. Promise.all 方法: (promises) => {}
    (1) promises: 包含 n 个 promise 的数组
    说明: 返回一个新的 promise, 只有所有的 promise 都成功才成功, 只要有一个失败了就直接失败 第一个被 Rejected 的实例
7. Promise.race 方法: (promises) => {}
    (1) promises: 包含 n 个 promise 的数组
    说明: 返回一个新的 promise, 第一个完成的 promise 的结果状态就是最终的结果状态
*/

new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Date.now() % 2 === 1) {
            resolve('成功的回调')
        } else {
            reject('失败的回调')
        }
    }, 500)
}).then(
    value => {
        console.log('onResolved()', value)
    }
).catch(
    reason => {
        console.log('onRejected()', reason)
    }
);

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000)
});
const p2 = Promise.resolve(2);
const p3 = Promise.reject(3);
p1.then(value => {
    console.log(value);
});
p2.then(value => {
    console.log(value);
});
p3.then(null, reason => {
    console.log(reason);
});
p3.catch(reason => {
    console.log(reason);
});

/*
Promise.all 方法: (promises) => {}
    (1) promises: 包含 n 个 promise 的数组
    说明: 返回一个新的 promise, 只有所有的 promise 都成功才成功, 只要有一个失败了就直接失败
* */
// const pAll = Promise.all([p1, p2, p3]);
const pAll = Promise.all([p1, p2, p3]);
pAll.then(
    values => {
        console.log('Promise.all onResolved(): ' + values);
    },
    reason => {
        console.log('Promise.all onRejected(): ' + reason);
    }
);


const pRace = Promise.race([p1, p2, p3]);
pRace.then(
    value => {
        console.log('---------------------------------------');
        console.log('Promise.race onResolved(): ' + value);
    },
    reason => {
        console.log('---------------------------------------');
        console.log('Promise.race onRejected(): ' + reason);
    }
);

const p4 = Promise.resolve(Promise.resolve(4));
const p5 = Promise.resolve(Promise.reject(5));
p4.then(
    value => {
        console.log('p4 onResolved() :' + value);
    },
    reason => {
        console.log('p4 onRejected() :' + reason);
    }
);

p5.then(
    value => {
        console.log('p5 onResolved() :' + value);
    },
    reason => {
        console.log('p5 onRejected() :' + reason);
    }
);