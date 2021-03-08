/*
第一步：定义子问题
假设我们已经知道了 i-1 个股票的最大利润为 dp[i-1]，显然 i 个连续股票的最大利润要么为 dp[i-1] ，
要么就是就是 prices[i] - minprice (minprice 为前 i-1 支股票的最小值 )，在这两个数中我们取最大值

第二步：实现需要反复执行解决的子子问题部分
dp[i] = Math.max(dp[i−1], prices[i] - minprice)

第三步：识别并求解出边界条件
dp[0]=0

最后一步：把尾码翻译成代码，处理一些边界情况
因为我们在计算 dp[i] 的时候，只关心 dp[i-1] 与 prices[i]，
因此不用把整个 dp 数组保存下来，只需设置一个 max 保存 dp[i-1] 就好了。
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0,
    minprice = prices[0];
  for (let i = 0; i < prices.length; i++) {
    minprice = Math.min(minprice, prices[i]);
    max = Math.max(max, prices[i] - minprice);
  }
  return max;
};
