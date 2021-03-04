/*
* 1. 变量声明提升
  * 通过var定义(声明)的变量, 在定义语句之前就可以访问到
  * 值: undefined
2. 函数声明提升
  * 通过function声明的函数, 在之前就可以直接调用
  * 值: 函数定义(对象)
*
*  函数提升优先级高于变量提升，且不会被同名变量声明时覆盖，但是会被变量赋值后覆盖
* 变量提升不会覆盖（同名）函数提升，只有变量再次赋值时，才会被覆盖
*
3. 问题: 变量提升和函数提升是如何产生的?
    *  在js中js引擎会优先解析var变量和function定义，在预解析完成后从上到下逐步进行
    *  解析var变量时，会把值存储在“执行环境”中，而不会去赋值，值是存储作用
    *  解析function时会把函数整体定义,表面上看是先调用了，
    *  其实在内部机制中第一步实行的是把以function方式定义的函数先声明
* */

/*console.log(a);
var a = 1;
console.log(a);

function a() {
    console.log(2);
}

console.log(a);
var a = 3;
console.log(a);

function a() {
    console.log(3);
}

a();
console.log(a);*/

/*console.log(bar);  // f bar() { console.log(123) }
console.log(bar()); // undefined
var bar = 456;

function bar() {
    console.log(123); // 123
    // return 'bar() 返回值'
}

console.log(bar); // 456
bar = 789;
console.log(bar); // 789
console.log(bar()); // bar is not a function*/

/*
    // console.log(bar());
    // 先执行bar()里的console.log
    // 再bar()的返回值，如果函数没有返回值，默认为：undefined
 */

console.log(person);
console.log(fun);
console.log(fun());
var person = 'jack';
console.log(person);

function fun() {
  console.log(person);
  var person = 'tom';
  console.log(person);
}

console.log(person);
