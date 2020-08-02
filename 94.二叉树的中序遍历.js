/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root) {
  function inorderTraverseNode(node, callback) {
    if (node !== null) {
      inorderTraverseNode(node.left, callback)
      callback(node.val)
      inorderTraverseNode(node.right, callback)
    }
  }
  const arr = []

  inorderTraverseNode(root, (val) => {
    arr.push(val)
  })
  return arr
};
// @lc code=end

