/*
 * @Author: your name
 * @Date: 2020-10-16 13:48:24
 * @LastEditTime: 2020-10-16 14:03:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \力扣\1016_977. 有序数组的平方.js
 */
// https://leetcode-cn.com/problems/squares-of-a-sorted-array/
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    /* return A.map((item) => Math.abs(item))
        .sort((a, b) => a - b)
        .map((i) => i ** 2) */
    return A.map((item) => Math.abs(item ** 2)).sort((a, b) => a - b)
};
const A = [-4, -1, 0, 3, 10];
console.log(sortedSquares(A));
