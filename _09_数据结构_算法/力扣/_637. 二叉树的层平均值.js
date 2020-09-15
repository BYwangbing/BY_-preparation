// https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    if (!root) return 0;
    const queue = [root];
    const res = [];
    while (queue.length) {
        let now_res = [];
        let length = queue.length;
        while (length) {
            const cur = queue.shift();
            now_res.push(cur.val);
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
            length--;
        }
        let result = now_res.reduce((prev, cur) => prev + cur);
        res.push(result / now_res.length);
    }
    return res;
};
