/*
编写代码，满足以下条件：
（1）Hero("37er");执行结果为 Hi! This is 37er
（2）Hero("37er").kill(1).recover(30);执行结果为
    Hi! This is 37er
    Kill 1 bug
    Recover 30 bloods
（3）Hero("37er").sleep(10).kill(2)执行结果为
    Hi! This is 37er
    //等待10s后
    Kill 2 bugs  //注意为bugs
（双斜线后的为提示信息，不需要打印）
 */
function Hero(name) {
    let o = new Object();
    o.name = name;
    o.time = 0;
    console.log('Hi! This is ' + name);
    o.kill = function (bugs) {
        if (bugs === 1) {
            console.log('Kill 1 bug');
        } else {
            setTimeout(function () {
                console.log(`Kill ${bugs} bugs`);
            }, 1000 * o.time);
            return o;
        }
    };
    o.sleep = function (sleepName) {
        o.time = sleepName;
        return o;
    };
    o.recover = function (bloods) {
        console.log(`Recover ${bloods} bloods`);
        return o;
    };
    return o;
}

function _Hero(name) {
    let o = new Object();
    o.name = name;
    o.time = 0;
    console.log("Hi! This is " + o.name);
    o.kill = function (bugs) {
        if (bugs === 1) {
            console.log("Kill " + (bugs) + " bug");
        } else {
            setTimeout(function () {
                console.log("Kill " + (bugs) + " bugs");
            }, 1000 * this.time);
        }
        return o;
    };
    o.recover = function (bloods) {
        console.log("Recover " + (bloods) + " bloods");
        return o;
    };
    o.sleep = function (sleepTime) {
        o.time = sleepTime;
        return o;
    };
    return o;
}

/*
const a = 11;

function test2() {
    this.a = 22;
    let c = () => {
        console.log(this.a)
    };
    c();
}

const x = new test2();
*/

setTimeout(function () {
    console.log(1)
}, 0);
new Promise(function (resolve, reject) {
    console.log(2);
    resolve();
}).then(function () {
    console.log(3)
}).then(function () {
    console.log(4)
});
process.nextTick(function () {
    console.log(5)
});
console.log(6);


