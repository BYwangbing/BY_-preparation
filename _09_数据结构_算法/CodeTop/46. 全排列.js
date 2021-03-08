/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  perm(nums, 0, nums.length - 1, res);
  return res;
};

// p 全排列的开始位置 q 全排列的结束位置
function perm(arr, p, q, res) {
  if (p === q) {
    res.push([...arr]);
  } else {
    for (let i = p; i <= q; i++) {
      swap(arr, i, p);
      perm(arr, p + 1, q, res);
      swap(arr, i, p);
    }
  }
}

function swap(arr, p, q) {
  let temp = arr[p];
  arr[p] = arr[q];
  arr[q] = temp;
}
