// https://leetcode-cn.com/problems/maximum-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let sum = 0, max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        max = Math.max(sum, max);
        if (sum < 0) sum = 0;
    }
    return max;
};