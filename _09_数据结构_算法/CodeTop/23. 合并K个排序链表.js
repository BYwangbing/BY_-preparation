function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKLists = function (lists) {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];
  if (lists.length === 2) return mergeTwoLists(lists[0], lists[1]);
  const mid = Math.floor(lists.length / 2);
  const l1 = [],
    l2 = [];
  for (let i = 0; i < mid; i++) {
    l1[i] = lists[i];
  }
  for (let i = mid, j = 0; i < lists.length; i++, j++) {
    l2[j] = lists[i];
  }
  return mergeTwoLists(mergeKLists(l1), mergeKLists(l2));
};

var mergeTwoLists = function (l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
