// 斐波那契数列  递归
function f(n) {
    if (n === 0 || n === 1) {
        return n
    } else
        return f(n - 1) + f(n - 2)
}

f(100);

function fib(n) {
    return n < 2 ? n : fib(n - 2) + fib(n - 1)
}

// 爆栈 卡死

// 改为循环  所有递归都可以转化为循环编写
function fLoop(n, ac1 = 0, ac2 = 1) {
    while (n--) {
        [ac1, ac2] = [ac2, ac1 + ac2]
    }
    return ac1
}

// 运行看看
fLoop(1000)
// 4.346655768693743e+208
fLoop(10000)
// Infinity
fLoop(100000)
// Infinity