/*
1. 在全局代码执行前, JS引擎就会创建一个栈来存储管理所有的执行上下文对象
2. 在全局执行上下文(window)确定后, 将其添加到栈中(压栈)
3. 在函数执行上下文创建后, 将其添加到栈中(压栈)
4. 在当前函数执行完后,将栈顶的对象移除(出栈)
5. 当所有的代码执行完后, 栈中只剩下window
* */
/*let a = 'Hello World!';

function first() {
    console.log('Inside first function');
    second();
    console.log('Again inside first function');
}

function second() {
    console.log('Inside second function');
}

first();
console.log('Inside Global Execution Context');*/
console.log('script start');

async function async1() {
    await async2();
    console.log('async1 end')
}

async function async2() {
    console.log('async2 end')
}

async1();

setTimeout(function () {
    console.log('setTimeout')
}, 0);

new Promise(resolve => {
    console.log('Promise');
    resolve()
})
    .then(function () {
        console.log('promise1')
    })
    .then(function () {
        console.log('promise2')
    });

console.log('script end');



