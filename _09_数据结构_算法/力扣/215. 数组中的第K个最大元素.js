/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  if (nums.length <= 0) return -1;
  nums.sort((a, b) => a - b);
  return nums.splice(k - 1, 1)[0];
};

const nums = [3, 2, 1, 5, 6, 4],
  k = 2;
console.log(findKthLargest(nums, k));
