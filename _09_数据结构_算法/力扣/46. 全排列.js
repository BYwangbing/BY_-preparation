/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  return perm(nums.length - 1);

  function perm(i) {
    if (i === 0) return [nums[0]];
    if (i === 1)
      return [
        [nums[0], nums[1]],
        [nums[1], nums[0]],
      ];
    let ans = perm[i - 1];
    let temp = nums[i];
    let result = [];
    for (let j = 0; j < ans.length; j++) {
      for (let k = 0; k <= i; k++) {
        let arr = ans[j].splice();
        arr.splice(k, 0, temp);
        result.push(arr);
      }
    }
    return result;
  }
};
function permute(nums) {
  let res = [];
  perm(nums, 0, nums.length - 1, res);
  return res;
}
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
