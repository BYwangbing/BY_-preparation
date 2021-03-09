/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return Number(`${Math.abs(x)}`.split('').reverse().join('')) == x;
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const x_str = String(x);
  const middleIndex = parseInt(x_str.length / 2);
  for (let i = 0; i < middleIndex; i++) {
    if (x_str[i] !== x_str[x_str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
