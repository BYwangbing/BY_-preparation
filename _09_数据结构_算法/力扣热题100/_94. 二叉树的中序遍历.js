function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const res = [];
  const middleInorder = (root) => {
    if (!root) return;
    middleInorder(root.left);
    res.push(root.val);
    middleInorder(root.right);
  };
  middleInorder(root);
  return res;
};
