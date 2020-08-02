/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 * 
 * @description 当一个二叉树的父节点为 i 时他的左节点为 0~i-1，右节点为
 * i+1 ~ n 所以可以用递归取每一个节点左右节点组合
 */
var generateTrees = function (n) {
  if (n == 0) return [];
  function generateTreesNode(left, right) {
    if (left > right) {
      // 左侧比右侧大，不符合二叉树要求所以返回[null]供后续遍历取值
      return [null]
    }
    if (left === right) return [new TreeNode(left)];
    let res = [];
    for (let i = left; i <= right; i++) {
      const leftNodes = generateTreesNode(left, i - 1)
      const rightNodes = generateTreesNode(i + 1, right)
      for (let leftKey of leftNodes) {
        for (let rightKey of rightNodes) {
          let root = new TreeNode(i);
          root.left = leftKey;
          root.right = rightKey;
          res.push(root)
        }
      }
    }
    return res;
  }

  return generateTreesNode(1, n)

};
// @lc code=end

