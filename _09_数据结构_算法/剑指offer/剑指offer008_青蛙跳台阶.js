function jumpFloor(number) {
    let dp = [1, 2];
    for (let i = 2; i <= number; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[number - 1]
}