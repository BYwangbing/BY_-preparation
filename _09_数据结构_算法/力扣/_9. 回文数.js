/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;
    if (x < 10) return true;
    return String(x) === String(x).split("").reverse().join("");
};
const isPalindromeII = x => {
    if (x < 0) return false;
    if (x < 10) return true;
    x = x.toString();
    for (let i = 0, length = x.length; i < length / 2; i++) {
        if (x[i] !== x[length - 1 - i]) {
            return false;
        }
    }
    return true;
};