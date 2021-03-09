/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = [];
  if (s.length === 0) {
    return res;
  }
  findPalidrome(0, s, res);
  return res;
};

function findPalidrome(start, s, res, curArr = []) {
  if (start === s.length) {
    res.push(curArr);
    return;
  }

  for (let i = start; i < s.length; i++) {
    let subStr = s.slice(start, i + 1);
    if (subStr && isPal(subStr)) {
      findPalidrome(i + 1, s, res, [...curArr, subStr]);
    }
  }
}

// 判断是否是回文串
function isPal(str) {
  let len = Math.floor(str.length / 2);
  if (len === 0) {
    return true;
  }
  let add = str.length % 2 === 0 ? 0 : 1;
  let subStr = str.slice(0, len);
  for (let i = 0; i < len; i++) {
    if (subStr[len - i - 1] !== str[len + add + i]) {
      return false;
    }
  }
  return true;
}

var isPalindrome = function (x) {
  const x_str = String(Math.abs(x));
  const middleIndex = parseInt(x_str.length / 2);
  for (let i = 0; i < middleIndex; i++) {
    if (x_str[i] !== x_str[x_str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

const s = 'aab';
console.log(partition(s));
