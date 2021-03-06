/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let length = nums.length;
  if (nums[0] > 0 || nums[length - 1] < 0) return [];
  let res = [];
  for (let i = 0; i < length - 2; i++) {
    // if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1,
      right = length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum > 0) {
        right--; // 数组有序，当相加更大时，需把右游标-1，即right--
      } else {
        left++; // 数组有序，当相加更小时，需把左游标+1，即left++
      }
    }
  }
  return res;
};
nums = [-2, 0, 0, 2, 2];
console.log(threeSum(nums));

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
    map.set(nums[i], i);
  }
};
