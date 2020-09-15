// https://leetcode-cn.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let num = String(Math.abs(x)).split("");
    let result = num.reverse().join("");
    if (result < -(2 ** 31) || result > (2 ** 31 - 1)) return 0;
    return (x > 0) ? result : -result;
};
console.log(reverse(-120));