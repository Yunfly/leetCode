/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  const result = []
  if (root === null) return result
  const currentNode = [root]
  while (currentNode.length) {
    const currentNodeLength = currentNode.length
    result.unshift([])
    for (let i = 0; i < currentNodeLength; i++) {
      const node = currentNode.shift();
      if (node !== null) {
        if (node.left) currentNode.push(node.left)
        if (node.right) currentNode.push(node.right)
        result[0].push(node.val)
      }

    }
  }
  return result;
};
// @lc code=end

