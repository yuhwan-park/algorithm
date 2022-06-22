// https://leetcode.com/problems/toeplitz-matrix/

// 풀이
// 2차원 배열의 뼈대문제
// y축을 i x축을 j 로 볼 수 있다.

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  let answer = true;
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      if (matrix[i][j] !== matrix[i + 1][j + 1]) {
        answer = false;
        break;
      }
    }
    if (!answer) break;
  }
  return answer;
};

