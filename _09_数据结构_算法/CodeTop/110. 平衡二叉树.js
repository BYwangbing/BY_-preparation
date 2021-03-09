/*
平衡二叉树的定义是：一个二叉树每个节点的左右两个子树的高度差的绝对值不超过1。
所以，我们要判断每个节点的左右子树是否是平衡二叉树，这个过程可以递归的进行
*/
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;
  // 获取某个子树的高度
  const getHeight = (root) => {
    if (!root) return 0;
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
  };
  // 判断左右子树的高度差，如果超过 1 那么立即返回 false
  if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) return false;
  // 分别递归左右子树
  return isBalanced(root.left) && isBalanced(root.right);
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  let flag = true; // 先把所有二叉树先当做平衡二叉树
  let maxHeight = (r) => {
    if (!r) return 0; //当节点不存在时，高度为0
    let left = maxHeight(r.left);
    let right = maxHeight(r.right); //dfs常规操作,求出左右子树高度
    if (Math.abs(left - right) > 1) {
      flag = false; //高度差超过1时，非平衡二叉树，直接false
    }
    return Math.max(left, right) + 1; // 这里加1是因为要把父节点高度算进去
  };
  maxHeight(root);
  return flag;
};
