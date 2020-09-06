// https://leetcode-cn.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let result = target - nums[i];
        if (map.has(result)) {
            return [map.get(result), i];
        }
        map.set(nums[i], i)
    }
};