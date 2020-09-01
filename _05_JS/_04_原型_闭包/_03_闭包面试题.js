let a = 0;
let b = 0;

function A(a) { //外层函数：局部变量a
    //内层函数
    A = function (b) {
        console.log('a + b++ = ' + (a + b++));
    };
    //将内层函数赋值给全局变量A形成闭包
    console.log('a = ' + a++);
}

A(1);
A(2);

/*
第一次调用A时，执行到console.log(a++)时，a已经完成自加，此时a的值为2，a++的值为1
A(1)=1
第二次调用A时，A已经被重新赋值，指向了一个新的函数引用；
由于标识符A是在全局作用域定义的，所以在函数内部被重新赋值，在全局作用域也可以访问到重新赋值后的函数。
此时，也创建了一个闭包，该闭包保存了创建环境的活动对象。
此时活动对象：{ a: 2 }，同时，根据传入的数值2,确定 b = 2，b++
执行到 console.log(a + b++)，故而输出4 A(2)=4
*/

function foo() {
    let $a = b = 0;
    $a++;
    return $a;
}

foo();
console.log(typeof $a);
console.log(typeof b);

