/*parseFloat() 将一个字符串转换成一个浮点数字

toFixed() 方法可把 Number 四舍五入为指定小数位数的数字
*/
function parseToMoney(num) {
    num = parseFloat(num.toFixed(3));
    let [integer, decimal] = String.prototype.split.call(num, '.');
    integer = integer.replace(/\d(?=d{3})+$/g, '$&,');
}

// 保留三位小数
parseToMoney(1234.56); // return '1,234.56'
parseToMoney(123456789); // return '123,456,789'
parseToMoney(1087654.321); // return '1,087,654.321'
/*
* 实现思路是将数字转换为字符数组，再循环整个数组， 每三位添加一个分隔逗号，最后再合并成字符串
* */
function numFormat(num) {
    num = num.toString().split(".");  // 分隔小数点
    var arr = num[0].split("").reverse();  // 转换成字符数组并且倒序排列
    var res = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (i % 3 === 0 && i !== 0) {
            res.push(",");   // 添加分隔符
        }
        res.push(arr[i]);
    }
    res.reverse(); // 再次倒序成为正确的顺序
    if (num[1]) {  // 如果有小数的话添加小数部分
        res = res.join("").concat("." + num[1]);
    } else {
        res = res.join("");
    }
    return res;
}

var a = 1234567894532;
var b = 673439.4542;
console.log(numFormat(a)); // "1,234,567,894,532"
console.log(numFormat(b)); // "673,439.4542"

/*——使用JS自带的函数 toLocaleString——*/
// toLocaleString() 方法返回这个数字在特定语言环境下的表示字符串
var c = 1234567894532;
var d = 673439.454234;

console.log(c.toLocaleString());  // "1,234,567,894,532"
console.log(d.toLocaleString());  // "673,439.454"  （小数部分四舍五入了）
// 小数部分会根据四舍五入只留下三位

function f(number) {
    number = number.toString().split(".");
    let arr = number[0].split("").reverse();
    let res = [];
    for (let i = 0; i < number[0].length; i++) {
        if (i % 3 === 0 && i !== 0) {
            res.push(",")
        }
        res.push(arr[i]);
    }
    res.reverse();
    if (number[1]) {
        res = res.join().concat("." + number[1])
    } else {
        res = res.join()
    }
    return res;
}