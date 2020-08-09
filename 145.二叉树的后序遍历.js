/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const res = []
  function preorderNodeTraversal(node, callback) {
    if (node !== null) {
      preorderNodeTraversal(node.left, callback)
      preorderNodeTraversal(node.right, callback)
      callback(node)
    }
  }

  preorderNodeTraversal(root, function (node) {
    if (node !== null) res.push(node.val)
  })

  return res
};

// @lc code=end

