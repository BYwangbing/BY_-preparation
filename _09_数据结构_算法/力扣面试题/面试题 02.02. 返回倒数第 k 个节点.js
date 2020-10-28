// https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci/
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function (head, k) {
    const res = [];
    while (head) {
        res.push(head.val);
        head = head.next;
    }
    return res[res.length - k]
};