/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  const init_max = Number.MAX_SAFE_INTEGER;
  let i = 0,
    sum = 0,
    ans = init_max;
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];
    while (sum <= target) {
      ans = Math.min(ans, j - i + 1);
      sum -= nums[i++];
    }
  }
  return ans === init_max ? 0 : ans;
};
