/*
使用matrix第一行和第一列来表示当前行／列是否有元素值为0
遍历矩阵，如果当前元素的行／列的头元素为0，则将其置零
特殊情况第一行／第一列本身有元素值为零： 设置标志位flag，如果第一列本身有元素为零 -> flag = true
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const row = matrix.length,
    col = matrix[0].length;
  let colFlag0 = false;
  for (let i = 0; i < row; i++) {
    if (matrix[i][0] === 0) colFlag0 = true;
    for (let j = 1; j < col; j++) {
      if (matrix[i][j] === 0) matrix[i][0] = matrix[0][j] = 0;
    }
  }

  for (let i = row - 1; i >= 0; i--) {
    for (let j = col - 1; j > 0; j--) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) matrix[i][j] = 0;
    }
    if (colFlag0) matrix[i][0] = 0;
  }
};

var setZeroes = function (matrix) {
  var rows = {};
  var column = {};
  for (var i = 0; i < matrix.length; i++)
    for (var j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 0) {
        rows[i] = false;
        column[j] = false;
      }
    }
  for (var i = 0; i < matrix.length; i++)
    for (var j = 0; j < matrix[0].length; j++) {
      if (rows[i] == false || column[j] == false) matrix[i][j] = 0;
    }
};
