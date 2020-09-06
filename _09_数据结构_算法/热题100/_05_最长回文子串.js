// https://leetcode-cn.com/problems/longest-palindromic-substring/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

};

/*
* 解法：中心扩散法
* 遍历字符串，然后区分偶数和奇数两种情况
* 同时进行两种中心扩散的方式，并取长度最大值
* 接着可以通过获取的长度和中心点获取到起始和结束的下标
* 若当前长度最大值大于原先的end-start，则获取新的end和start
* 最后通过start和end获取最终的结果
* */