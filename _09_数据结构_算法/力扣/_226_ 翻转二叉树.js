// https://leetcode-cn.com/problems/invert-binary-tree/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) return null;
    [root.left, root.right] = [root.right, root.left];
    root.left = invertTree(root.left);
    root.right = invertTree(root.right);
    return root;
};
