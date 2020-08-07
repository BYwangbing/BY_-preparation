/*
1. 指定回调函数的方式更加灵活
    1）. 旧的: 必须在启动异步任务前指定
    2）. promise: 启动异步任务 => 返回promise对象 =>
                                    给promise对象绑定回调函数(甚至可以在异步任务结束后指定/多个)
2. 支持链式调用,  可以解决回调地狱问题
    1）. 什么是回调地狱？      回调函数嵌套调用, 外部回调函数异步执行的结果是嵌套的回调执行的条件
    2）. 回调地狱的缺点?       不便于阅读 / 不便于异常处理
    3）. 解决方案?             promise 链式调用
    4）. 终极解决方案?         async/await
* */

// 成功的回调函数
function successCallback(result) {
    console.log("声音文件创建成功: " + result);
}

// 失败的回调函数
function failureCallback(error) {
    console.log("声音文件创建失败: " + error);
}

/* 1.1 使用纯回调函数 */
createAudioFileAsync(audioSettings, successCallback, failureCallback);

/* 1.2. 使用 Promise */
const promise = createAudioFileAsync(audioSettings); // 2
setTimeout(() => {
    promise.then(successCallback, failureCallback);
}, 3000);

/* 2.1. 回调地狱 */
doSomething(function (result) {
    doSomethingElse(result, function (newResult) {
        doThirdThing(newResult, function (finalResult) {
            console.log('Got the final result: ' + finalResult)
        }, failureCallback)
    }, failureCallback)
}, failureCallback);

/* 2.2. 使用 promise 的链式调用解决回调地狱 */   //  `错误穿透
doSomething().then(function (result) {
    return doSomethingElse(result)
})
    .then(function (newResult) {
        return doThirdThing(newResult)
    })
    .then(function (finalResult) {
        console.log('Got the final result: ' + finalResult)
    })
    .catch(failureCallback);

/* 2.3. async/await: 回调地狱的终极解决方案 */
async function request() {
    try {
        const result = await doSomething();
        const newResult = await doSomethingElse(result);
        const finalResult = await doThirdThing(newResult);
        console.log('Got the final result: ' + finalResult)
    } catch (error) {
        failureCallback(error)
    }
}