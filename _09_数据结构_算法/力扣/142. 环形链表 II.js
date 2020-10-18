/*
 * @Author: your name
 * @Date: 2020-10-10 15:33:04
 * @LastEditTime: 2020-10-10 15:37:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \力扣\142. 环形链表 II.js
 */
//leetcode-cn.com/problems/linked-list-cycle-ii/
https: function ListNode(val) {
	this.val = val
	this.next = null
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
	const hashSet = new Set()
	while (head !== null) {
		if (hashSet.has(head)) {
			return head
		}
		hashSet.add(head)
		head = head.next
	}
	return null
}
