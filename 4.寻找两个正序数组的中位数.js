/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  var item = [...nums1, ...nums2].sort((a, b) => a - b)
  var length = item.length
  if (length % 2 === 0) {
    var index = length / 2  // 2
    return (item[index - 1] + item[index]) / 2
  } else {
    return item[Math.floor(length / 2)]
  }
};
// @lc code=end

