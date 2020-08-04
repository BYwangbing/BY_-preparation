/*
链表: 存贮有序元素的集合;
但是不同于数组,每个元素是一个存贮元素本身的节点和指向下一个元素引用组成
要想访问链表中间的元素,需要从起点开始遍历找到所需元素
 */

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // 追加元素
    append(element) {
        const node = new Node(element);
        let current = null;
        if (this.head === null) {
            this.head = node
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node
        }
        this.length++;
    }

    // 任意位置插入元素
}
