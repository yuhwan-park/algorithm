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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  const data = [];

  function traverse(node) {
    data.push(node.val);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  traverse(root);

  return !Boolean(data.filter((v) => v !== root.val).length);
};

// 다른 사람의 풀이
// 나는 일단 배열에 모든 값을 넣고 재귀를 탈출한 뒤 값 계산을 했지만
// 이 풀이는 값 계산을 도중에 하였다. 재귀적인 코드를 짤 때 좋은 코드가 잘 생각이 안난다.

// DFS
var isUnivalTree = function (root) {
  let val = root.val;

  function dfsTraversal(root) {
    if (!root) return;
    if (root.val !== val) return false;

    if (dfsTraversal(root.left) == false) return false;
    if (dfsTraversal(root.right) == false) return false;

    return true;
  }

  return dfsTraversal(root);
  // Time Complexity: O(n), we possibly visit all nodes
  // Space Complexity: O(H), call stack can possibly go as deep as height of tree
};
