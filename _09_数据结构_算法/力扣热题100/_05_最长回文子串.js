/*
// https://leetcode-cn.com/problems/longest-palindromic-substring/
/!**
 * @param {string} s
 * @return {string}
 *!/
var longestPalindrome = function (s) {
    if (!s || s.length < 2) return s;
    let length = s.length;
    let res = "";
    for (let i = 0; i < length; i++) {
        let list_1 = getPalindrome(s, i, i); // 为奇数的情况
        let list_2 = getPalindrome(s, i, i + 1); // 为偶数的情况
        res = list_1.length > res.length ? list_1 : res;
        res = list_2.length > res.length ? list_2 : res
    }
    return res;
};
const getPalindrome = (s, left, right) => {
    while (left >= 0 && right <= s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.substr(left + 1, right - left - 1);
};
/!*
* 解法：中心扩散法
* 遍历字符串，然后区分偶数和奇数两种情况
* 同时进行两种中心扩散的方式，并取长度最大值
* 接着可以通过获取的长度和中心点获取到起始和结束的下标
* 若当前长度最大值大于原先的end-start，则获取新的end和start
* 最后通过start和end获取最终的结果
* *!/
let s = 'bcdcba';
console.log(longestPalindrome(s));*/
var longestDupSubstring = function (S) {
    let temArr = [];
    function subLong(j = 0, len = 1) {
        let temStr = S.substr(j, len);
        if (S.indexOf(temStr) !== S.lastIndexOf(temStr) && len < S.length - j) {
            temArr.includes(temStr) ? temArr : temArr.push(temStr);
            len++;
            subLong(j, len)
        } else if (j < S.length) {
            len = 1;
            j++;
            subLong(j, len)
        }
    }

    subLong(0, 1);
    if (!temArr.length) {
        return '';
    } else {
        temArr.sort((a, b) => -a.length + b.length);
        return temArr[0];
    }
};
const s = 'abababbabab';
console.log(longestDupSubstring(s));