/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 * 类似100 解法，左右递归检查是否相等
 */
var isSymmetric = function (root) {
  if (root === null) return true;
  function symmetric(left, right) {
    if (left === null && right === null) {
      return true
    }
    if (left == null || right == null || left.val !== right.val) return false

    return symmetric(left.left, right.right) && symmetric(left.right, right.left)
  }

  return symmetric(root.left, root.right)
};
// @lc code=end

