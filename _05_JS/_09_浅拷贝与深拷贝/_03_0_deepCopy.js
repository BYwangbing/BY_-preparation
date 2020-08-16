
function _deepCopy(source) {
    let target = {};
    for (let i in source) {
        if (source.hasOwnProperty(i)) {
            if (typeof source[i] === 'object') {
                target[i] = _deepCopy(source[i]) // // 注意这里
            } else {
                target[i] = source[i]
            }
        }
    }
    return target
}

/*
    没有对参数做检验: 如果传入进来的不是对象或者数组，我们直接返回即可
    通过 typeof 判断是否对象的逻辑不够严谨  typeof null
    没有考虑数组的兼容
    其实递归方法最大的问题在于爆栈，当数据的层次很深是就会栈溢出
 */
