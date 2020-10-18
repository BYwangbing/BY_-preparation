/*
 * @Author: your name
 * @Date: 2020-10-13 15:17:48
 * @LastEditTime: 2020-10-13 17:40:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \力扣\1013_24. 两两交换链表中的节点.js
 */
// https://leetcode-cn.com/problems/swap-nodes-in-pairs/
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
	if (head === null || head.next === null) return head
	const newHead = head.next
	head.next = swapPairs(newHead.next)
	newHead.next = head
	return newHead
}
/*
递归：递归的终止条件是链表中没有节点，或者链表中只有一个节点，此时无法进行交换。
如果链表中至少有两个节点，则在两两交换链表中的节点之后，原始链表的头节点变成新的链表的第二个节点，原始链表的第二个节点变成新的链表的头节点。链表中的其余节点的两两交换可以递归地实现。
在对链表中的其余节点递归地两两交换之后，更新节点之间的指针关系，即可完成整个链表的两两交换。

用 head 表示原始链表的头节点，新的链表的第二个节点，
用 newHead 表示新的链表的头节点，原始链表的第二个节点，
则原始链表中的其余节点的头节点是 newHead.next。

令 head.next = swapPairs(newHead.next)，表示将其余节点进行两两交换，交换后的新的头节点为 head 的下一个节点。
然后令 newHead.next = head，即完成了所有节点的交换。
最后返回新的链表的头节点 newHead。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/swap-nodes-in-pairs/solution/liang-liang-jiao-huan-lian-biao-zhong-de-jie-di-91/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
