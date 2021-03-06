/*
不连续的数的最大和
既然不连续，那么表明要比较的值就是当前num[i]与前一个元素之前的最大和sum[i-2]的和与sum[i-1]的最大值；

只要sum[i - 2] + num[i] >= sum[i - 1]，那么sum[i]的最大值就是sum[i - 2] + num[i]，
如果小与，那么就要取sum[i - 1]一样的值，接着进行下一位的判断；
边界就是i= 0， max = 0，sum[-1] = 0;

代码中，用pre代表间隔位的最大的合sum[i-2],cur表示当前相邻位的和sum[i - 1]，
每次遍历需要更新相邻位的最大值，以便下次循环作为i+1位的间隔位的计算；

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let pre = 0,
    cur = 0,
    i = 0,
    length = nums.length;
  while (i < length) {
    [pre, cur] = [Math.max(pre, cur), pre + nums[i++]];
  }
  return Math.max(pre, cur);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const dp = [0, 0];
  for (let i = 0; i < nums.length; i++) {
    dp[i + 2] = Math.max(dp[i + 1], dp[i] + nums[i]);
  }
  return dp.pop();
};

/*
始终维护最大值，对于每一个房屋来讲，小偷只有两个选择，1:偷, 2:不偷；
如果小偷选择偷，则必是小偷在前前一个房屋的最优解 + 当前房屋的解
如果小偷选择不偷，则这个小偷的最大盗窃额与到前一个房屋的最大盗窃额是一样的
对于每一间房屋我们都做出两种方案的比较取最大值，始终维护最大值，结果输出最大值即可
*/
function rob(nums) {
  let length = nums.length;
  if (length === 0) return 0;
  const dp = [0, nums[0]];
  for (let i = 2; i <= length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }
  return dp[length];
}
