/*
    栈的特点：先进后出
    get 取值
 */
class Stack {
    constructor() {
        this.item = []
    }
    // 入栈
    push(element){
        this.item.push(element)
    }
    // 出栈
    pop(){
        return this.item.pop()
    }
    // 末位
    get peek() {
        return this.item[this.item.length - 1]
    }
    // 是否为空栈
    get isEmpty() {
        return !this.item.length
    }
    // 长度
    get size() {
        return this.item.length
    }
    // 清空栈
    clear() {
        this.item = []
    }
}
// 实例化一个栈
const stack = new Stack();
console.log(stack.isEmpty);
// 添加元素
stack.push('王福坤坤');
stack.push('Match');
// 读取属性再添加
console.log(stack.peek);
stack.push('小冰冰');
console.log(stack.size);
console.log(stack.isEmpty);
