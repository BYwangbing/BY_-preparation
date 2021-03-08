function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head || !head.next) {
    return false;
  }
  let slow = head;
  let fast = head.next;
  while (fast !== null && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
};

var hasCycle = function (head) {
  if (!head || !head.next) {
    return false;
  }
  let slowPointer = head;
  let fastPointer = head.next;
  while (fastPointer !== null && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
    if (fastPointer === slowPointer) {
      return true;
    }
  }
  return false;
};
