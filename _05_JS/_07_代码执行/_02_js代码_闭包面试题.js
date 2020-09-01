function fun(n, o) {
    console.log(o);
    return {
        fun: function (m) {
            return fun(m, n);
        }
    };
}
// 三个fun函数的关系也理清楚了，第一个等于第三个，他们都不等于第二个
var a = fun(0);
a.fun(1);
a.fun(2);
a.fun(3);//undefined,?,?,?
var b = fun(0).fun(1).fun(2).fun(3);//undefined,?,?,?
var c = fun(0).fun(1);
c.fun(2);
c.fun(3);//undefined,?,?,?
//问:三行a,b,c的输出分别是什么？


//答案：
//a: undefined,0,0,0
//b: undefined,0,1,2
//c: undefined,0,1,1

// JS中函数可以分为两种，具名函数（命名函数）和匿名函数
/**
 * 获取指定函数的函数名称（用于兼容IE）
 * @param {Function} fun 任意函数
 */
function getFunctionName(fun) {
    if (fun.name !== undefined) {
        return fun.name;
    }
    var ret = fun.toString();
    ret = ret.substr('function '.length);
    ret = ret.substr(0, ret.indexOf('('));
    return ret;
}

/*创建函数的几种方式：*/

// 1、声明函数 普通最标准的声明函数方法，包括函数名及函数体
/*function fn1() {
}*/

// 2、创建匿名函数表达式 建一个变量，这个变量的内容为一个函数
// 采用这种方法创建的函数为匿名函数，即没有函数name
/*var fn2 = function () {
};
console.log(getFunctionName(fn2).length)*/
// 3、创建具名函数表达式  注意：具名函数表达式的函数名只能在创建函数内部使用
/*var fn3 = function express() {
    console.log("in: fn3 <", typeof fn3, "> express: <", typeof express, ">");
};
console.log("out: fn3 <", typeof fn3, "> express: <", typeof express, ">");
fn3();*/
/*即采用此种方法创建的函数在函数外层只能使用fn3不能使用express的函数名。
express的命名只能在创建的函数内部使用*/
// 4、Function构造函数
// 可以给 Function 构造函数传一个函数字符串，返回包含这个字符串命令的函数，此种方法创建的是匿名函数
/*Function("alert(1)");*/
// 5、自执行函数
/*
(function () {
    console.log(1);
})();
(function fn1() {
    console.log(1);
})();*/
