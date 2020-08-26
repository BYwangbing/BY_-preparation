function Sum_Solution(n) {
    // write code here
    let ans = n;
    ans && (ans += Sum_Solution(n - 1));
    return ans;
}

console.log(Sum_Solution(2));