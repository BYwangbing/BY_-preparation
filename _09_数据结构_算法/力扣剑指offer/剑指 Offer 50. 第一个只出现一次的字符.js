// https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }
    for (const [k, v] of [...map.entries()]) {
        if (v === 1) return k;
    }
    return ' ';
};
const s = "abaccdeff";
console.log(firstUniqChar(s));