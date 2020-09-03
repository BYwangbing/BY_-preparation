function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} pHead
 * @return {ListNode}
 */
let reserveList = function (pHead) {
    /* // 定义 两个 指针 p1 p2
     let p1 = pHead, p2 = null;
     while (p1) {
         let temp = p1.next; // 保存指向下一个节点的指针
         p1.next = p2;       // 将 p1 下一个节点指针指向 p2这个指针
         p2 = p1;            // 更新 p2 的表头
         p1 = temp;          // p1这个指针改变指向，指向下一个节点
     }*/
    if (pHead === null || pHead.next === null) {
        return pHead
    }
    let prev = null, next = null;
    while (pHead !== null) {
        [next, pHead.next, prev, pHead] = [pHead.next, prev, pHead, next]
    }
    return prev
};
console.log(reserveList([1, 2, 3, 4, 5]));