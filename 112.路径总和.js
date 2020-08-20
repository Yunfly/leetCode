/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (node, sum) {
  if (node === null) return false;
  if (node.left === null && node.right === null) {
    return node.val === sum
  }
  return hasPathSum(node.left, sum - node.val) || hasPathSum(node.right, sum - node.val)

};
// @lc code=end

