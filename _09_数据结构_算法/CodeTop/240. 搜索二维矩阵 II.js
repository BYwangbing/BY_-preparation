/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let maxRow = matrix.length - 1,
    maxCol = matrix[0].length - 1;
  let row = maxRow,
    col = 0;
  while (true) {
    if (row < 0 || col > maxCol) return false;
    if (target === matrix[row][col]) return true;
    target > matrix[row][col] ? col++ : row--;
  }
};
