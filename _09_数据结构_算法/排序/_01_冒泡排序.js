/*
比较相邻的元素。如果第一个比第二个大，就交换他们两个。
对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
针对所有的元素重复以上的步骤，除了最后一个。
持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
*/
function bubbleSort(array) {
  let length = array.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        // 相邻元素两两对比
        let temp = array[j + 1]; // 元素交换
        array[j + 1] = array[j];
        array[j] = temp;
        // [array[j], array[j+1]] = [array[j+1], array[j]]
      }
    }
  }
  return array;
}

[
  [0, 1],
  [2, 3],
].reduce((acc, cur) => acc.concat(cur), [1, 2]);
