async function async1() {
    console.log(1);
    const result = await async2();
    console.log(3);
}

async function async2() {
    console.log(2);
}

Promise.resolve().then(() => {
    console.log(4);
});

setTimeout(() => {
    console.log(5);
});

async1();
console.log(6);


console.log('-----------------');

console.log(1);

setTimeout(() => {
    console.log(2);
    Promise.resolve().then(() => {
        console.log(3)
    });
});

new Promise((resolve, reject) => {
    console.log(4);
    resolve(5)
}).then((data) => {
    console.log(data);
    Promise.resolve().then(() => {
        console.log(6)
    }).then(() => {
        console.log(7);
        setTimeout(() => {
            console.log(8)
        }, 0);
    });
});

setTimeout(() => {
    console.log(9);
});

console.log(10);

console.log('start');

setTimeout(() => {          // callback1
    console.log(111);
    setTimeout(() => {        // callback2
        console.log(222);
    }, 0);
    setImmediate(() => {      // callback3
        console.log(333);
    });
    process.nextTick(() => {  // callback4
        console.log(444);
    })
}, 0);

setImmediate(() => {        // callback5
    console.log(555);
    process.nextTick(() => {  // callback6
        console.log(666);
    })
});

setTimeout(() => {          // callback7
    console.log(777);
    process.nextTick(() => {  // callback8
        console.log(888);
    })
}, 0);

process.nextTick(() => {    // callback9
    console.log(999);
});

console.log('end');

/*
process.nextTick 永远大于 promise.then
 */