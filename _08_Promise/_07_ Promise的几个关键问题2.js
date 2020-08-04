/*
3. 改变 promise 状态和指定回调函数谁先谁后?
    (1) 都有可能, 正常情况下是先指定回调再改变状态, 但也可以先改状态再指定回调
    (2) 如何先改状态再指定回调?
        ① 在执行器中直接调用 resolve()/reject()
        ② 延迟更长时间才调用 then()
    (3) 什么时候才能得到数据?
        ③ 如果先指定的回调, 那当状态发生改变时, 回调函数就会调用, 得到数据
*/
// 常规: 先指定回调函数, 后改变的状态
new Promise((resolve, reject) => {
    setTimeout(() => {      // 后改变的状态(同时指定数据), 异步执行回调函数
        if (Date.now() % 2 === 0) {
            resolve('First resolve: ' + Date.now() + ' 为偶数')
        } else {
            reject('First reject: ' + Date.now() + ' 为奇数')
        }
    }, 1000)
}).then(        // 先指定回调函数, 保存当前指定的回调函数
    value => {
        console.log(value);
    },
    reason => {
        console.log(reason);
    }
);

// 如何先改状态, 后指定回调函数
new Promise((resolve, reject) => {
    console.log('-------');
    if (Date.now() % 2 === 0) { // 先改变的状态(同时指定数据)
        resolve('Second resolve: ' + Date.now() + ' 为偶数')
    } else {
        reject('Second reject: ' + Date.now() + ' 为奇数')
    }
}).then(        // 后指定回调函数, 异步执行回调函数
    value => {
        console.log(value);
    },
    reason => {
        console.log(reason);
    }
);
console.log('-------');

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Date.now() % 2 === 0) {
            resolve('Third resolve: ' + Date.now() + ' 为偶数')
        } else {
            reject('Third reject: ' + Date.now() + ' 为奇数')
        }
    }, 1000)
});
setTimeout(() => {
    p.then(
        value => {
            console.log(value);
        },
        reason => {
            console.log(reason);
        }
    );
}, 1100);
