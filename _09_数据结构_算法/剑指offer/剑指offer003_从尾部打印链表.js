function ListNode(val) {
    this.val = val;
    this.next = null;
}

function printListFromTailToHead(head) {
    let arrayList = [];
    let node = head;
    while (node) {
        arrayList.unshift(node.val);
        node = node.next;
    }
    return arrayList
}