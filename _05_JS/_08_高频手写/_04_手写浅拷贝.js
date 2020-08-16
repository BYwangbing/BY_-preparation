function shallowCopy(obj) {
    let data = {};
    for (let item in obj) {
        if (obj.hasOwnProperty(item)) {
            data[item] = obj[item]
        }
    }
    return data;
}

const arr = [1, 2, {name: "张三", age: "16"}];

// 法二: 展开运算符 ...obj
const newArr = [...arr];

// 法三: concat
const _newArr = arr.concat();

// 法四: slice
const _newArr1 = arr.slice();

// 法五: Object.assign
const newObj = Object.assign({}, obj);


// 可以看到的是，Object.assign() 对于第一层的数据来说，是深拷贝，对于第二层及以上的数据来说，是浅拷贝