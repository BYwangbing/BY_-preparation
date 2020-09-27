/*
* deepFirstSearch接受两个参数，
* 第一个参数是需要遍历的节点，
* 第二个是节点所存储的数组，
* 并且返回遍历完之后的数组，该数组的元素顺序就是遍历顺序
* */

//节点构造函数
function Node(key) {
    this.children = [];  //不确定当前节点子节点数,使用数组表示
    this.key = key    //当前节点序号
}

// 深度优先搜索算法实现
// 非递归版 数据结构： 栈 先进后出 数组：放 push，取 pop
function dfs(node) {
    let nodeList = [];  // 目标数组
    if (node !== null) {
        let stack = [];
        stack.push(node);
        while (stack.length !== 0) {
            let childrenItem = stack.pop(); // 从栈中取出一项
            nodeList.push(childrenItem); // 放入目标数组
            let childrenList = childrenItem.children;
            for (let i = childrenList.length - 1; i >= 0; i--) {
                // 以此放入栈中，因为栈的特点，所以我们反着插入
                stack.push(childrenList[i]);
            }
        }
    }
    return nodeList;
}

// 递归版
function deepFirstSearch(node) {
    let nodeList = [];  // 目标数组
    if (node) {
        nodeList.push(node);
        let children = node.children;
        //每次递归的时候将  需要遍历的节点  和 节点所存储的数组传下去
        for (let i = 0; i < children.length; i++) {
            deepFirstSearch(children[i], nodeList);
        }
    }
    return nodeList;
}

