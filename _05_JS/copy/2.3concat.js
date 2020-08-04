const arr = [1,2,{ name : "张三", age : "16"}];
const newArr = arr.concat();
newarr[0] = 3;
newarr[2].name = "李四";
console.log(arr);
console.log(newArr);