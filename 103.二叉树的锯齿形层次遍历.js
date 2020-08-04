/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
var zigzagLevelOrder = function (root) {
  if (root === null) return []
  const res = []
  const queue = [root]
  let currentLevel = 1;
  while (queue.length !== 0) {
    const currentLength = queue.length
    res.push([])
    for (let i = 1; i <= currentLength; i++) {

      const node = queue.shift();

      //  或者直接在最后将需要右到左的值翻转
      // res[res.length - 1].reverse()

      if (currentLevel % 2 !== 0) {
        res[res.length - 1].unshift(node.val);
      } else {
        res[res.length - 1].push(node.val);
      }
      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
    }

    currentLevel++;
  }

  return res
};
// @lc code=end

