/*需求:编写一个函数，将如下字符串驼峰表示法'getElementById'修改为'get-element-by-id'*/
function transformStr(str) {

}

function _transformStr(str) {
// \w 元字符用于查找单词字符。
    return str.replace(/-\w/g, function (x) {
        return x.slice(1).toLocaleUpperCase();
    })
}
let strHump = 'get-element-by-id';
console.log(_transformStr(strHump));