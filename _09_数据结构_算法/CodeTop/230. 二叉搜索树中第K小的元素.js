/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  // BST 中序遍历为升序 左-根-右
  const stack = [];

  while (true) {
    // 直到左叶子节点 没有左节点
    while (root) {
      stack.push(root); // 左节点依次入栈
      root = root.left; // DFS 左节点
    }
    root = stack.pop();
    // 巧妙条件：因为出栈的过程是升序的 故第k次出栈即为BST中第k个最小的元素
    if (!--k) return root.val;
    root = root.right; // DFS 左叶子节点的右节点
  }
};
