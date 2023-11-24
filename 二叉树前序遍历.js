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
 * @return {number[]}
 */
var list = [];
var preorderTraversal = function(root) {
  list = [];
  traversal(root);
  return list;
};

function traversal(root){
  if(!root){
    return;
  }
  list.push(root.val);
  traversal(root.left);
  traversal(root.right);
}