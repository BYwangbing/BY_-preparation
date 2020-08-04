/*
1. 依次输出什么
2. 整个过程中产生了几个执行上下文
 */
/*console.log('gb: ' + i);
var i = 1;
foo(1);

function foo(i) {
    if (i === 4) {
        return
    }
    console.log('fb:' + i);
    foo(i + 1); //递归调用: 在函数内部调用自己
    console.log('fe:' + i)
}

console.log('ge: ' + i);*/
/*
   测试题1:  先执行变量提升, 再执行函数提升
    函数提升的优先级高于变量的提升 函数提升先于变量提升
    函数提升优先级高于变量提升，且不会被同名变量声明时覆盖，但是会被变量赋值后覆盖
    变量提升不会覆盖（同名）函数提升，只有变量再次赋值时，才会被覆盖
*/

function f() {

}
var f;
console.log(typeof f);

var getName = function () {
    console.log('var getName 1');
};
function getName() {
    console.log('function getName 1');
}
getName();
// var声明的变量和函数声明function都会被提升，但是函数声明的提升的级别是比var要高的.

// 会将声明提前到最顶部 而赋值依然会停留在原地

// 当两者同时出现时，函数声明会被提升到最前面，然后再是变量提升

/*var getName;    //变量声明提升
function getName(){    //函数声明提升到顶部
    console.log(function getName 1);
}
getName = function(){    //变量赋值依然保留在原来的位置
    console.log(var getName 1);
};
getName();    // 最终输出：2*/

/*function functionName(arg0,arg1,arg2){
    // 函数体
}
console.log(functionName.name); // functionName*/

/*
   测试题2:
   */
/*if (!(b in window)) {
    var b = 1
}
console.log(b); // undefined*/

/*
 测试题3:
 */
/*
var c = 1;

function c(c) {
    console.log(c);
    var c = 3
}

c(2); // 报错*/
