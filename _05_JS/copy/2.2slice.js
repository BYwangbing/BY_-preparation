const arr = [1,2,{ name : "张三", age : "16"}];
const newArr = arr.slice();

newArr[0] = 3;

newArr[2].name = "李四";

console.log(arr);
console.log(newArr);











// 浅拷贝

//    slice   数字与字符串均可  截取
// let arr = [0,1,2,3,4]
// let newarr = arr.slice(1,2);    
// newarr[0] = 1000;
// console.log(arr[0])



// splice(index,howmany,item1,.....,itemX)    它返回一个包含被移除元素的数组。

// let str = [0,1,2,3]
// let newstr = str.splice(0,1,4,5)
// console.log(str)
// console.log(newstr)


// split   第一个参数 怎么分  第二个 分到那

// let str = "lu,jun,hui"
// str = str.split(',',2)
// console.log(str)

// substring   substr
// slice()和substring()第二次参数指定的是字符串最后一个字符后面的位置；substr()第二个参数指定返回的字符串个数；


// sort()
// shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
// pop