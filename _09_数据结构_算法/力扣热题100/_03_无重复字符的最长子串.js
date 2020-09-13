// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const length = s.length;
    const map = new Map();
    let start = 0, end = 0, maxLength = 0;
    while (end <= length) {
        if (!map.has(s[end])) {
            map.set(s[end], end);
            maxLength = Math.max(maxLength, map.size);
            end++;
        } else {
            while (start <= map.get(s[end])) {
                map.delete(s[start]);
                start++;
            }
        }
    }
    return maxLength;
};
/*
* 使用双指针思路（滑动窗口）
* start和end指针初始都是指向字符串的首部
* 紧接着end向后移动，每向后移动一步，都需要确认start和end之间的字符串是否有重复的字符
*
* 如果直接使用字符串的api, 比如indexOf，每一次查询的时间复杂度是O(n)
* 也可以使用hash，优化查询的过程，每一次使用hash查询的时间复杂度是O(1)。
*
* 当遇到重复的字符时，说明以当前start对应的字符，开头的最长的无重复字符的子串已经确定了。
* 以start字符开头的字符已经不会有更长的无重复子串了
*
* 我们需要将start的指针向前移动一步
* 重复上述的过程，直到end指针指向字符串的尾部结束
* */