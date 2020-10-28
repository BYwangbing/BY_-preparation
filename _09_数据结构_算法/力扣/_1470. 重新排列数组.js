// https://leetcode-cn.com/problems/shuffle-the-array/
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let res = nums.splice(n);
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        result.push(nums[i]);
        result.push(res[i])
    }
    return result
};

let nums = [2, 5, 1, 3, 4, 7], n = 3;
console.log(shuffle(nums, n));