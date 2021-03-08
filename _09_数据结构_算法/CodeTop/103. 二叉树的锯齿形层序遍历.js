function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/*
  @param {TreeNode} root
  @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const dfs = (root, deep, res) => {
    if (!root) return [];
    if (!res[deep]) res[deep] = [];
    if (deep & 1) {
      res[deep].unshift(root.val);
    } else {
      res[deep].push(root.val);
    }
    dfs(root.left, deep + 1, res);
    dfs(root.right, deep + 1, res);
  };
  let res = [];
  dfs(root, 0, res);
  return res;
};
