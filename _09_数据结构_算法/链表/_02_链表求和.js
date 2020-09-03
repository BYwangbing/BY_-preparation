/*
* 给定两个用链表表示的整数，每个节点包含一个数位。
* 这些数位是反向存放的，也就是个位排在链表首部。
* 编写函数对这两个整数求和，并用链表形式返回结果。
* */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let res = new ListNode(null);
    let headPointer = res, prev = 0;
    while ((l1 && l2) || prev){
        sum = (l1 && l1.val) + (l2 && l2.val) + prev;

    }
};