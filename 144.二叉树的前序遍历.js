/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
// var preorderTraversal = function (root) {
//   const res = []
//   function preorderNodeTraversal(node, callback) {
//     if (node !== null) {
//       callback(node)
//       preorderNodeTraversal(node.left, callback)
//       preorderNodeTraversal(node.right, callback)
//     }
//   }

//   preorderNodeTraversal(root, function (node) {
//     if (node !== null) res.push(node.val)
//   })

//   return res
// };

var preorderTraversal = function (root) {
  const res = []
  const nodeStack = [root]
  while (nodeStack.length) {
    const node = nodeStack.pop();
    if (node !== null) {
      res.push(node.val)
      if (node.right) nodeStack.push(node.right)
      if (node.left) nodeStack.push(node.left)
    }
  }
  return res
};
// @lc code=end

