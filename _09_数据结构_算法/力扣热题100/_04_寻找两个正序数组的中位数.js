// https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let array = nums1.concat(nums2);
    array.sort((a, b) => a - b);
    let length = array.length;
    let midIndex = Math.ceil(length / 2); //  Math.ceil() 函数返回大于或等于一个给定数字的最小整数
    let mid;
    // 若数组个数为偶数，则找到中间位两位的前一位的下标，从而找到下一个下标
    if (length % 2 === 0) {
        mid = (array[midIndex] + array[midIndex - 1]) / 2;
    } else {
        // 若为奇数，则直接找到中位数
        mid = array[midIndex - 1];
    }
    return mid;
};
