// https://leetcode-cn.com/problems/binary-tree-tilt/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function (root) {
    let res = 0;
    const dfs = (node) => {
        if (!node) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);
        res += Math.abs(left - right);
        return node.val + left + right;
    };
    dfs(root);
    return res;
};