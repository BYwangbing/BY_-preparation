// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function (root) {
  // 数据结构： 队列，先入先出 push shift
  const res = [];
  let queue = [];
  if (root) queue.push(root);
  if (root !== null) {
    while (queue.length) {
      let next_queue = [],
        now_res = [];
      while (queue.length) {
        root = queue.shift();
        now_res.push(root.val);
        root.left && next_queue.push(root.left);
        root.right && next_queue.push(root.right);
      }
      queue = next_queue;
      res.push(now_res);
    }
  }
  return res;
};

const levelOrderII = (root) => {
  if (!root) return [];
  let queue = [root];
  let res = [];
  while (queue.length) {
    let now_res = [];
    let length = queue.length;
    while (length) {
      let cur = queue.shift();
      now_res.push(cur.val);
      if (cur.left) queue.shift(cur.left);
      if (cur.right) queue.shift(cur.right);
      length--;
    }
    res.push(now_res);
  }
  return res;
};

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
