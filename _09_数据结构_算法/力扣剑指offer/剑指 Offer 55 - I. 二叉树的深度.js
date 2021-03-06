// https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  const queue = [root],
    res = [];
  while (queue.length) {
    let length = queue.length;
    const now_res = [];
    while (length) {
      const temp = queue.shift();
      now_res.push(temp.val);
      if (temp.left) queue.push(temp.left);
      if (temp.right) queue.push(temp.right);
      length--;
    }
    res.push(now_res);
  }
  return res.length;
};

const maxDepthII = (root) => {
  if (!root) return 0;
  return Math.max(maxDepthII(root.left), maxDepthII(root.right)) + 1;
};

const maxDepthIII = (root) => {
  if (!root) return 0;
  let max = 0;

  const dfs = (node, deep) => {
    if (!node) return;
    max = Math.max(max, deep + 1);
    node.left && dfs(node.left, deep + 1);
    node.right && dfs(node.right, deep + 1);
  };
  dfs(root, 0);
  return max;
};

const maxDepthIV = (root) => {
  if (!root) return 0;
  let max = 0;
  const stack = [[root, 0]];
  while (stack.length) {
    const [node, p] = stack.pop();

    max = Math.max(max, p + 1);

    node.left && stack.push([node.left, p + 1]);
    node.right && stack.push([node.right, p + 1]);
  }

  return max;
};
