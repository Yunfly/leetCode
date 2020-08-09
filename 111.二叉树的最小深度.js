/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */

//  递归
var minDepth = function (root) {
  if (root === null) return 0;

  if (root.left === null && root.right === null) {
    return 1
  }

  let min = Infinity;
  if (root.left) {
    min = Math.min(min, minDepth(root.left))
  }

  if (root.right) {
    min = Math.min(min, minDepth(root.right))
  }

  return min + 1
}


// 迭代
var minDepth2 = function (root) {
  class Pair {
    constructor(node, length) {
      this.node = node;
      this.length = length;
    }

    getLenght = function () {
      return this.length
    }

    getNode = function () {
      return this.node
    }
  }
  if (root === null) {
    return 0
  }

  let min = Infinity;
  const stack = [new Pair(root, 1)];
  while (stack.length !== 0) {
    const current = stack.pop();

    const node = current.getNode();
    const currentLength = current.getLenght();
    if (node.left === null && node.right === null) {
      min = Math.min(min, currentLength)
    }

    if (node.left) {
      stack.push(new Pair(node.left, currentLength + 1))
    }

    if (node.right) {
      stack.push(new Pair(node.right, currentLength + 1))
    }
  }


  return min
};
// @lc code=end

