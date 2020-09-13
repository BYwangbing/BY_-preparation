// https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let arr = s.trim().split("");
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === " ") continue;
        result[arr.length -1 - i] = arr[i];
    }
    return result.join(" ");
};
let s = '  hello world!  ';
console.log(reverseWords(s));