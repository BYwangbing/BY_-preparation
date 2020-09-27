// https://leetcode-cn.com/problems/longest-consecutive-sequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0 || nums.length === 1) {
        return nums.length;
    }
    // 从小到大排序
    nums.sort((a, b) => a - b);
    let max = 1, count = 1;
    for (let i = 0; i < nums.length; i++) {
        // 遍历数组，比较相邻的两项，如果相同，则跳过，继续遍历下一项
        if (nums[i] === nums[i + 1]) continue;  // 相同就跳过本次循环
        // 如果 当前项+1 等于 下一项，说明遇到连续项，count +1
        if (nums[i] + 1 === nums[i + 1]) {
            count++;
        } else {
            // 否则，说明连续情况发生中断，将 count 重置为 1
            count = 1;
        }
        max = Math.max(max, count);
    }
    return max;
};

/*
从小到大排序
遍历数组，比较相邻的两项，如果相同，则跳过，继续遍历下一项
如果 当前项+1 等于 下一项，说明遇到连续项，count +1
否则，说明连续情况发生中断，将 count 重置为 1
* */

const longestConsecutiveII = (nums) => {
    if (nums.length === 0 || nums.length === 1) {
        return nums.length;
    }
    const set = new Set(nums);
    let max = 1;
    for (let i = 0; i < nums.length; i++) {
        // nums[i]没有左邻居，是序列的起点
        if (!set.has(nums[i] - 1)) {
            let count = 1;
            let cur = nums[i];
            // 循环判断nums[i]有没有右邻居 有更新nums[i]
            while (set.has(cur + 1)) {
                cur++;
                count++;
            }
            max = Math.max(max, count);
        }
    }
    return max;
};

const nums = [0, 0, -1];
console.log(longestConsecutiveII(nums));
