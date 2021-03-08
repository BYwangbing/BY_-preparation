/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // p初始指向nums1最后一位
  let p1 = m - 1,
    p2 = n - 1,
    p = m + n - 1;
  //如果其中有小于0，说明直接是空数组，不用比较直接裁剪
  if (p1 < 0 || p2 < 0) {
    nums1.splice(0, n, ...nums2);
  }

  while (p2 >= 0) {
    // 如果p1比p2大
    if (nums1[p1] > nums2[p2]) {
      // 将p1的值丢到p位置
      nums1[p] = nums1[p1];
      // p与p1都左移
      p--;
      p1--;
    } else {
      // 反之把p2的值丢到p位置
      nums1[p] = nums2[p2];
      // p和p2左移
      p--;
      p2--;
    }
  }
};

/*
由于nums1中的0其实就是预留给nums2的空间，准确来说，我们要做的就是将0替换成nums1或nums2的元素，这个据排序大小而定。
m和n分别代表了nums1与nums2的有效元素个数，因此合并完成后的新nums1长度为m+n-1。
由于数组nums1与nums2都是有序数组，所以不难想要，如果num2中的一个元素比nums1的最后一个元素大，
那么一定比nums1的其它元素都大，这样相比正序比较，倒序遍历耗时会大大减少。


那么我们现在要对nums1倒序更新元素，同时需要两个指针，分别指向nums1的m-1处与nums2的n-1处，然后开始比较
如果nums2的最后一个元素比nums1的最后一个元素大（注意，这里的最后是m-1），
那么nums1索引为m+n-1处的0就应该被替换成nums2的最后一个元素
在经过这次比较后，因为nums2最后一个元素已经被使用了，所以nums2的指针左移，进行下次比较。
如果遇到nums1的元素比nums2大的情况，我们还是一样的将nums1的元素添加到后面，同理nums1的指针要开始左移。

一共有三个指针，指针p1（指针的单词是pointer）与p2分别指向nums1与nums2的有效元素位，指针p指向nums1的最后一位，
经过比较，我们使用将较大的放到nums1的p位，此时p就得左移，p做的工作就是负责不断的替换nums1中的元素。
*/
// https://www.cnblogs.com/echolun/p/13154260.html
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let len1 = m - 1;
  let len2 = n - 1;
  let len = m + n - 1;
  while (len1 >= 0 && len2 >= 0) {
    // 注意--符号在后面，表示先进行计算再减1，这种缩写缩短了代码
    nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
  }
  function arrayCopy(src, srcIndex, dest, destIndex, length) {
    dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length));
  }
  // 表示将nums2数组从下标0位置开始，拷贝到nums1数组中，从下标0位置开始，长度为len2+1
  arrayCopy(nums2, 0, nums1, 0, len2 + 1);
};
