/*
    a++是先取值后运算，++a是先运算后取值
    a++ 的值就是 a 的值，而 ++a 的值等于 a+1
 */
let a = 1;
// console.log((++a) + (++a));
console.log(++a);
console.log(a++);
console.log(a);

let b = 1;
let c = b++;
console.log(c);
console.log(b);