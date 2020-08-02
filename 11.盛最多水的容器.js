/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0, j = height.length - 1, res = 0;
  while (i < j) {
    const area = (j - i) * Math.min(height[i], height[j])
    res = Math.max(res, area)
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return res
};
// @lc code=end

