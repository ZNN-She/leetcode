/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var res = [];
var levelOrder = function(root) {
  res = [];
  if(!root) return [];
  var list = [root];
  while(list.length){
    var size =  list.length;
    var resItem = [];
    for(var i = 0; i < size; i++){
      var node = list.shift();
      resItem.push(node.val);
      if(node.left){
        list.push(node.left);
      }
      if(node.right){
        list.push(node.right);
      }
    }
    res.push(resItem);
  }
  return res;
};
