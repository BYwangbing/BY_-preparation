/*
 * @Author: your name
 * @Date: 2020-10-09 18:07:17
 * @LastEditTime: 2020-10-09 18:10:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \力扣\剑指 Offer 05. 替换空格.js
 */
// https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
	if (typeof s === 'string' && s.length >= 0 && s.length <= 100) {
		// return s.split(' ').join('%20')
		return s.replace(/ /g, '%20')
	}
}
