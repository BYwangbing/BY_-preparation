/*
 * @Author: your name
 * @Date: 2020-10-12 09:55:49
 * @LastEditTime: 2020-10-12 10:28:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \力扣\1011_416. 分割等和子集.js
 */
// https://leetcode-cn.com/problems/partition-equal-subset-sum/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
	// 求nums数组和
	let sum = nums.reduce((prev, cur) => prev + cur)
	// 当和为奇数时，表示不能平分为两个相等的子集，肯定不能满足
	if (sum % 2 === 1) return false
	sum = sum / 2
	let n = nums.length
	// 初始化二维数组 (n + 1)行，(sum/2 + 1)列
	const dp = []
	for (let i = 0; i < n + 1; i++) {
		dp[i] = []
		for (let j = 0; j < sum + 1; j++) {
			// base case，dp[..][0] = true 和 dp[0][..] = false，其余为false
			dp[i][j] = j === 0 ? true : false
		}
	}
	// 选择
	for (let i = 1; i < n + 1; i++) {
		for (let j = 1; j < sum + 1; j++) {
			// 当前背包容量j不够装下第i个物品的重量nums[i-1]时，只有选择不装
			if (j - nums[i - 1] < 0) {
				dp[i][j] = dp[i - 1][j]
			} else {
				// 有两种选择 不装 或 装，用 或 表示选哪种能装满
				dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]
			}
		}
	}
	// 所求结果
	return dp[n][sum]
}

/*
题目描述 给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
===> 给定数组 nums，是否存在一个子数组，该子数组的和等于 nums 元素和的一半。
===> 给定一个非空数组，和是 sum，能否找到这样的一个子序列，使其和为 2/sum

1、 题目转化
题目可以转化为0-1背包问题，如：
    一个可以装载重量为 sum/2 的背包 和 n个物品，每个物品的重量为 nums[i]，问是否存在一种能够恰好将背包装满的装法？
    sum为数组nums的和，n为nums数组的元素个数
2、解题思路
(1) dp数组的定义
dp[i][j] = x，表示对于前i个物品，当前背包的容量为j时;
    如果值x为true，说明能将背包装满
    如果值x为false，说明不能将背包装满

(2) 选择 和 状态
选择：装进背包 或 不装进背包
状态：背包的容量 和 可选择的物品(即nums元素)
状态转移：
    如果把第i个物品装入了背包(即nums[i]算入子集)，
        此时背包能否装满为 dp[i][j] = dp[i - 1][j - nums[i - 1]];
        j-nums[i-1] 表示 背包的剩余重量j减去当前i的重量nums[i - 1]，因为i是从 1 开始，数组索引是从 0 开始，所以第i个物品的重量是 nums[i - 1]
    如果不把第i个物品装入背包，此时dp[i][j] = dp[i - 1][j] (和上一个状态一样)
状态转移代码如下

    if (j - nums[i - 1] < 0) {
        dp[i][j] = dp[i-1][j]; // 背包容量不够装下nums[i-1]了，只能选择不装
    } else {
        dp[i][j] = dp[i-1][j] || dp[i-1][j - nums[i - 1 ]]; // 不装 或 装，看哪一个选择能装满
    }

（3）base case
    dp[..][0] = true，背包容量为0，相当于装满了
    dp[0][..] = false，没有物品了，相当于没法装满了
*/
