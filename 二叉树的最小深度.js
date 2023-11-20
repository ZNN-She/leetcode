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
// var result = -1;
// var minDepth = function(root) {
//   if(!root){
//       return 0;
//   }
//   result = -1;
//   stepFn(root, 1);
//   return result;
// };

// function stepFn(node, step){
//   if(!node) {
//     step -= 1;
//     return;
//   }else if(node.left === null && node.right === null){
//     result = result === -1 ? step : Math.min(result, step);
//     return step;
//   }
//   stepFn(node.left, step + 1);
//   stepFn(node.right, step + 1);
// }

/**
 * 齐头并进
 */
var minDepth = function (root) {
  var queue = [];
  var level = 0;

  if(!root){
    return 0;
  }

  root && queue.push(root); // 如果树存在，才进行遍历

  while (queue.length) {
    var queueLength = queue.length; // 当前层级的节点数量

    while (--queueLength >= 0) {
      var node = queue.shift(); // 利用数组的特性取出一个，并不断的减少数组，较少的数量刚好是queueLength，即当前层级的节点数据

      if (!node.left && !node.right) { // 找到最短的
        return level + 1; // 因为没有算第一个节点，最后加一
      }

      if(node.left){
        queue.push(node.left); // 把新的节点添加到队列中，不用担心队列遍历问题，因为上面已经通过queueLength记录了当前需要遍历的节点数
      }
      if(node.right){
        queue.push(node.right); // 把新的节点添加到队列中，不用担心队列遍历问题，因为上面已经通过queueLength记录了当前需要遍历的节点数
      }
    }
    level ++; // 层级加一
  }
}