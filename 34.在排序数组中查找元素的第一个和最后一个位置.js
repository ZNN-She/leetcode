/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  var start = leftIndex(nums, target);
  var end =rightIndex(nums, target);
  return  [start, end]
};

var leftIndex = function(nums, target){
  var left = 0;
  var right =  nums.length - 1;
  while(left <= right){
    var mid = left + Math.floor((right - left) / 2);
    if(nums[mid] < target){
      left = mid + 1
    }else if(nums[mid] > target){
      right = mid - 1;
    }else if(nums[mid] === target){
      right = mid - 1;
    }
  }
  return nums[left] === target ? left : -1;
}

var rightIndex = function(nums, target){
  var left = 0;
  var right =  nums.length - 1;
  while(left <= right){
    var mid = left + Math.floor((right - left) / 2);
    if(nums[mid] < target){
      left = mid + 1;
    }else if(nums[mid] > target){
      right = mid - 1;
    }else if(nums[mid] === target){
      left = mid + 1;
    }
  }
  return nums[right] === target ? right : -1;
}
// @lc code=end

console.log(searchRange([5,7,7,8,8,10], 8))
console.log(searchRange([5,7,7,8,8,10], 6))