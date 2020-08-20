function getNum(arr, k) {
    if (k < 0 || k > arr.length) {
        return ([null, -1]);
    }
    arr.sort((a, b) => (b - a));            // 数组排序->从大到小
    let uniqArr = Array.from(new Set(arr)); // 数组去重
    let target = uniqArr[k - 1];            // 找到目标元素
    let index = arr.indexOf(target);        // 寻找索引
    let num;                                // 利用元素之间的索引来得出该数字的数量
    if (k === uniqArr.length) {              // 需要判断是否为数组的最后一个元素(即最小值)
        num = arr.length - index;
    } else {
        let indexNext = arr.indexOf(uniqArr[k]);
        num = indexNext - index;
    }
    return ([target, num]);
}

let arr = [1, 2, 4, 4, 3, 5];
console.log(...getNum(arr, 2));