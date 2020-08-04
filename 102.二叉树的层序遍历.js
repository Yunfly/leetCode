/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
  if (root === null) return []
  const res = []
  const queue = [root] // 默认第一次为根节点
  while (queue.length !== 0) {
    const currentLeavelLength = queue.length;
    res.push([])
    // 依次循环结束后，队列中只剩下一层的子节点
    for (let i = 1; i <= currentLeavelLength; i++) {
      // 将每一层压入对了的节点取出， push 到 res 中
      const node = queue.shift();
      res[res.length - 1].push(node.val);

      // 将父节点的左右子节点压入队列中，下次迭代将currentLeavelLength依次取出存入 res
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return res
};
// @lc code=end

