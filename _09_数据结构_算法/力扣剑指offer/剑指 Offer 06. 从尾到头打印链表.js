/*
 * @Author: your name
 * @Date: 2020-10-10 16:02:39
 * @LastEditTime: 2020-10-10 16:11:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \力扣\剑指 Offer 06. 从尾到头打印链表.js
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
	const stack = []
	let node = head
	while (node) {
		stack.push(node.val)
		node = node.next
	}
	const reserve = []
	while (stack.length) {
		reserve.push(stack.pop())
	}
	return reserve
}
