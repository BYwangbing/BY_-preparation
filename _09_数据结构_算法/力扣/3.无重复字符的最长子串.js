// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
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
