/*
* 使用ES6 的Proxy实现数组负索引。
* 负索引：
*   例如，可以简单地使用arr[-1]替代arr[arr.length-1]访问最后一个元素，[-2]访问倒数第二个元素，以此类推
* */
// 使用get拦截，实现数组读取负数的索引
const negativeIndex = (...elements) => {
    let handler = {
        get(target, propKey, receiver) {
            let index = Number(propKey);
            if (index < 0) {
                propKey = String(target.length + index)
            }
            return Reflect.get(target, propKey, receiver)
        }
    };
    return new Proxy([...elements], handler);
};

let arr = negativeIndex('a', 'b', 'c');
console.log(arr[-1]);  //'c'

function createArray(...elements) {
    return new Proxy([...elements], {
        get(target, propKey, receiver) {
            let index = Number(propKey);
            let maxIndex = target.length;
            while (index < 0) {
                index = maxIndex + index;
            }
            return Reflect.get(target, String(index), receiver)
        }
    })
}

var _arr = createArray('a', 'b', 'c');
console.log(_arr[1]); //'c'