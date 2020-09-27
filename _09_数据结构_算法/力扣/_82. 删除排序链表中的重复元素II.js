// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
// 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
/*
* 与 删除排序链表中的重复元素I 不同点在于 相同的要删除
* 但发现 若将 自己与下一节点比较 相同时需将 上一节点next指向下一个
* 因此必须要有一个前置结点
* 此外发现head首结点也可能重复 所以需要造一个前置结点
*
* 快慢指针：
* 慢指针的链表 ====》用来返回的链表
* 快指针的链表 ====》用来循环的链表
* 当快指针不重复 则慢指针与其同步更新
* */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    // 特殊情况，头节点为null或头节点下一节点为null，直接返回头节点，这时不存在重复节点
    if (head === null || head.next === null) {
        return head;
    }
    // 如果头节点与，头节点的下一节点值相等，跳过所有相等节点。
    // 递归调用函数判断最后一个跳过节点的后一节点。
    if (head.val === head.next.val) {
        while (head !== null && head.next !== null && head.val === head.next.val) {
            head = head.next;
        }
        return deleteDuplicates(head.next);
    } else {
        // 如果头节点与，头节点的下一节点值不等，递归调用函数判断头节点的后一节点。
        head.next = deleteDuplicates(head.next);
        return head;
    }
};