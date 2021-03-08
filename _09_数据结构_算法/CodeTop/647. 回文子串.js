/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let res = 0; //记录结果
  for (let i = 0; i < s.length; i++) {
    let str = ''; //正向组合字符串
    let restr = ''; //反向组合字符串
    for (let j = i; j < s.length; j++) {
      str += s[j];
      restr = s[j] + restr;
      if (str == restr) res++;
    }
  }
  return res;
};

/*
用双循环来遍历，利用两个字符串来存储字符串组合结果，一个正向存储，一个反向存储，每次比较它们是否相等。相等就+1。
*/

var countSubstrings = function (s) {
  const n = s.length;
  let ans = 0;
  for (let i = 0; i < 2 * n - 1; ++i) {
    let l = i / 2,
      r = i / 2 + (i % 2);
    while (l >= 0 && r < n && s.charAt(l) == s.charAt(r)) {
      --l;
      ++r;
      ++ans;
    }
  }
  return ans;
};
