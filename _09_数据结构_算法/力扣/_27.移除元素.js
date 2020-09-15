/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = function (nums, val) {
    let length = 0;
    for (let item of nums){
        if (item !== val){
            nums[length] = item;
            length++;
        }
    }
    return length;
};
let nums = [0,1,2,2,3,0,4,2], val = 2;
console.log(removeElement(nums, val));