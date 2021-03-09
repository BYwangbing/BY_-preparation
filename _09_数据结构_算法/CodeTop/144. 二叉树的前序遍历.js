function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const res = [];
  const preInorder = (root) => {
    if (!root) return;
    res.push(root.val);
    preInorder(root.left);
    preInorder(root.right);
  };
  preInorder(root);
  return res;
};
