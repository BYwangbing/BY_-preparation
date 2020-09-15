//节点构造函数
function Node(key) {
    this.children = []; //用数组来存放子节点
    this.key = key //当前节点序号
}

// 数据结构： 队列，先入先出 push shift
function breadthFirstSearch(node) {
    let nodeList = [];
    if (node !== null) {
        let queue = [];
        queue.push(node);
        while (queue.length !== 0) {
            let item = queue.shift();
            nodeList.push(item);
            let children = item.children;
            for (let i = 0; i < item.length; i++) {
                queue.push(children[i]);
            }
        }
    }
    return nodeList;
}