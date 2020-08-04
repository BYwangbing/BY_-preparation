const a = "hello";
const b = ",world";
/*
const c = a.concat(b);
console.log(c);
*/
const arr1 = a.split("");
console.log(arr1);
/*
startsWith() 方法
    startsWith() 方法用于检测字符串是否以指定的子字符串开始。
    如果是以指定的子字符串开头返回 true，否则 false。
    startsWith() 方法对大小写敏感。
    语法：string.startsWith(searchvalue, start)
        * searchvalue	必需，要查找的字符串。
        * start	可选，查找的开始位置，默认为 0
 */

/*
trim() 方法 语法：string.trim()
    trim() 方法用于删除字符串的头尾空格。
    trim() 方法不会改变原始字符串。
 */
function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm, '');
}

/*
charAt() 方法可返回指定位置的字符。 string.charAt(index)
charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。 string.charCodeAt(index)
fromCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串。String.fromCharCode(n1, n2, ..., nX)
repeat() 方法字符串复制指定次数。string.repeat(count)
 */
const str = "HELLO WORLD";
console.log(str.charCodeAt(0), str.charAt(0));
console.log(String.fromCharCode(72));
console.log(str.repeat(2));

/*
substring() 方法用于提取字符串中介于两个指定下标之间的字符。
substring() 方法返回的子串包括 开始 处的字符，但不包括 结束 处的字符。
 */
console.log(str.substring(3));
console.log(str.substring(3, 7));
/*
    substr 返回字符串的一个子串，传入参数是起始位置和长度 stringObject.substr(start,length)
    start	必需。
    length	可选。子串中的字符数。必须是数值。如果省略了该参数，那么返回从 stringObject 的开始位置到结尾的字串。
 */
console.log('------substr-----');
console.log(str.substr(3));
console.log(str.substr(3, 7));
/*
slice(start, end) 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。 string.slice(start,end)
使用 start（包含） 和 end（不包含） 参数来指定字符串提取的部分。
提示： 如果是负数，则该参数规定的是从字符串的尾部开始算起的位置。
也就是说，-1 指字符串的最后一个字符，-2 指倒数第二个字符，以此类推。
 */
console.log(str.slice(-1));

/*
split() 方法用于把一个字符串分割成字符串数组。 string.split(separator,limit)
 如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字符之间都会被分割。
 */