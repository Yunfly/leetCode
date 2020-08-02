/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (arr) {
  if (!arr.length) return 0
  if (arr.length == 1) {
    return arr[0];
  }

  function dp(nums) {
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

  }

  return Math.max(dp(arr.slice(1)), dp(arr.slice(0,arr.length - 1)))
};
// @lc code=end

