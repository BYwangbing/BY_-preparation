/*
js中字符串转数字的方法
    1. parseInt()函数和parseFloat()函数
        * parseInt（string ,radix）
            * string：被解析的字符串
            * radix：表示要解析的 数字的基数，默认是十进制，如果radix<2或>36,则返回NaN
    2. Number()强制转换
    3. js弱转换
 */
/* 一、parseInt()函数和parseFloat()函数 */
console.log(parseInt('123') === 123);
console.log(parseFloat('10.09') === 10.09);
/* 二、Number()强制转换 */
console.log(Number('10.09') === 10.09);
/* 三、js弱转换 */
console.log(+'10.09' === 10.09);

/*
js中将数字转换为字符串
    1.value.toString()
    2."" + value
    3.String(value)
 */
const value = 1009;
console.log(typeof value);
console.log(typeof value.toString());
console.log(typeof ("" + value));
console.log(typeof String(value));

