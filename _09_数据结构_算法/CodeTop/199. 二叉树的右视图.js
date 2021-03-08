function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/*
  @param {TreeNode} root
  @return {number[]}
 */
var rightSideView = function (root) {
  const dfs = (root, deep, arr) => {
    if (root) {
      // 当数组长度等于当前 深度 时, 把当前的值加入数组
      if (deep === arr.length) arr.push(root.val);
      dfs(root.right, deep + 1, arr);
      dfs(root.left, deep + 1, arr);
    }
  };
  if (!root) return [];
  let arr = [];
  dfs(root, 0, arr);
  return arr;
};
