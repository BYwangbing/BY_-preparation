/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // return nums.sort((a, b) => b - a)[k - 1]
  if (nums.length === 0) return -1;
  // sort的时间复杂度是 O（n log n）
  nums.sort((a, (b) => a - b));
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - k) return nums[i];
  }
};
