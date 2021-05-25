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

 var preorderTraversal = function(root) {
    if (!root) {
      return;
    }

    let arr = [root];
    let result = [];

    while (arr.length) {
      const node = arr.pop();
      result.push(node.val);

      if (node.right) {
        arr.push(node.right);
      }

      if (node.left) {
        arr.push(node.left);
      }
    }

    return result;
};