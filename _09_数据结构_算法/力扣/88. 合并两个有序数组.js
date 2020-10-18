/*
 * @Author: your name
 * @Date: 2020-10-09 15:28:23
 * @LastEditTime: 2020-10-09 16:52:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \力扣\88. 合并两个有序数组.js
 */
// https://leetcode-cn.com/problems/merge-sorted-array/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	nums1.splice(m, n, ...nums2)
	return nums1.sort((a, b) => a - b)
}
const arr = [
	function () {
		console.log(this[1])
	},
	'我是子君',
]
// 输出 我是子君
console.log(arr[0]())

/* var num = 1
let obj = {
	num: 2,
	add: function () {
		this.num = 3
		;(function () {
			console.log(this.num)
			this.num = 4
		})()
		console.log(this.num)
	},
	sub: function () {
		console.log(this.num)
	},
}
obj.add()
console.log(obj.num)
console.log(num)
const sub = obj.sub
sub() */
var num = 10
const obj = { num: 20 }
obj.fn = (function (num) {
	this.num = num * 3
	num++
	return function (n) {
		this.num += n
		num++
		console.log(num)
	}
})(obj.num)
var fn = obj.fn
fn(5)
obj.fn(10)
console.log(num, obj.num)
