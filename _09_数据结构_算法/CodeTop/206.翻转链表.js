function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/* 迭代 */
/*   @param {ListNode} head
  @return {ListNode} */
const reverseList = function (head) {
  let [prev, cur] = [null, head];
  while (cur) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
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
