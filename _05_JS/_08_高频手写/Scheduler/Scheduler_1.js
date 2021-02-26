class Scheduler {
  constructor() {
    this.tasks = []; // 3. 任务队列
    this.onGoing = 0; // 5. 正在进行的任务数
  }

  add = (promiseCreator) => {
    // 1. 返回 promise
    const pro = new Promise((resolve) => {
      // 3. 推进队列
      this.tasks.push(() => {
        promiseCreator()
          .then(resolve)
          .then(() => {
            this.onGoing--; // 5. 调整进行任务数
            this.executeNext(); // 4. 调用下一个任务
          });
        //
      });
    });
    this.executeNext(); // 一开始的时候需要尝试调用一下下一个
    // 避免同时进行的任务小于两个
    return pro; // 1. 返回
  };

  executeNext = () => {
    if (this.onGoing >= 2 || this.tasks.length == 0) {
      // 如果正在执行的任务有两个或者没有后续了就不再继续了
      return;
    }

    this.onGoing++; // 标记现在又有任务了

    let fn = this.tasks.splice(0, 1)[0]; // 出队一个任务
    fn(); // 并执行他
  };
}
const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const scheduler = new Scheduler();
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
};

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');
