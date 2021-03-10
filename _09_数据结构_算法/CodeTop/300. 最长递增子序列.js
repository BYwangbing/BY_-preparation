/*
dp[i]，表示以第i位作为结束字符子序列，能产生的最长上升序列长度

i前面的字符0到i用j表示。让第i位，分别跟在第j位作为结束字符子序列后面
nums[i] > nums[j]，dp[i] = dp[j] + 1。0到i会得到i个dp[i]，选最大值
dp包含数组每一位作为结束字符子序列的最长上升序列长度，选最大值

dp[i]：表示以nums[i]为当前最长递增子序列尾元素的长度
当 nums[i] > nums[j] 时
  nums[i]可以作为前1个是最长的递增子序列 dp[j] 新的尾元素
  而组成新的相对于dp[i]能够拼接的更长的递增子序列：dp[i] = dp[j] + 1；
  因为新的dp[i]能够拼接的最长长度取决于nums[i]这个新的尾元素，而这个nums[i]不一定大于nums[j]，所以也不一定大于dp[j]
  那么在i~j之间，最大的递增子序列 = Max(dp[i],dp[j]+1)
  即方程为：dp[i] = Max(dp[i],dp[j]+1)
当 nums[i] <= nums[j] 时 是下降了，不满足上升，跳过继续遍历下一个
初始化 为1，每个元素本身也是一个子序列，长度为1
* /

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let n = nums.length;
  if (n == 0) {
    return 0;
  }
  let dp = new Array(n).fill(1);
  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
};
