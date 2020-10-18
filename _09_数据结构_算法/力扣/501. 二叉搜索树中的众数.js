/*
 * @Author: your name
 * @Date: 2020-09-24 19:23:40
 * @LastEditTime: 2020-09-24 19:46:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \力扣\501. 二叉搜索树中的众数.js
 */
function TreeNode(val) {
	this.val = val
	this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
	const map = new Map()
	let maxCount = 0
	const result = []
	const dfs = (node) => {
		if (node === null) return
	}
}

/*
声明一个 map 记录每个节点出现的次数,并且记录最大出现次数
遍历二叉树(DFS 或者 BFS)
遍历 map 找出频率等于最大出现次数的数
*/
