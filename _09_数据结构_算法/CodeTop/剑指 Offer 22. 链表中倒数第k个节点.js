function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  /*
        基本思路：双指针/快慢指针
        当快指针 fast 走了k步的时候慢指针slow 开始走
        当慢指针 fast 走出的时候（即超出边界）此时的 slow 位置即为链表中倒数第k个节点
    */

  let fast = head,
    slot = head;
  while (fast) {
    fast = fast.next;
    k--;
    if (k < 0) {
      slot = slot.next;
    }
  }
  return slot;
};

var getKthFromEnd = function (head, k) {
  //栈方法
  var stack = [];
  var ans;
  //所有节点入栈
  while (head) {
    stack.push(head);
    head = head.next;
  }
  //出栈第k个节点
  while (k > 0) {
    ans = stack.pop();
    k--;
  }
  return ans;
};
