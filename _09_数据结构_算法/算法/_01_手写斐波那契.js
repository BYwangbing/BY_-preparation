/*
斐波那契数列根据递推方式定义：F(n)=F(n-1)+F(n-2)
特殊值： F(1)==F(2)==1
*/

// 递推
function $fibonacci(n) {
    let f1 = 1, f2 = 1;
    if (n < 0) throw new Error('输入的数字不能小于0');
    if (f1 === 1 || f2 === 2) return f1;
    for (let i = 3; i <= n; i++) {
        let fn = f1 + f2;
        f1 = f2;
        f2 = fn;
    }
    return fn;
}

// 递归
function fibonacci(n) {
    if (n < 0) throw new Error('输入的数字不能小于0');
    if (n === 1 || n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

/*优点：代码比较简洁易懂；
缺点：
    当数字太大时，会变得特别慢，
    原因是在计算F(9)时需要计算F(8)和F(7)，但是在计算F(8)时要计算F(7)和F(6)，
    这里面就会重复计算F(7)，每次都重复计算会造成不必要的浪费，所以这种方法并不是很好。*/

// 递归2 使用闭包保存每次的递归值
// 将每次产生的递归值保存下来，下次直接使用就行
function fib(n) {
    if (n < 0) throw new Error('输入的数字不能小于0');
    let arr = [0, 1];//在外部函数中定义数组，内部函数给数组添加值
    function calc(n) {
        if (n < 2) return arr[n];
        if (arr[n] !== undefined) return arr[n];
        let data = calc(n - 1) + calc(n - 2); //使用data将每次递归得到的值保存起来
        arr[n] = data; //将每次递归得到的值放到数组中保存
        return data;
    }

    return calc(n)
}

// 方法3：直接使用数组实现（动态规划）
/*——避免后续的重复计算，需要将计算过的值保存起来——*/
function _fibonacci(n) {
    if (n < 0) throw new Error('输入的数字不能小于0');
    let fn = [0, 1];
    if (n >= 3) {
        for (let i = 3; i <= n; i++) {
            fn[n] = fn[n - 1] + fn[n - 2];
        }
    }
    return fn[n]
}