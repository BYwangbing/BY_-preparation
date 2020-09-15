// https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof/

// 请实现两个函数，分别用来序列化和反序列化二叉树。

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// 序列化
var serialize = function (root) {
    if (!root) return [];
    const queue = [root], res = [];
    while (queue.length) {
        let length = queue.length;
        while (length) {
            const cur = queue.shift();
            if (cur) {
                res.push(cur.val);
            } else {
                res.push(cur);
                continue;
            }
            queue.push(cur.left);
            queue.push(cur.right);
        }
    }
    return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
// 反序列化
var deserialize = function (data) {

};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


/*
    序列化和逆序列化均采用 广度优先搜索
    序列化以节点遍历单元
    逆序列化以节点值为遍历单元
* */