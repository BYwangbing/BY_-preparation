// 定义队列
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;     //入队
    this.dequeue = dequeue;     //出队
    this.front = front;         //查看队首元素
    this.back = back;           //查看队尾元素
    this.print = print;   //显示队列所有元素
    this.clear = clear;         //清空当前队列
    this.empty = empty;         //判断当前队列是否为空
}

// enqueue：向队列添加元素
function enqueue(element) {
    this.dataStore.push(element);
}

// dequeue：删除队首的元素
function dequeue() {
    if (this.empty()) {
        return 'This queue is empty';
    } else {
        this.dataStore.shift();
    }
}

// empty：判断队列是否为空
function empty() {
    return this.dataStore.length === 0;
}

// clear：清空当前队列 直接将 dataStore 数值清空
function clear() {
    delete this.dataStore;
    this.dataStore = [];
}

// print ：查看队列中所有元素 采用数组的 join 方法实现
function print() {
    return this.dataStore.join(' \n');
}

// front：查看队首元素 直接返回数组首个元素即可
function front() {
    if (this.empty()) {
        return 'This queue is empty';
    } else {
        return this.dataStore[0];
    }
}

// back：查看队尾元素 直接返回数组最后一个元素即可
function back() {
    if (this.empty()) {
        return 'This queue is empty';
    } else {
        return this.dataStore[this.dataStore.length - 1];
    }
}