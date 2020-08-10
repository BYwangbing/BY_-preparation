/*
    队列的特点：先进先出
    get 取值
 */
class Queue {
    constructor() {
        this.item = [];
    }
    // 入队
    enqueue(element) {
        this.item.push(element);
    }
    // 出队
    dequeue(){
        return this.item.shift()
    }
    // 队头
    front() {
        return this.item[0]
    }
    // 清空队列
    clear() {
        this.item = [];
    }
    // 是否为空队列
    get isEmpty() {
        return !this.item.length
    }
    // 长度
    get size() {
        return this.item.length
    }
    // 打印
    print() {
        console.log(this.item.toString());
    }
}
const queue = new Queue();
console.log(queue.isEmpty);
queue.enqueue('王福坤坤');
queue.enqueue('Match');
queue.enqueue('小冰冰');
console.log(queue.size);
console.log(queue.isEmpty);
queue.dequeue();
queue.dequeue();
