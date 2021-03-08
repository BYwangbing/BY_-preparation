function $quickSort(arr) {
  /*
   * 创建len保存数组的长度，每次获取数组的长度都要实时查询不利于性能；
   * index作为保存取到的中间值；
   * pivot保存比较参照物；
   * left、right作为子数组的容器；
   */
  let length = arr.length;
  if (length <= 1) return arr;
  let left = [],
    right = [];
  //获取中间值的索引，使用Math.floor向下取整；
  let pivotIndex = Math.floor(length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  length--;
  for (let i = 0; i < length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}
/*
1、通过下标取中间数为基数；
2、从起点往后寻找比基数大的，记录为下标 i；再从终点往前寻找比基数小的，记录为下标 j，当 i <= j时，原地交换数值；
3、重复步骤2，直到遍历所有元素，并记录遍历的最后一个下标 i，以此下标为分界线，分为左右两边，分别重复步骤1~3实现递归排序；
*/
function devide(array, start, end) {
  if (start >= end) return array;
  let baseIndex = Math.floor((start + end) / 2);
  let i = start,
    j = end;
  while (i <= j) {
    while (array[i] < array[baseIndex]) {
      i++;
    }
    while (array[j] > array[baseIndex]) {
      j--;
    }
    if (i <= j) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(array, start, end) {
  if (array.length < 1) return array;
  let index = devide(array, start, end);
  if (start < index - 1) quickSort(array, start, index - 1);
  if (end > index) quickSort(array, index, end);
  return array;
}

let arr = [12, 1009, 1997, 24, 22, 4, 25];

console.log(quickSort(arr, 0, arr.length - 1));
console.log($quickSort(arr));
