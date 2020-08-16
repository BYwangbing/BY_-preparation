/*
1. this是什么?
    * 任何函数本质上都是通过某个对象来调用的,如果没有直接指定就是window
    * 所有函数内部都有一个变量this
    * 它的值是调用函数的当前对象
2. 如何确定this的值?
    * test(): window
    * p.test(): p
    * new test(): 新创建的对象
    * p.call(obj): obj
 */
function Person(color) {
    // console.log(this);
    this.color = color;
    this.getColor = function () {
        // console.log(this);
        return this.color;
    };
    this.setColor = function (color) {
        // console.log(this);
        this.color = color;
    };
}

Person("red"); //this是谁?

let p = new Person("yellow"); //this是谁?

p.getColor(); //this是谁?

let obj = {};
p.setColor.call(obj, "black"); //this是谁?

let test = p.setColor;
test(); //this是谁?

function fun1() {
    function fun2() {
        console.log(this);
    }

    fun2(); //this是谁?
}

fun1();


console.log('+++++++++++++++++++++++++++');
let ary = [23, 34, 24, 12, 35, 36, 14, 25];
// ary.sort((a, b) => {
//     return a - b;
// });
// console.log(ary);
// let min = ary[0];
// let max = ary[ary.length - 1];
// console.log(min, max);

// let max = ary[0], min = ary[0];
// for (let i = 1; i < ary.length; i++) {
//     let cur = ary[i];
//     cur > max ? max = cur : null;
//     cur < min ? min = cur : null;
// }
// console.log(min, max);

// let min = Math.min(ary);
// console.log(min); // NaN
// console.log(Math.min(23, 34, 24, 12, 35, 36, 14, 25));
// console.log(Math.max(23, 34, 24, 12, 35, 36, 14, 25));

let max = eval("Math.max(" + ary.toString() + ")");
console.log(max);
let min = eval("Math.min(" + ary.toString() + ")");
console.log(min);

console.log(eval("12,23,34,45")); // 114