/*
 * @Author: your name
 * @Date: 2020-10-09 13:18:24
 * @LastEditTime: 2020-10-12 16:41:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \力扣\1143. 最长公共子序列.js
 */
// https://leetcode-cn.com/problems/longest-common-subsequence/

/*
最长公共子序列（Longest Common Subsequence，简称 LCS）
所谓子序列，就是要保留原始顺序，但可以是不连续的。
解题思路：
1.确定状态 其中 dp[i][j] 表示 S1 的前 i 个字符与 S2 的前 j 个字符最长公共子序列的长度 串text1[1…i]与text2[1…j]的最长公共子序列
2.转移方程
当 S1i == S2j 时   dp[i][j] = dp[i-1][j-1] + 1;
当 S1i != S2j 时   dp[i][j] = max(dp[i-1][j],dp[i][j-1]);

当 S1i == S2j 时，那么就能在 S1 的前 i-1 个字符与 S2 的前 j-1 个字符最长公共子序列的基础上再加上 S1i 这个值，最长公共子序列长度加 1，即 dp[i][j] = dp[i-1][j-1] + 1。
当 S1i != S2j 时，此时最长公共子序列为 S1 的前 i-1 个字符和 S2 的前 j 个字符最长公共子序列，或者 S1 的前 i 个字符和 S2 的前 j-1 个字符最长公共子序列，取它们的最大者，即 dp[i][j] = max{ dp[i-1][j], dp[i][j-1] }

3.边界情况 全部初始化为0
*/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
	var dp = []
	var i = 0,
		j = 0
	for (i = 0; i <= text1.length; i++) {
		dp[i] = []
	}
	for (i = 0; i <= text1.length; i++) {
		for (j = 0; j <= text2.length; j++) {
			if (i == 0) {
				dp[i][j] = 0
				continue
			}
			if (j == 0) {
				dp[i][j] = 0
				continue
			}
			if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
				dp[i][j] = dp[i - 1][j - 1] + 1
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
			}
		}
	}
	return dp[text1.length][text2.length]
}
let text1 = 'abcde',
	text2 = 'ace'

console.log(longestCommonSubsequence(text1, text2))

let data = [
	{ TYPE: '01', REMARK: '休假' },
	{ TYPE: '03', REMARK: '在班' },
	{ TYPE: '03', REMARK: '在班' },
	{ TYPE: '02', REMARK: '上海出差' },
	{ TYPE: '02', REMARK: '北京出差' },
	{ TYPE: '04', REMARK: '休息' },
	{ TYPE: '04', REMARK: '休息' },
]
let newdata = []
for (let k in data) {
	newdata.push({
		...data[k],
		KEY: data[k].TYPE + data[k].REMARK,
	})
}
// console.log(newdata)

let result = []
let map = {}
for (let k = 0; k < newdata.length; k++) {
	if (!map[newdata[k].KEY]) {
		result.push({
			...newdata[k],
			COUNT: 1,
		})
		map[newdata[k].KEY] = newdata[k]
	} else {
		for (let j = 0; j < result.length; j++) {
			if (result[j].KEY == newdata[k].KEY) {
				result[j].COUNT++
				break
			}
		}
	}
}
console.log(result)

let arr = [
	{ id: '1001', value: '111' },
	{ id: '1001', value: '11111' },
	{ id: '1002', value: '25462' },
	{ id: '1002', value: '23131' },
	{ id: '1002', value: '2315432' },
	{ id: '1003', value: '333333' },
]
var map = {},
	dest = []
for (var i = 0; i < arr.length; i++) {
	var ai = arr[i]
	if (!map[ai.id]) {
		dest.push({
			id: ai.id,
			data: ai.value + ',',
		})
		map[ai.id] = ai
	} else {
		for (var j = 0; j < dest.length; j++) {
			var dj = dest[j]
			if (dj.id == ai.id) {
				dj.data += ai.value + ','
				break
			}
		}
	}
}
console.log(map)
console.log(dest)
