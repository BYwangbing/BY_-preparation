// https://leetcode-cn.com/problems/n-queens-ii/
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {

};

/*
*
解题思路
回溯：
注意：已放置皇后的格子的行、列、对角线都不可放置
一个点左右对角线坐标的性质

左对角线：col - row = 一个常量
右对角线：col + row = 一个常量
思路：逐行遍历，遍历当前行的每一列

如果合法，在当前点放置皇后，继续遍历下一行
如果不合法，直接跳过就可以
*
* */