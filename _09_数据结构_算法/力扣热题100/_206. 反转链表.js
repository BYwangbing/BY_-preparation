// https://leetcode-cn.com/problems/reverse-linked-list/
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let [prev, cur] = [null, head];
  // prev负责推进的，cur负责尾随的
  while (cur) {
    let temp = cur.next; // 暂存cur的下一节点
    cur.next = prev; // 将cur的next指针指向prev
    prev = cur; // 将prev更新为cur节点
    cur = temp; // 将cur指针推进一个节点
  }
  return prev;
};

/*
递归:
  链表分成两个部分： 第一个节点 余下的部分
  假设余下的部分是已经反转好的链表，那我们就只需要把这部分的最后一个节点指向原本的第一个节点，然后返回余下部分的 head。
*/
/*   @param {ListNode} head
  @return {ListNode} */
const reverseListII = (head) => {
  if (head === null || head.next === null) return head;
  const newHead = reverseListII(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};
