/*
1->2->3->4->5->6
            ↑  ↓
            8<-7
*/

/*
* 通常判断链表是否有环，会采用快慢指针的方法
* 判断链表有环: 快慢指针 快指针每次走两步；慢指针每次走一步
* 找到入环节点:
*   在确定链表有环之后，慢指针重新指向链表头，快指针留在相遇处；(或快指针指向链表头，慢指针留在相遇结点)
*   然后快慢指针再以每次移动1个节点的速度前进，最终他们在入环节点相遇。
*
* 即只需要让其中一个指针回到链表头，另一个继续从首次相遇结点向后走，
* 这次两个指针都是一个节点一个节点的走，再次相遇就是入环节点。
* */

// 定义节点
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} pHead
 * @return {ListNode}
 */
function judgeNodeRing(pHead) {
    if (pHead === null) {
        return null;
    }
    // 快慢指针从链表的头部开始
    let fastPointer = pHead, slowPointer = pHead;
    // 快指针每次走两步；慢指针每次走一步
    while (fastPointer.next.next !== null && slowPointer.next !== null) {
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
        // 快慢指针相遇时，跳出while循环 即有环
        if (fastPointer === slowPointer) {
            break;
        }
    }
    // 快指针已经到了链表尾部了还没和慢指针相遇，说明没有环
    if (fastPointer === null || slowPointer === null) {
        return null;
    }
    // 有环，慢指针重新回到链表头 快指针留在相遇处
    slowPointer = pHead;
    // 快慢指针重新相遇时，相遇节点就是入环节点
    while (slowPointer !== fastPointer) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next;
    }
    return slowPointer;
}