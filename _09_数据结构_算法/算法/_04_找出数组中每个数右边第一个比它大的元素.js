/*
给定一个整型数组，数组元素随机无序的，要求打印出所有元素右边第一个大于该元素的值。如果不存在，对应值设为-1即可
如数组A=[1,5,3,6,4,8,9,10] 输出[5, 6, 6, 8, 8, 9, 10, -1]

如数组A=[8, 2, 5, 4, 3, 9, 7, 2, 5] 输出[9, 5, 9, 9, 9, -1, -1, 5, -1]

我们用栈来保存未找到右边第一个比它大的元素的索引（保存索引是因为后面需要靠索引来给新数组赋值），
初始时，栈里放的是第一个元素的索引0值。

（1）初始化栈，里面为第一个元素索引0值；

（2）遍历到下一个元素A[i]
*/
function findMaxRightWithStack(arr) {
  const length = arr.length;
  const result = [];
  const stack = [];
  let top = 0;
  stack[top++] = 0;
  let index = 1;
  while (index < length) {
    if (stack.length && arr[index] > arr[stack[top - 1]]) {
      result[stack.pop()] = arr[index];
      top--;
    } else {
      stack.push(index);
      top++;
      index++;
    }
  }
  if (!stack.length) {
    result[stack.pop()] = -1;
  }
  return result;
}
const A = [1, 5, 3, 6, 4, 8, 9, 10];

const B = [8, 2, 5, 4, 3, 9, 7, 2, 5];

console.log(findMaxRightWithStack(B));
/* 遍历数组中的每一个后面所有元素，找到第一个大于它的，输出即可  O(n^2) */
function findMaxRight(arr) {
  let length = arr.length;
  const result = [];
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[j] > arr[i]) {
        result[i] = arr[j];
        break;
      } else {
        result[i] = -1;
      }
    }
  }
  result[length - 1] = -1; //最后一个元素右边没有元素，所以肯定为-1
  return result;
}
console.log(findMaxRight(B));
