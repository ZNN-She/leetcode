/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 只适用二叉树
 */
var result = -1;
var minDepth = function(root) {
  if(!root){
      return 0;
  }
  result = -1;
  stepFn(root, 1);
  return result;
};

function stepFn(node, step){
  if(!node) {
    step -= 1; // 没有了要撤销选择
    return;
  }else if(node.left === null && node.right === null){ // 只有左右都没有的时候再到低
    result = result === -1 ? step : Math.min(result, step);
    return step;
  }
  stepFn(node.left, step + 1);
  stepFn(node.right, step + 1);
}