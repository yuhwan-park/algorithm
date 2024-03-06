// https://leetcode.com/problems/binary-tree-postorder-traversal/

// 풀이
// DFS의 후위 순회

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
var postorderTraversal = function (root) {
  if (!root) return [];
  const answer = [];
  const traverse = (node) => {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    answer.push(node.val);
  };
  traverse(root);
  return answer;
};

