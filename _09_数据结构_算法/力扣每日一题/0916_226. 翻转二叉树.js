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
    if (root === null) return null;
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    /*const left = invertTree(root.left);
    const right = invertTree(root.right);
    root.left = right;
    root.right = left;*/
    return root;
};