// https://leetcode-cn.com/problems/permutations/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
    let length = nums.length;
    return perm(length - 1);

    function perm(i) {
        if (i === 0) {
            return [[nums[0]]];
        } else if (i === 1) {
            return [[nums[0], nums[1]], [nums[1], nums[0]]];
        }
        let ans = perm(i - 1);
        let fixNum = nums[i];
        let result = [];
        for (let j = 0; j < ans.length; j++) {
            for (let k = 0; k <= i; k++) {
                let arr = ans[j].slice();
                arr.splice(k, 0, fixNum);
                result.push(arr);
            }
        }
        return result;
    }
};

const _permute = (nums) => {
    let result = [];
    nums.sort((a, b) => a - b);

};

function find(nums, templateList){

}

let nums = [1, 2, 3];
console.log(permute(nums));