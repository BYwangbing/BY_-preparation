/*
 * @Author: your name
 * @Date: 2020-10-09 12:59:54
 * @LastEditTime: 2020-10-09 13:07:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \力扣\141. 环形链表.js
 */
// https://leetcode-cn.com/problems/linked-list-cycle/

function ListNode(val) {
	this.val = val
	this.next = null
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
	if (!head || !head.next) {
		return false
	}
	let fastPointer = head,
		slowPointer = head
	while (fastPointer !== null && slowPointer !== null) {
		if (fastPointer.next === null) return false
		fastPointer = fastPointer.next.next
		slowPointer = slowPointer.next
		if (fastPointer === slowPointer) return true
	}
	if (fastPointer === null || slowPointer === null) {
		return false
	}
}
