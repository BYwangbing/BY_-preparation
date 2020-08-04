const deepClone = (source) => {
    const target = {};
    for (const i in source) {
        if (source.hasOwnProperty(i) && target[i] === 'object') {
            target[i] = deepClone(source[i]); // 注意这里
        } else {
            target[i] = source[i];
        }
    }
    return target;
};


// 这份代码是存在问题的：

// 没有对参数进行校验，如果传入进来的不是对象或者数组，我们直接返回即可。

// 通过 typeof 判断是否对象的逻辑不够严谨。 typeof null

