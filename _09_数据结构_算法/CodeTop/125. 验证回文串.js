/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charCodeAt(i) != s.charCodeAt(j)) {
      return false;
    }
  }
  return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // 全部转为小写，并且获取字母和数字字符
  const arr = s.toLocaleLowerCase().match(/[a-z0-9]/g);
  // 为null返回true，类似空字符串
  if (!arr) return true;
  // 左右指针
  let l = 0,
    r = arr.length - 1;
  while (l <= r) {
    if (arr[l] === arr[r]) {
      // 相等，向中间移动
      l++;
      r--;
    } else {
      // 不等，直接返回false
      return false;
    }
  }
  return true;
};

/*
转为小写，并获取字母和数字字符；
定义左右指针，相同则向中间移动，不同则直接放回false
*/
