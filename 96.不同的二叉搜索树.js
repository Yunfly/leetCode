/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * 
 * 解题思路： 遍历 n 中的每一个值 i 作为根节点
 * 子节点可能的个数为左子节点 1~i-1 和右子节点 i+1~n 的所有组合，即笛卡尔积
 */
var numTrees = function (n) {
  const dp = new Array(n + 1).fill(0)
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j]
    }
  }
  return dp[n]
};
// @lc code=end

