/*// const a = 1 && 2 && 5;
const a = 0 || 2 || 1;
console.log(a);
let i = 0;
console.log(i++);
// i = i++ || i++ || i++;
console.log(i++ || i++ || i++);*/

/*const value = 1;
function bar() {
    const value = 2;
    foo();
}
function foo() {
    console.log(value);
}
bar();*/

/*var arr = [];
for (var i = 0; i < 3; i++) {
    arr[i] = i;
}
console.log(arr);*/

/*var a = 10;
function fn(){
    a=3;
    console.log(a);
    console.log(this.a);
    var a;
}
fn();*/
let a = '1';

function fn() {
    let a = '2';
    return function () {
        console.log(a);
    }
}

const fn2 = fn();
fn2();
