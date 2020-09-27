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