/*
1. 错误的类型
    Error: 所有错误的父类型
        a）. ReferenceError: 引用的变量不存在
        b）. TypeError: 数据类型不正确的错误
        c）. RangeError: 数据值不在其所允许的范围内
        d）. SyntaxError: 语法错误
        e）. URLError（URL错误）
        f）. EvalError（eval错误） eval函数没有被正确执行
2. 错误处理
    1）. 捕获错误: try ... catch
    2）. 抛出错误: throw error
3. error  对象的结构
    1）. message 属性: 错误相关信息
    2）. stack 属性: 函数调用栈记录信息
 */


// 1. 常见的内置错误

// a）. ReferenceError: 引用的变量不存在
// console.log(a);  //  ReferenceError: a is not defined
// console.log('---------------');

// b）. TypeError: 数据类型不正确的错误
// a.变量或参数不是预期类型
// b.调用对象不存在的方法
// let b;
// // console.log(b.xxx); // TypeError: Cannot read property 'xxx' of undefined
// b = {};
// b.xxx(); // TypeError: b.xxx is not a function

// c）. RangeError: 数据值不在其所允许的范围内
// function fn() {
//     fn();
// }
//
// fn(); // RangeError: Maximum call stack size exceeded
// var a= new Array(-1); // RangeError: Invalid array length

// d）. SyntaxError: 语法错误
// let 1a; //  SyntaxError: Invalid or unexpected token

// e）.URLError（URL错误）
// decodeURI('%2');  // URIError: URI malformed

// 2. 错误处理

// 1）. 捕获错误: try ... catch
// try {
//     let d;
//     console.log(d.xxx);
// } catch (e) {
//     console.log(e.message);
//     console.log(e.stack)
// }
// console.log('出错之后');

// 2）. 抛出错误: throw error
function something() {
    if (Date.now() % 2 === 1) {
        console.log('当前时间为奇数，可执行操作');
    } else {
        throw new Error('当前时间为偶数，不可执行操作')
    }
}
try {
    something()
} catch (e) {
    console.log(e.message);
}