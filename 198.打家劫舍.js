/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums.length) return 0

  if (nums.length == 1) {
    return nums[0];
  }

  let cur = 0;
  let dp_pre_1 = nums[0], dp_pre_2 = Math.max(nums[0], nums[1])

  for (let i = 2; i < nums.length; i++) {
    cur = Math.max(dp_pre_2, dp_pre_1 + nums[i])
    dp_pre_1 = dp_pre_2;
    dp_pre_2 = cur;
  }

  return dp_pre_2

};
// @lc code=end

