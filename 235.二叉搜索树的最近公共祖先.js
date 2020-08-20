/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const pVal = p.val;
  const qVal = q.val

  let current = root
  while (current != null) {
    if (pVal < current.val && qVal < current.val) {
      current = current.left
    } else if (pVal > current.val && qVal > current.val) {
      current = current.right
    } else {
      return current
    }
  }

  return null
  // let parentVal = root.val;
  // let pVal = p.val;
  // let qVal = q.val;

  // if (pVal < parentVal && qVal < parentVal) {
  //   return lowestCommonAncestor(root.left, p, q)
  // } else if (pVal > parentVal && qVal > parentVal) {
  //   return lowestCommonAncestor(root.right, p, q)
  // }
  // return root
};
// @lc code=end

