function selfAdd() {
    var i = 0;
    selfAdd = function () {
        return i++;
    };
    return i++
}

console.log(selfAdd());
console.log(selfAdd());

var selfIncreasing = (function () {
    var i = 0;
    return function () {
        return i++
    }
})();
console.log(selfIncreasing());
console.log(selfIncreasing());

function addCount() {
    var count = 0;
    return function () {
        count++;
        console.log(count);
    }
}
/*
* 闭包就是可以创建一个独立的环境，每个闭包里面的环境都是独立的，并且互不干扰
* 每次外部函数执行的时候，外部函数的引用地址不同，都会重新创建一个新的地址
* */
var fun1 = addCount();
var fun2 = addCount();
fun1();//1
fun1();//2
fun1();//3
fun2();//1
fun2();//2
