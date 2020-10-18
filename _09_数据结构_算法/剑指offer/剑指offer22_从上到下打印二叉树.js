/*
* 从上往下打印出二叉树的每个节点，同层节点从左至右打印
* 其实就是二叉树的层次遍历 利用一个队列
* */
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function PrintFromTopToBottom(root) {
    // write code here
    if (root === null) return [];
    let res = [];
    let queue = [root]; 
    while (queue.length) {
        // 如果队列不为空，取出队列首的一个节点，进行打印
        let cur = queue.shift();
        res.push(cur.val);
        if (cur.left !== null) {
            queue.push(cur.left)
        }
        if (cur.right !== null) {
            queue.push(cur.right)
        }
    }
    return res;
}
