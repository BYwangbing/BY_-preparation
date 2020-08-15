const arr = [];
const testObj = {};
console.log([] === ""); // false
console.log([] == "");  // true
arr.toString = () => 1;
console.log(arr === 1); // false
console.log(arr == 1); // true
arr.valueOf = () => 2;
console.log(arr == 2);  // true
arr.valueOf = () => testObj;
console.log(arr == testObj); // false
console.log([] ? true : false);
/*console.log(Number([]));
console.log(Boolean([]));*/
console.log([] == ![]);
console.log([] == true);
console.log(true == ![]);