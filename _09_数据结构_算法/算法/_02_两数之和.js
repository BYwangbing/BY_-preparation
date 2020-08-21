/*给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = (nums, target) => {
    let hashSet = {};                           // 存放出现过的数字，和对应的索引
    for (let i = 0; i < nums.length; i++) {     // 遍历元素
        let val = target - nums[i];
        if (val in hashSet) {
            return [hashSet[val], i]            // 直接返回 [目标元素的索引, 当前索引]
        }
        hashSet[nums[i]] = i;                    // 每次都存入当前元素和对应的索引
    }
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var _twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let dif = target - nums[i];
        if (map.has(dif)) {
            return [map.get(dif), i]
        }
        map.set(nums[i], i);
    }
};
let nums = [2, 7, 11, 15], target = 18;
console.log(twoSum(nums, target));
console.log(_twoSum(nums, target));