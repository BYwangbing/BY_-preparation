// leetcode-cn.com/problems/linked-list-cycle/
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
    let fastPointer = head, slowPointer = head;
    while (fastPointer !== null && slowPointer !== null) {
        if (fastPointer.next == null) return false;
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
        if (fastPointer === slowPointer) return true;
    }
    if (fastPointer === null || slowPointer === null) {
        return false
    }
};