/*——for 语句: 最传统——*/
var arr = [1, 2, 4, 6];
for (var i = 0, len = arr.length; i < len; i++) {
    console.log(arr[i])
}
/*——forEach 语句——*/
arr.forEach(function (item) {
    console.log(item);
});
/*——for-in 语句——*/
// for-in 循环只遍历可枚举属性
var obj = {
    name: 'test',
    color: 'red',
    day: 'sunday',
    number: 5
};
for (var key in obj) {
    console.log(obj[key])
}
/*——for-of 语句——*/
// for-of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）
var _arr = [{name: 'bb'}, 5, 'test'];
for (item of _arr) {
    console.log(item)
}

/*
for-of 和 for-in 的区别
    for-in 语句以原始插入顺序迭代对象的可枚举属性。
    for-in会把继承链的对象属性都会遍历一遍,所以会更花时间.
    for-of 语句只遍历可迭代对象的数据。
*/
/*——map 方法 (不改变原数组)——*/
var fireArr = arr.map(current => current * 5);
console.log(fireArr);
/*——reduce 方法——*/
// 让数组中的前项和后项做某种计算,并累计最终值
var wallets = [4, 7.8, 3];
var totalMoney = wallets.reduce(function (countedMoney, wallet) {
    return countedMoney + wallet.money;
}, 0);
console.log(totalMoney);
