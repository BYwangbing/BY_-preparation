/*
1. mdn  文档
    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function
    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await
2. async  函数
    1）. 函数的返回值为 promise 对象
    2）. promise 对象的结果由 async 函数执行的返回值决定
3. await  表达式
    1）. await 右侧的表达式一般为 promise 对象, 但也可以是其它的值
    2）. 如果表达式是 promise 对象, await 返回的是 promise 成功的值
    3）. 如果表达式是其它值, 直接将此值作为 await 的返回值
4.  注意
    1）. await 必须写在 async 函数中, 但 async 函数中可以没有 await
    2）. 如果 await 的 promise 失败了, 就会抛出异常, 需要通过 try...catch 捕获处理
* */

async function fn1() {
    // return 1
    // throw 2
    // return Promise.reject(3)
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            resolve(4)
        }, 1000)
    }))
}

const result = fn1().then(
    value => {
        console.log('onResolved(): ' + value);
    },
    reason => {
        console.log('onRejected(): ' + reason);
    }
);

function fn2() {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            reject(5)
        }, 2000)
    }))
}

function fn4() {
    return '说了多少次了，我不喜欢嗯不喜欢嗯你还发嗯'
}

async function fn3() {
    try {
        const value = await fn2();  // await右侧表达为promise, 得到的结果就是promise成功的value
        console.log('value', value);
    } catch (e) {
        console.log('得到失败的结果', e);
    }
    const result = await fn4();   // await右侧表达不是promise, 得到的结果就是它本身
    console.log('result：', result);
}

fn3();