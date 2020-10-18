/*
 * @Author: your name
 * @Date: 2020-10-09 13:23:08
 * @LastEditTime: 2020-10-09 13:36:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \力扣\剑指 Offer 40. 最小的k个数.js
 */
// https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// 方法二：快排思维
/*
快排：
    每次从[start, end]范围内的数组中随机选择一个标杆元素(代码里取得是第一个元素),
    然后把数组中所有小于标杆的放在数组左边，
    所有大于标杆的元素放在数组右边，
    然后判断标杆元素的位置是否等于目标位置。
    如果目标位置小于当前位置，则继续在左边查找
    如果目标位置大于当前位置，则继续在右边查找。
    这样每次迭代都会缩小查找的范围
*/
var getLeastNumbers = function (arr, k) {
	// return arr.sort((a, b) => a-b).slice(0, k)
};

const quickSort = (arr) => {
	if (arr.length <= 1) return arr
	// 选择"基准"（pivot），并将其与原数组分离，再定义两个空数组，用来存放一左一右的两个子集
};
