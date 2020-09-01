function bubbleSort(array) {
    let length = array.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {  // 相邻元素两两对比
                let temp = array[j + 1];    // 元素交换
                array[j + 1] = array[j];
                array[j] = temp;
                // [array[j], array[j+1]] = [array[j+1], array[j]]
            }
        }
    }
    return array;
}

[[0, 1], [2, 3]].reduce(
    (acc, cur) => acc.concat(cur), [1, 2]
);
