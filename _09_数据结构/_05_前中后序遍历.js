/*
树节点属性  Node
   data：节点值
   parent ：指向节点的父节点
   left：指向节点的左节点
   right：指向节点的右节点
 */

function Node(element, left, right, parent) {
    this.element = element;
    this.left = left;
    this.right = right;
    this.parent = parent;
    this.show = function () {
        return this.element;
    }
}

// 前序遍历
function PreSort(node) {
    if (node !== null) {
        console.log();
        PreSort(node.left);
        PreSort(node.right)
    }
}

// 中序遍历
function InSort(node) {
    if (node !== null) {
        InSort(node.left);
        console.log();
        InSort(node.right);
    }
}

// 后序遍历
function PostSort(node) {
    if (node !== null) {
        PreSort(node.left);
        PreSort(node.right);
        console.log();
    }
}