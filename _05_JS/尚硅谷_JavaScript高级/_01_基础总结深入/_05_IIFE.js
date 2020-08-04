/*
IIFE:
    Immediately Invoked Function Expression
    意为立即调用的函数表达式，即声明函数的同时立即调用这个函数
作用：
    * 隐藏实现
    * 不会污染外部(全局)命名空间
    * 用它来编码js模块
 */
(function () { // 匿名函数自调用
    console.log('斯人若彩虹，遇上方知有');
})();

;(function () {
    let a;

    function fn1() {
        console.log(++a);
    }

    window.$ = function () { // 向外暴露一个全局函数
        return {
            fn1: fn1
        }
    }
})();
$().fn1();  // 1. $是一个函数 2. $执行后返回的是一个对象

/*
代码执行后会报错：ReferenceError: window is not defined
    原因： 是在Node环境运行浏览器环境中的代码，错把Web环境的代码跑在了Node环境中
    Web中使用JavaScript，BOM是核心，而BOM的核心对象是window
 */