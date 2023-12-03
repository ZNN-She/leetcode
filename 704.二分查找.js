/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // if(nums[0] === target) return 0;
  // if(nums[nums.length - 1] === target) return nums.length - 1;
  var left = 0;
  var right = nums.length - 1;
  while(left <= right){
    var mid = left + Math.ceil((right - left) / 2);
    if(nums[mid] == target){
      console.log(mid)
      return mid;
    }
    if(nums[mid] < target){
      left = left + 1;
    }
    if(nums[mid ] > target){
      right = right -1;
    }
  }
  console.log(-1)
  return -1;
};
// @lc code=end

// search([-1,0,3,5,9,12], 9);