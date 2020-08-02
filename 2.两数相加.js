/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let pre = new ListNode(0);
  let cur = pre;
  let carry = 0;

  while (l1 || l2) {
    const x = l1 ? l1.val : 0
    const y = l2 ? l2.val : 0
    let sum = x + y + carry

    carry = parseInt(sum / 10);
    sum = sum % 10;
    cur.next = new ListNode(sum)
    cur = cur.next;

    if (l1) {
      l1 = l1.next
    }

    if (l2) {
      l2 = l2.next
    }

  }

  if (carry >= 1) {
    cur.next = new ListNode(carry)
  }
  return pre.next
};
// @lc code=end

