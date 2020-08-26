/*
* 思路：
* 传入两个字符串，先比较谁长谁短，遍历短的字符串，
* 两个for循环，外层循环从最大长度开始遍历，长度逐个递减，
* 内层循环从短字符串的最左边开始截取最大长度的字符串，
* 检查截取的字符串是否在长的字符串里面，直到找到匹配的字符串
* */
function findSubStr(str1, str2) {
    if (str1.length > str2.length) {
        [str1, str2] = [str2, str1];
    }
    let length = str1.length, commonStr = "";
    for (let j = length; j > 0; j--) {
        // 不同的长度有总共有i个可能，从做到右遍历
        for (let i = 0; i <= length - j; i++) {
            commonStr = str1.substr(i, j);
            if (str2.indexOf(commonStr) >= 0) {
                return commonStr;
            }
        }
    }
    return "";
}

let str1 = "aaaX3333", str2 = "baa333ccX3333333x";
console.log(findSubStr(str1, str2));