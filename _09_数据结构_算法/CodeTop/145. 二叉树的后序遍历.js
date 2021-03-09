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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const res = [];
  const postInonder = (root) => {
    if (!root) return;
    postInonder(root.left);
    postInonder(root.right);
    res.push(root.val);
  };
  postInonder(root);
  return res;
};

// 非递归版
var postorderTraversal = function (root) {
  var res = [];
  if (!root) return res;
  var stack = [root];
  while (stack.length) {
    root = stack.pop();
    res.unshift(root.val);
    if (root.left) stack.push(root.left);
    if (root.right) stack.push(root.right);
  }
  return res;
};
