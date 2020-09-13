/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// mid = left + (right-left)/2; 可以防止left+right溢出
let search = function (nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
};
let nums = [-1, 0, 3, 5, 9, 12], target = 9;
console.log(search(nums, target));

/**
 * 二分查找
 * @param n int整型 数组长度
 * @param v int整型 查找值
 * @param a int整型一维数组 有序数组
 * @return int整型
 */
// mid = left + (right-left)/2; 可以防止left+right溢出
function upper_bound_(n, v, a) {
    // write code here
    let left = 0, right = n - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (a[mid] > v) {
            right = mid - 1;
        } else if (a[mid] < v) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return a.length + 1;
}

console.log(upper_bound_(5, 4, [1, 2, 4, 4, 5]));