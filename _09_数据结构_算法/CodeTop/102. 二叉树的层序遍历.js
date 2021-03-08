function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const dfs = (root, deep, res) => {
    if (root) {
      if (!res[deep]) res[deep] = [];
      res[deep].push(root.val);
      dfs(root.left, deep + 1, res);
      dfs(root.right, deep + 1, res);
    }
  };
  const res = [];
  dfs(root, 0, res);
  return res;
};
