/*
 * @Author: your name
 * @Date: 2020-10-14 13:29:01
 * @LastEditTime: 2020-10-15 12:39:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \力扣\每日一题_1014_1002. 查找常用字符.js
 */
// https://leetcode-cn.com/problems/find-common-characters/
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
	return A.reduce((prev, cur) => getCommon(prev, cur))
};
const getCommon = (strA, strB) => {
	const map = new Map();
	for (let i = 0; i < strA.length; i++) {
		const aData = map.get(strA[i]);
		if (aData) {
			map.set(strA[i], aData + 1)
		} else {
			map.set(strA[i], 1)
		}
	}
	console.log(map);
	const result = [];
	for (let i = 0; i < strB.length; i++) {
		const bData = map.get(strB[i]);
		if (bData) {
			result.push(strB[i]);
			map.set(strB[i], bData - 1)
		}
	}
	console.log(result);
	return result;
};
const A = ['bella', 'label', 'roller'];
console.log(commonChars(A));
