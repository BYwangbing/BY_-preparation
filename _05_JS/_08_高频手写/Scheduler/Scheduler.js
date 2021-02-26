/*
JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。
完善代码中Scheduler类，使得以下程序能正确输出
*/
class Scheduler {
  add(promiseCreator) {
    /* ... */
  }
  // ...
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

// output: 2 3 1 4
// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4
/*
思路分析：
  1. add 函数返回一个Promise
  2. add 的参数是一个返回 promise 的函数, 这个函数一旦调用就代表异步的任务开始执行了, 而这不是我们想要的 — 我们需要等排队到他了才开始执行
  3. 所以我们需要把这个函数存到一个队列
  4. 这个函数执行完后继续调用下一个队列里的函数
  5. 可以同时有两个任务在执行, 你可以想象一个有两个出口的管道, 每个出口的任务空出来, 后面的任务就自动填到空出来的出口里
*/
