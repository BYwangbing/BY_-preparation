/*
机器人只能向右或向下移动一步 那么从左上角到右下角的走法 = 从右边开始走的路径总数+从下边开始走的路径总数
核心状态转移方程应该为dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
  dp[i-1][j]表示的是从上面走过来的路径条数。
  dp[i][j-1]表示的是从左边走过来的路径条数。
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n);
    dp[i][0] = 1;
  }
  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};

var uniquePaths = function (m, n) {
  const dp = new Array(n).fill(1);
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] = dp[j] + dp[j - 1];
    }
  }
  return dp[n - 1];
};
