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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  if (!root) return 0;
  let tempH = height(root.left) + height(root.right);
  return Math.max(
    tempH,
    diameterOfBinaryTree(root.left),
    diameterOfBinaryTree(root.right)
  );
};

function height(node) {
  //求树高
  if (!node) return 0;
  return Math.max(height(node.left), height(node.right)) + 1;
}

var diameterOfBinaryTree = function (root) {
  let res = 0;
  depth(root);
  return res;
  function depth(node) {
    if (!node) return 0; // 节点不存在返回0
    let left = depth(node.left); // left为左子树的深度
    let right = depth(node.right); //right 为右子树的深度
    res = Math.max(left + right, res); //计算l+r 更新res
    return Math.max(left, right) + 1; //返回该节点为根的子树的深度
  }
};
