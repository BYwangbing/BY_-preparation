class EventEmitter {
  constructor() {
    // 事件对象，存放订阅的名字和事件  如:  { click: [ handle1, handle2 ]  }
    this.events = {};
  }
  // 订阅事件的方法
  on(eventName, callback) {
    // 一个名字可以订阅多个事件函数
    if (!this.events[eventName]) {
      this.events[eventName] = [callback];
    } else {
      // 存在则push到指定数组的尾部保存
      this.events[eventName].push(callback);
    }
  }
  // 触发事件的方法
  emit(eventName, ...rest) {
    // 遍历执行所有订阅的事件
    this.events[eventName] &&
      this.events[eventName].forEach((fn) => fn.apply(this, rest));
  }

  // 移除订阅事件
  remove(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        (f) => f != callback
      );
    }
  }

  // 只执行一次订阅的事件，然后移除
  once(eventName, callback) {
    // 绑定的时fn, 执行的时候会触发fn函数
    const fn = () => {
      callback(); // fn函数中调用原有的callback
      this.remove(eventName, fn); // 删除fn, 再次执行的时候之后执行一次
    };
    this.on(eventName, fn);
  }
}
