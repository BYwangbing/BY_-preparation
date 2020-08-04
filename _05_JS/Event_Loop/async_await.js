/*async function foo() {
    console.log(1);
    let a = await 100;
    console.log(a);
    console.log(2)
}

setTimeout(function () {
    console.log(3);
}, 0);
console.log(4);
foo();
console.log(5);*/

/*async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end')
}

async function async2() {
    console.log('async2')
}

console.log('script start');
setTimeout(function () {
    console.log('setTimeout')
}, 0);
async1();
new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promise2')
});
console.log('script end');*/

/*function testSomething() {
    console.log("执行testSomething");
    return "testSomething";
}

async function testAsync() {
    console.log("执行testAsync");
    return Promise.resolve("hello async");
}

async function test() {
    console.log("test start...");
    const v1 = await testSomething();//关键点1
    console.log(v1);
    const v2 = await testAsync();
    console.log(v2);
    console.log(v1, v2);
}

test();

var promise = new Promise((resolve) => {
    console.log("promise start..");
    resolve("promise");
});//关键点2
promise.then((val) => console.log(val));

console.log("test end...");*/

async function testSomething() {
    console.log("执行testSomething");
    return "testSomething";
}

async function testAsync() {
    console.log("执行testAsync");
    return Promise.resolve("hello async");
}

async function test() {
    console.log("test start...");
    const v1 = await testSomething();
    console.log(v1);
    const v2 = await testAsync();
    console.log(v2);
    console.log(v1, v2);
}

test();

var promise = new Promise((resolve) => {
    console.log("promise start..");
    resolve("promise");
});//3
promise.then((val) => console.log(val));

console.log("test end...");