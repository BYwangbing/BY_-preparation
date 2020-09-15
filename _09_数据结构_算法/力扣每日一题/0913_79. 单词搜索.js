// https://leetcode-cn.com/problems/word-search/
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const m = board.length; // 1. 行
    const n = board[0].length; // 2. 列
    const used = new Array(m);  // 二维矩阵used
    for (let i = 0; i < m; i++) {
        used[i] = new Array(n);
    }
    // 判断当前点是否是目标路径上的点
    const canFind = (row, col, i) => { // row col是当前点的坐标，i是当前考察的字符索引
        if (i > word.length - 1) { // 递归的出口，指针i越界，word所有字符都没有返回false，返回true
            return true;
        }
        if (row < 0 || row >= m || col < 0 || col >= n) {
            return false;
        }
        // 路径不能重复走同一个点，选择了当前点，下次就不能再回来选它
        if (used[row][col] || board[row][col] !== word[i]) {
            return false;
        }
        used[row][col] = true;
        // 递归考察下一个字符，进行四个方向的深搜 上下左右
        const canFindRest = canFind(row - 1, col, i + 1) ||
            canFind(row + 1, col, i + 1) ||
            canFind(row, col - 1, i + 1) ||
            canFind(row, col + 1, i + 1);
        // 基于当前点，找得出剩下的字符组成的路径
        if (canFindRest) {
            return true;
        }
        // 找不出，结束递归，继续考察别的分支，并撤销当前点的访问状态。
        used[row][col] = false;
        return false;
    };

    // 4. 遍历矩阵
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 4.1 如果矩阵存在元素和单词开头相同
            if (board[i][j] === word[0] && canFind(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};