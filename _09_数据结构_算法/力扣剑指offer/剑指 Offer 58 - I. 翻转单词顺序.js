// https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.trim().split(/\s+/).reverse().join(' ');
};
let s = '  hello world!  ';
console.log(reverseWords(s));