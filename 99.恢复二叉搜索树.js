/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 * 利用中序遍历前一个比后一个小的规律找到错误的两个 node，
 * 将错误的 node 值交换
 */
var recoverTree = function (root) {
  function inOrderTraverse(node, callback) {
    if (node !== null) {
      inOrderTraverse(node.left, callback)
      callback(node)
      inOrderTraverse(node.right, callback)
    }
  }
  let errorOne = null;
  let errorTwo = null;
  let pre = null
  inOrderTraverse(root, (node) => {
    if (pre !== null && pre.val >= node.val) {
      if (errorOne == null) {
        errorOne = pre;
        errorTwo = node;
      } else {
        errorTwo = node;
      }
    }
    pre = node;

  })
  let temp = errorOne.val;
  errorOne.val = errorTwo.val;
  errorTwo.val = temp;
};
// @lc code=end

