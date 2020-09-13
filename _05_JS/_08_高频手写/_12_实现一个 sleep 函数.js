/*
* 实现一个 sleep 函数，比如 sleep(1000) 意味着等待1000毫秒
* 可从 Promise、Generator、Async/Await 等角度实现
* */
// Promise
const sleepPromise = timer => new Promise((resolve, reject) => setTimeout(resolve, timer));
sleepPromise(1000).then(() => {
    console.log('sleepPromise');
});

// ES5
function sleep(callback, timer) {
    if (typeof callback === 'function') {
        setTimeout(callback, timer)
    }
}

function output() {
    console.log('ES5');
}

sleep(output(), 1000);

// Generator
function* sleepGenerator(timer) {
    yield new Promise(function (resolve, reject) {
        setTimeout(resolve, timer);
    })
}

sleepGenerator(1000).next().value.then(() => {
    console.log('sleepGenerator');
});

// async
function sleepAsync(timer) {
    return new Promise((resolve, reject) => setTimeout(resolve, timer))
}

async function _output() {
    let result = await sleepAsync(1000);
    console.log('sleepAsync');
    return result;
}

_output();