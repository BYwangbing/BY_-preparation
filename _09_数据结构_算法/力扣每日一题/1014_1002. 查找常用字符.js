// https://leetcode-cn.com/problems/find-common-characters/
/**
 * @name 主函数
 * @param {string[]} A 需要判断的数组
 * @return {string[]} 返回相同字符串组成的数组
 */
var commonChars = function (A) {
    return A.reduce(((previousValue, currentValue) => getCommon(previousValue, currentValue)))
};
/**
 * @name 获取两个字符串相同点
 * @param {string} str1 第一个字符串
 * @param {string} str2 第二个字符串
 * @return {array} 返回相同字符串组成的数组
 */
const getCommon = (str1, str2) => {
    const map = new Map(); // 设置哈希映射存储字母出现次数
    for (let i = 0; i < str1.length; i++) {
        // 遍历 a 字符串，并存储字母及其次数
        const aData = map.get(str1[i]);
        aData ? map.set(str1[i], aData + 1) : map.set(str1[i], 1)
    }
    const result = []; // 设置共同字符串
    for (let i = 0; i < str2.length; i++) {
        // 遍历 b 字符串，将其含有和 a 相同的取出来
        const bData = map.get(str2[i]);
        if (bData) {
            result.push(str2[i]);
            map.set(str2[i], bData - 1)
        }
    }
    return result
};
/*
* 先找到判断两个字符串相同点 再循环判断所有字符串相同点
* 如何判断 2 个字符串相同点呢？
// 1. 设置哈希
const map = new Map();

// 2. 遍历 a 字符串，将其每个字母及其次数统计起来
for (let i = 0; i < a.length; i++) {
  // ...
}

// 3. 设置返回数组
const result = [];

// 4. 遍历 b 字符串，判断它的字母在 map 中是否存在次数 > 1
for (let i = 0; i < b.length; i++) {
  // ...
}

// 5. return result

* */