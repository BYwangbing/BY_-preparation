function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let reserveList = function (head) {
    // 定义 两个 指针 p1 p2
    let p1 = head, p2 = null;
    while (p1) {
        let temp = p1.next; // 保存指向下一个节点的指针
        p1.next = p2;       // 将 p1 下一个节点指针指向 p2这个指针
        p2 = p1;            // 更新 p2 的表头
        p1 = temp;          // p1这个指针改变指向，指向下一个节点
    }
};