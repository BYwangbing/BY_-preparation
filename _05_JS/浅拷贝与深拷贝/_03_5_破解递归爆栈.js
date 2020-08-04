/*
用循环遍历一棵树，需要借助一个栈，当栈为空时就遍历完了，栈里面存储下一个需要拷贝的节点
首先我们往栈里放入种子数据，key用来存储放哪一个父元素的那一个子元素拷贝对象
然后遍历当前节点下的子元素，如果是对象就放到栈里，否则直接拷贝
 */

/*
var a = {
    a1: 1,
    a2: {
        b1: 1,
        b2: {
            c1: 1
        }
    }
}
 */
function cloneLoop(x) {
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
        // 深度优化
        const node = loopList.pop();
        const parent = node.parent;
        const key = node.key;
        const data = node.data;
        // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
        let res = parent;
        if (typeof key !== 'undefined') {
            res = parent[key] = {}
        }
        for (let k in data) {
            if (data.hasOwnProperty(k)) {
                if (typeof data[k] === 'object') {
                    //    下一次循环
                    loopList.push({
                        parent: res,
                        key: k,
                        data: data[k]
                    })
                } else {
                    res[k] = data[k]
                }
            }
        }
    }
    return root
}

// 改用循环后，再也不会出现爆栈的问题了，但是对于循环引用依然无力应对

// 检测深度和广度
function createData(deep, breadth) {
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