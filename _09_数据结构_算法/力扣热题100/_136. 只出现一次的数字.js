// https://leetcode-cn.com/problems/single-number/

// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。
// 找出那个只出现了一次的元素。
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1)
        }
    }
    for (const [u, v] of [...map.entries()]){
        if (v === 1) return u;
    }
};

const nums = [4, 1, 2, 1, 2];

const singleNumberII = (nums) => {
  let ans = 0;
  for (let num of nums){
      ans = ans^num;
  }
  return ans;
};

// a异或b异或a = b

console.log(singleNumber(nums));