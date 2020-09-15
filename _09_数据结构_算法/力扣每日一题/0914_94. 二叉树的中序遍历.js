// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const result = [];
    const inorder = (_root) => {
        if (!_root) return;
        inorder(_root.left);
        result.push(_root.val);
        inorder(_root.right);
    };
    inorder(root);
    return result;
};

const inorderTraversalII = function (root) {
    const res = [];
    const stack = [];
    while (root || stack.length){
        while (root){
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
};