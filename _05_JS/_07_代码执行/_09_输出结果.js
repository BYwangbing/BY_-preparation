// 输出 "" 空字符串
console.log([] + []);
console.log("" + "");
// 还是 数组
const val = [].valueOf();
// 数组 toString 默认会将数组各项使用逗号 "," 隔开,
// 比如 [1,2,3].toSting 变成了"1,2,3",空数组 toString 就是空字符串
const _val = val.toString(); // _val 是空字符串

// 输出 "[object Object]"
console.log({} + []);
console.log({}.toString());

// 输出 true
console.log([] == ![]);
console.log(![]);
console.log([]);

// 输出 1
console.log(true + false);

