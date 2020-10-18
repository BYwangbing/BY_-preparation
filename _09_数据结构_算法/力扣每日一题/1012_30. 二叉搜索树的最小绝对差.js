/*
 * @Author: your name
 * @Date: 2020-10-12 17:16:30
 * @LastEditTime: 2020-10-12 17:31:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \力扣\1012_30. 二叉搜索树的最小绝对差.js
 */
// https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/

function TreeNode(val) {
	this.val = val
	this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
	// Number.MAX_SAFE_INTEGER 常量表示在 JavaScript 中最大的安全整数
	let ans = Number.MAX_SAFE_INTEGER,
		pre = -1
	const dfs = (root) => {
		if (root === null) return
		dfs(root.left)
		if (pre === -1) {
			pre = root.val
		} else {
			ans = Math.min(ans, root.val - pre)
			pre = root.val
		}
		dfs(root.right)
	}
	dfs(root)
	return ans
}
/*
二叉搜索树中序遍历得到的值序列是递增有序的
用 pre 变量保存前驱节点的值，这样即能边遍历边更新答案，不再需要显式创建数组来保存，需要注意的是 pre 的初始值需要设置成任意负数标记开头，下文代码中设置为 -1−1。
*/
