// https://leetcode-cn.com/problems/string-to-integer-atoi/
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    const number = parseInt(str),
        INT_MAX = Math.pow(2, 31) - 1,
        INT_MIN = -Math.pow(2, 31);
    if (isNaN(number)) {
        return 0;
    }else if (number < INT_MIN || number > INT_MAX) {
        return number < INT_MIN ? INT_MIN : INT_MAX;
    }
    return number;
};
console.log(Math.pow(2, 31));