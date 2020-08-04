/*
5. promise 如何串连多个操作任务?
    (1) promise 的 then()返回一个新的 promise, 可以开成 then()的链式调用
    (2) 通过 then 的链式调用串连多个同步/异步任务
* */
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行任务1（异步）');
        resolve('1')
    })
}).then(
    value => {
        console.log('任务1的结果：' + value);
        console.log('执行任务2（同步）');
        return 2
    }
).then(
    value => {
        console.log('任务2的结果：' + value);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('执行任务3（异步）');
                resolve('3')
            })
        })
    }
).then(
    value => {
        console.log('任务3的结果：' + value);
    }
);