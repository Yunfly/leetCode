/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * 
 * 二叉搜索树应满足中序遍历，将其和上一个值preVal比较，
 * 如果小于等于preVal则不是一个二叉搜索树
 */
var isValidBST = function (root) {
  let result = true
  function inOrderTraverse(node, callback) {
    if (node !== null) {
      inOrderTraverse(node.left, callback)
      callback(node)
      inOrderTraverse(node.right, callback)
    }
  }
  let preVal = -Infinity;
  inOrderTraverse(root, (node) => {
    if (node.val <= preVal) {
      result = false;
    }
    preVal = node.val
  })
  return result

};
// @lc code=end

