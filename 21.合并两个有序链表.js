/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  var next1 = list1;
  var next2 = list2;
  var dummy = {val: null, next: null};
  var newList = dummy;
  while (next1 && next2) {
    if (next1.val < next2.val) {
      newList.next = next1;
      next1 = next1.next;
    } else {
      newList.next = next2;
      next2 = next2.next;
    }
    newList = newList.next;
  }


  if (next1) {
    newList.next = next1;
  }
  if (next2) {
    newList.next = next2;
  }

  return dummy.next;
};
// @lc code=end

