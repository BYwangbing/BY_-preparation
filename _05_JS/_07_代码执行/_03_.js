/* 如果已经有三个promise，A、B和C，想串行执行，该怎么写？ */
/*
// promise
A.then(B).then(C).catch(...)
// async/await
(async ()=>{
await a();
await b();
await c();
})()
 */

/*
(async () => {
    await new Promise()
})();
*/

/*Function.prototype.a = 1;
Object.prototype.b = 2;
function A() {
}
const a = new A();
console.log(a.a, a.b); // undefined, 2
console.log(A.a, A.b); // 1, 2*/

setTimeout(function () {
    console.log(1)
}, 0);

new Promise(function (resolve, reject) {
    console.log(2);
    for (var i = 0; i < 10000; i++) {
        if (i === 10) {
            console.log(10)
        }
        i === 9999 && resolve();
    }
    console.log(3)
}).then(function () {
    console.log(4)
});
console.log(5);

/*
function* g() {
    let o = 1;
    yield o++;
    yield o++;
}*/
