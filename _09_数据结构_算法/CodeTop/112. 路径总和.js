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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) return false; // 遍历到null节点
  if (root.left == null && root.right == null) {
    // 遍历到叶子节点
    return targetSum - root.val === 0; // 如果满足这个就返回true。否则返回false
  }
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};

var hasPathSum = function (root, sum) {
  if (!root) return false;
  const stack = [[root, root.val]];
  while (stack.length > 0) {
    const [node, pathSum] = stack.pop();
    const { left: lc, right: rc } = node;
    if (pathSum === sum && !rc && !lc) return true;
    if (rc) stack.push([rc, pathSum + rc.val]); // 前序遍历，需要先将右节点入栈，这样出栈时为左节点先出栈
    if (lc) stack.push([lc, pathSum + lc.val]);
  }
  return false;
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (root === null) return false;
  let stack = [root];
  let sumStack = [sum - root.val];
  while (stack.length > 0) {
    let node = stack.pop();
    let curSum = sumStack.pop();
    if (node.left === null && node.right === null && curSum === 0) {
      return true;
    }
    if (node.right !== null) {
      stack.push(node.right);
      sumStack.push(curSum - node.right.val);
    }
    if (node.left !== null) {
      stack.push(node.left);
      sumStack.push(curSum - node.left.val);
    }
  }
  return false;
};
