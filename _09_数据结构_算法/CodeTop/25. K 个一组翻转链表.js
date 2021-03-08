function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// 反转区间 [a, b) 的元素，左闭右开
const reverseList = function (a, b) {
  let [pre, cur] = [null, a];
  while (cur !== b) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
};
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var reverseKGroup = function (head, k) {
  if (head === null) return null;
  // 区间 [a, b) 包含 k 个待反转元素
  let a = head,
    b = head;
  for (let i = 0; i < k; i++) {
    //  不足 k 个，不需要反转
    if (b === null) return head;
    b = b.next;
  }
  // 反转前 k 个元素
  let newhead = reverseList(a, b);
  // 递归反转后续链表并连接起来
  a.next = reverseKGroup(b, k);
  return newhead;
};

/*
https://blog.csdn.net/M_Eve/article/details/112912560
先翻转以head开头的K个元素
将第K+1个元素作为head 递归调用reverseKGroup函数
将上述两个过程连接起来
*/
console.log(reverseKGroup([1, 2, 3, 4, 5], 2));
