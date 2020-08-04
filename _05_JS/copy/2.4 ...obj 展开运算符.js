// 对数组

const arr = [1, 2, {name: "张三", age: "16"}];
const newArr = [...arr];

console.log("=====arr改变前");
console.log(arr);
console.log(newArr);
console.log("=====arr改变后");
newArr[0] = 3;
newArr[2].name = "李四";

console.log(arr);
console.log(newArr);

// 对于对象进行浅拷贝

const obj = {
    name: "张三",
    age: "16",
    like: ['吃饭', '睡觉', '敲代码']
};
const newObj = {...obj};
newObj.like.push('打豆豆');
newObj.name = "李四";
console.log("=====newObj改变后");
console.log(obj);
console.log(newObj);