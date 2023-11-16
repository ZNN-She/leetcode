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
 * @return {number}
 */
var res = 0;
var depth = 0;
var maxDepth = function (root) {
    res = 0;
    depth = 0;
    traverse(root)
    return res;
};

function traverse(root) {
    if (root == null) {
        res = Math.max(res, depth);
        return;
    }
    depth = depth + 1;
    traverse(root.left);
    traverse(root.right);
    depth = depth - 1;
}