// 1.深度优先遍历的递归写法
function deepTraversal(node) {
    let nodes = [];
    if (node !== []) {
        nodes.push(node);
        let children = node.children;
        for (let i = 0; i < children.length; i++) {
            deepTraversal(children[i])
        }
    }
}

// 3.广度优先遍历的递归写法
function widthTraversal(node) {
    let nodes = [], i = 0;
    if (node !== null) {
        nodes.push(node);
        widthTraversal(node.nextElementSibling);
        node = nodes[i++];
        widthTraversal(node.firstElementChild)
    }
}