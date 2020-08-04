/*
    没有对参数做检验: 如果传入进来的不是对象或者数组，我们直接返回即可
    通过 typeof 判断是否对象的逻辑不够严谨  typeof null
    没有考虑数组的兼容
 */
// 判断对象
function isObject(x) {
    return Object.prototype.toString.call(x) === '[Object Object]'
}
// 函数需要校验参数，如果不是对象的话直接返回
function deepClone(source) {
    if (!isObject(source)){
        return source
    }
}