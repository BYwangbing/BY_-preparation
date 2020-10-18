/*
 * @Author: your name
 * @Date: 2020-10-15 12:42:38
 * @LastEditTime: 2020-10-15 13:47:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \力扣\1015_116. 填充每个节点的下一个右侧节点指针.js
 */
// https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/

function Node(val, left, right, next) {
	this.val = val === undefined ? null : val
	this.left = left === undefined ? null : left
	this.right = right === undefined ? null : right
	this.next = next === undefined ? null : next
}

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
	if (root === null) return root
	// / 初始化队列同时将第一层节点加入队列中，即根节点
	const queue = [root]
	// 外层的 while 循环迭代的是层数
	while (queue.length) {
		const length = queue.length
		// 遍历这一层的所有节点
		for (let i = 0; i < length; i++) {
			// 从队首取出元素
			const node = queue.shift()
			// 连接
			if (i < length - 1) node.next = queue[0]
			// 拓展下一层节点
			if (node.left !== null) queue.push(node.left)
			if (node.right !== null) queue.push(node.right)
		}
	}
	return root
}

const root = {
	$id: '1',
	left: {
		$id: '2',
		left: { $id: '3', left: null, next: null, right: null, val: 4 },
		next: null,
		right: { $id: '4', left: null, next: null, right: null, val: 5 },
		val: 2,
	},
	next: null,
	right: {
		$id: '5',
		left: { $id: '6', left: null, next: null, right: null, val: 6 },
		next: null,
		right: { $id: '7', left: null, next: null, right: null, val: 7 },
		val: 3,
	},
	val: 1,
}
console.log(connect(root))
