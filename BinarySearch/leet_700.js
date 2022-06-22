// https://leetcode.com/problems/search-in-a-binary-search-tree/

// 풀이
// 이진 탐색 트리의 탐색 문제
// BST의 규칙을 까먹어서 왼쪽오른쪽을 다 순회하고있는데 왼쪽노드는 부모보다 작고 오른쪽노드는 부모보다 크므로
// 이 규칙을 활용해서 전부 순회하지 않아도 된다.

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  let answer = null;
  const search = (node) => {
    if (answer) return;
    if (node.val === val) {
      answer = node;
    }
    if (node.left) search(node.left);
    if (node.right) search(node.right);
  };
  search(root);
  return answer;
};

