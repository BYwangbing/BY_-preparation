/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  /*   let arr = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j]) {
        if (arr.indexOf(nums1[i]) == -1) {
          arr.push(nums1[i]);
        }
      }
    }
  }
  return arr; */
  let map = new Map();
  let arr = [];
  nums1.forEach((item) => {
    map.set(item, true);
  });
  nums2.forEach((item) => {
    if (map.has(item)) {
      map.delete(item);
      arr.push(item);
    }
  });
  return arr;
};
