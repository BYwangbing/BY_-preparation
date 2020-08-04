/*
* new一个对象背后做了些什么?
  * 创建一个空对象
  * 给对象设置__proto__, 值为构造函数对象的prototype属性值   this.__proto__ = Fn.prototype
  * 执行构造函数体(给对象添加属性/方法)
 */
function fibonacci(n) {
    return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)  //递归调用
}

console.log(this);
onmessage = function (event) {
    let number = event.data;
    console.log('分线程接收到主线程发送的数据: ' + number);
    // 计算
    let result = fibonacci(number);
    postMessage(result);
    console.log('分线程向主线程返回数据: ' + result);
    // alert(result)  alert是window的方法, 在分线程不能调用
    // 分线程中的全局对象不再是window, 所以在分线程中不可能更新界面
};