/*需求:编写一个函数，将如下字符串'get-element-by-id'修改为驼峰表示法'getElementById'*/
function transformStr(str) {
    let newStr = '';
    let arr = str.toString().split('-');
    for (let i = 0, length = arr.length; i < length; i++) {
        if (i === 0) {
        } else {
            newStr += arr[i].substr(0, 1).toLocaleUpperCase();
            newStr += arr[i].substr(1, arr[i].length)
        }
    }
    return newStr;
}

function _transformStr(str) {
// \w 元字符用于查找单词字符。
    return str.replace(/-\w/g, function (x) {
        return x.slice(1).toLocaleUpperCase();
    })
}
let strHump = 'get-element-by-id';
console.log(_transformStr(strHump));