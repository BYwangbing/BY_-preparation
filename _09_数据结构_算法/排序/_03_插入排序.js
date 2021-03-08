/*
将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。
从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。
（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）
*/

function insertSort(array) {
  let len = array.length;
  let preIndex, current;
  for (let i = 1; i < len; i++) {
    preIndex = i - 1; // 默认已排序元素下标
    current = array[i];
    while (preIndex >= 0 && array[preIndex] > current) {
      //在已排序好的队列中从后向前扫描
      array[preIndex + 1] = array[preIndex]; //已排序的元素大于新元素，将该元素移到一下个位置
      preIndex--;
    }
    array[preIndex + 1] = current;
  }
  return array;
}
