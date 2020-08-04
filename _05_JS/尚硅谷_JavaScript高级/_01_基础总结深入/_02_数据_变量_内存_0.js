
let e = new String('123');
console.log(typeof e);
let f = String('123');
let g = '123';
console.log(e == f, e === f, f == g, f === g, e == g, e === g);     // true false true true true false

console.log('------------------------------');
let m = new String('123');
let n = new String('123');
console.log(m == n, m === n);

console.log('------------------------------');
console.log('null === null: ', null === null, 'null == null: ', null == null);

console.log('------------------------------');
let a = "黑MAO";
let b = a;
let c = new Object();
let d = c;
a = "新黑MAO";
c.age = 24;
//打印出结果是怎么样的呢？
console.log(a, b, c, d);