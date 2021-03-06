// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const length = s.length;
  const map = new Map();
  let start = 0,
    end = 0,
    maxLength = 0;
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

// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring_II = function (s) {
  const arr = [];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let temp = arr.indexOf(s[i]);
    // 如果出现过
    if (temp !== -1) {
      arr.splice(0, temp + 1); //从数组开头到当前字符串全部截取掉
    }
    arr.push(s.charAt(i));
    max = Math.max(arr.length, max);
  }
  return max;
};

const s = 'abccd';
console.log(lengthOfLongestSubstring(s));

/*
  这道题目主要用到的思想是: 滑动窗口

  什么是滑动窗口？

  其实滑动窗口我们可以看出一个队列，比如题目中 abcabcbb, 进入这个队列（窗口）为abc此时满足题目要求，
  当再进入一个a,也就是当窗口向右扩大的时候，队列变成了abca,这个时候不满足要求，所以，我们要移动这个队列。

  具体应该如何移动呢？

  我们只需要把队列的左边的元素移除出去就可以了,直到满足题目要求!

  一直维持这样的队列，找出队列出现最长的长度时候，求出解。


  具体实现:
  在js中我们使用一个数组来维护滑动窗口 遍历字符串，判断字符串是否在滑动窗口数组里面

  不在则push进数组
  在则删除滑动窗口数组里相同字符以及相同字符前的字符，然后将当前字符push进数组
  然后将max更新为当前最长子串的长度
  遍历完成，返回max即可。
  */
