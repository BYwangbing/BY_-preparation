// 我们就可以采用迭代的方法，循环遍历这棵树了！
// 首先，我们需要借助栈。当栈为空就遍历完毕，栈里面存储下一个需要拷贝的节点
// 然后，往栈里放入种子数据，key 用来存储哪一个父元素的那一个子元素拷贝对象
// 最后，遍历当前节点下的子元素，如果是对象就放到栈里，否则直接拷贝。
const deepClone = (x) => {
    const root = {};
  
    // 栈
    const loopList = [
      {
        parent: root,
        key: undefined,
        data: x
      }
    ];
  
    while (loopList.length) {
      // 深度优先
      const node = loopList.pop();
      const parent = node.parent;
      const key = node.key;
      const data = node.data;
  
      // 初始化赋值目标，key 为 undefined 则拷贝到父元素，否则拷贝到子元素
      let res = parent;
      if (typeof key !== "undefined") {
        res = parent[key] = {};
      }
  
      for (let k in data) {
        console.log(data[k]   + "===k")
        if (data.hasOwnProperty(k)) {
          if (typeof data[k] === "object") {
            // 下一次循环
            loopList.push({
              parent: res,
              key: k,
              data: data[k]
            });
          } else {
            res[k] = data[k];
          }
        }
      }
    }
  
    return root;
  }

  // 检测深度和广度

const createData = (deep, breadth) => {
    const data = {};
    let temp = data;
  
    for (let i = 0; i < deep; i++) {
      temp = temp['data'] = {};
      for (let j = 0; j < breadth; j++) {
        temp[j] = j;
      }
    }
  
    return data;
  };
  
//   这时候我们再通过 createData 进行广度和深度校验，会发现：
  
  console.log(deepClone(createData(2, 100000)));
  // 100000 层广度，没问题，数据遍历需要时间
  
  // console.log(deepClone(createData(100000)));
  // 100000 层深度，也没问题了：{ data: { data: { data: [Object] } } }