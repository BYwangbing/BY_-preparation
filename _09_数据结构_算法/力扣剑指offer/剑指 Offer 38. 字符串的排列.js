// https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
    let result = [];
    if (s.length === 1) {
        result.push(s)
    }
    if (s.length > 1) {
        for (let i = 0; i < s.length; i++) {
            let str = s[i];
            let res = s.slice(0, i) + s.slice(i + 1);
            let preResult = permutation(res);
            for (let j = 0; j < preResult.length; j++) {
                let temp = str + preResult[j];
                result.push(temp);
            }
        }
    }
    return [...new Set(result)];
};
let s = "Mate";
console.log(permutation(s));