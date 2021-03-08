/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // return nums.reduce((prev, cur) => prev ^ cur);
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  for (const [u, v] of [...map.entries()]) {
    if (v === 1) return u;
  }
};
