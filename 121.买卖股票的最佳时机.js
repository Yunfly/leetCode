/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let n = prices.length;
  let dp = new Array(n).fill([])
  dp = dp.map(x => [0, 1])
  for (let i = 0; i < n; i++) {
    if (i - 1 == -1) {
      dp[i][0] = 0;
      // 解释：
      //   dp[i][0] 
      // = max(dp[-1][0], dp[-1][1] + prices[i])
      // = max(0, -infinity + prices[i]) = 0
      dp[i][1] = -prices[i];
      //解释：
      //   dp[i][1] 
      // = max(dp[-1][1], dp[-1][0] - prices[i])
      // = max(-infinity, 0 - prices[i]) 
      // = -prices[i]
      continue;
    }
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
  }

  return dp[n - 1][0];
};
// @lc code=end

