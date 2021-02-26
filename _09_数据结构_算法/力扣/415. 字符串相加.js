/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  if (num2 === '0') return num1;
  if (num1 === '0') return num2;
  let ans = '',
    up = 0;
  let i = num1.length - 1,
    j = num2.length - 1;
  while (i >= 0 || j >= 0) {
    let m = i >= 0 ? num1.charCodeAt(i--) - '0'.charCodeAt() : 0;
    let n = j >= 0 ? num2.charCodeAt(j--) - '0'.charCodeAt() : 0;
    let temp = m + n + up;
    up = Math.floor(temp / 10);
    ans = (temp % 10) + ans;
  }
  if (up === 1) ans = up + ans;
  return ans;
};
