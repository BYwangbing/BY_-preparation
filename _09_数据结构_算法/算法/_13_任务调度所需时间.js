/*
给定一系列的任务，这些任务可能有依赖关系，有依赖关系须相继执行，没有依赖关系则可以同时执行。写一个函数，计算完成给定所有任务需要的时间。
*/
/*
https://blog.csdn.net/qq_44197554/article/details/111283000
*/
//例如下面这些任务执行总时间为 4
const tasks = [
  {
    name: 'task1',
    time: 1,
    dependency: '',
  },
  {
    name: 'task2',
    time: 2,
    dependency: '',
  },
  {
    name: 'task3',
    time: 3,
    dependency: 'task1',
  },
];

// 找到所有依赖的最长时间一个数组即可
function getTime(tasks) {
  // 执行完所有时间总和
  let sum = 0;
  // 存储所有任务的对象
  const nameArr = {};
  // 依赖关系任务
  const depen = [];
  for (let i = 0; i < tasks.length; i++) {
    if (depen.indexOf(tasks[i].name) === -1) {
      // 无依赖则赋值为空数组
      nameArr[tasks[i].name] = [tasks[i].time];
      dfs(tasks[i].name, nameArr[tasks[i].name], tasks, depen);
    }
  }

  for (const prop in nameArr) {
    let count = 0;
    nameArr[prop].forEach((item) => {
      count += item;
    });

    count > sum ? (sum = count) : sum;
  }

  return sum;
}

// 递归实现
function dfs(depenName, arr, tasks, depen) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].dependency && tasks[i].dependency === depenName) {
      // 如果依赖是这个任务，则存进数组中
      arr.push(tasks[i].time);
      depen.push(tasks[i].name);
      // 继续递归
      dfs(tasks[i].name, arr, tasks, depen);
    }
  }
}

getTime(tasks);
