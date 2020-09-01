/*请使用最基本的遍历来实现判断字符串 a 是否被包含在字符串 b 中，并返回第一次出现的位置（找不到返回 -1）*/
// exec() 方法用于检索字符串中的正则表达式的匹配。
function myIndexOf(T) {
    let reg = new RegExp(T),
        res = reg.exec(this);
    return res === null ? -1 : res.index;
}

/*查找字符串中出现最多的字符和个数*/
