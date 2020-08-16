/*数组中的最大值/最小值*/
let arr = [1, 2, 5, 8, 10, 100, -1];
// 使用Math的静态方法max/min
// 结合ES6的扩展运算符...使用
console.log(Math.max(...arr));
// 结合apply/call方法来使用
console.log(Math.max.apply(null, arr));
console.log(Math.max.call(null, ...arr));
// 结合reduce来使用
function getMax(prev, next) {
    return Math.max(prev, next)
}
console.log(arr.reduce(getMax));

let AS = arr.sort((a, b) => a - b);
console.log(AS[arr.length - 1]);

let max = arr[0];
arr.forEach(item => max = item > max ? item : max);
console.log(console.log(max)); // 100

var a = [1,2,3,[5,6],[1,4,8]];
console.log(a.join(","));
var ta = a.join(",").split(",");//转化为一维数组

console.log(Math.max.apply(null, ta));//最大值

console.log(Math.min.apply(null, ta));//最小值