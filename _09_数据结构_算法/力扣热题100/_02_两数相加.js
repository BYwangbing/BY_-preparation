// https://leetcode-cn.com/problems/add-two-numbers/
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/*
* 三个链表的 current 指针：myList1、myList2、myList
* 新链表：l3
* 放到下一位相加的数字：carry
* */
var addTwoNumbers = function (l1, l2) {
    let myList1 = l1, myList2 = l2, carry = 0; //carry为进位，初始化为0
    let myList, l3;
    while (myList1 || myList2 || curr) {
        let value1 = 0, value2 = 0, sum = 0;
        if (myList1) {
            value1 = myList1.val;
            myList1 = myList1.next;
        }
        if (myList2) {
            value2 = myList2.val;
            myList2 = myList2.next;
        }
        sum = value1 + value2 + carry;
        carry = Math.floor(sum / 10); // 得到进位
        if (!myList) {
            l3 = new ListNode(sum % 10);
            myList = l3;
        } else {
            myList.next = new ListNode(sum % 10);
            myList = myList.next;
        }
    }
    return l3;
};