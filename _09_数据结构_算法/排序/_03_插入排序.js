function insertSort(array) {
    let len = array.length;
    let preIndex, current;
    for (let i = 1; i < len; i++) {
        preIndex = i - 1;   // 默认已排序元素下标
        current = array[i];
        while (preIndex >= 0 && array[preIndex] > current) {   //在已排序好的队列中从后向前扫描
            array[preIndex + 1] = array[preIndex];          //已排序的元素大于新元素，将该元素移到一下个位置
            preIndex--;
        }
        array[preIndex + 1] = current;
    }
    return array;
}