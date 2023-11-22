/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


// 第一次写的有问题
// var depth = 0;
// var res = 0;
// var diameterOfBinaryTree = function(root) {
//   depth = 0;
//   res = 0;
//   if(!root){
//     return 0;
//   }
//   if(!root.left && !root.right){
//     return 0;
//   }
//   if(!root.left || !root.right){
//     // return 1;
//     return maxDepth(root.left || root.right, 1)
//   }
//   return maxDepth(root, 0);
// };

// function maxDepth(node, depth){
//   if(node == null){
//     return depth - 1;
//   }
//   var depthLeft =  maxDepth(node.left, depth + 1);
//   depth-=1;
//   var depthRight =  maxDepth(node.right, depth + 1);
//   return depthLeft + depthRight
// }


// 第一种解法
// var maxDiameter = 0;
// var diameterOfBinaryTree = function(root) {
//   maxDiameter = 0;
//   traverse(root);
//   return maxDiameter
// };

// function traverse(root){
//   if(!root) {
//     return;
//   }
//   // 分别找出每个点的左右深度
//   var leftMax = maxDepth(root.left)
//   var rightMax = maxDepth(root.right)
//   maxDiameter = Math.max(maxDiameter, leftMax + rightMax);

//   traverse(root.left);
//   traverse(root.right);
//   // 最大直径等于左右深度相加
// }

// // 二叉树最大深度
// function maxDepth(root){
//   if(!root){
//     return 0;
//   }
//   var leftDepth = maxDepth(root.left);
//   var rightDepth = maxDepth(root.right);
//   return Math.max(leftDepth, rightDepth) + 1;
// }

var maxDiameter = 0;
var diameterOfBinaryTree = function(root) {
  maxDiameter = 0;
  maxDepth(root);
  return maxDiameter
};

// 二叉树最大深度
function maxDepth(root){
  if(!root){
    return 0;
  }
  var leftDepth = maxDepth(root.left);
  var rightDepth = maxDepth(root.right);
  maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);
  
  return Math.max(leftDepth, rightDepth) + 1;
}