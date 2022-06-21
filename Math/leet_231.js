// https://leetcode.com/problems/power-of-two/

// 풀이
// 주어진 수가 2의 제곱인지 판별하는 문제

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  return Number.isInteger(Math.log2(n));
};

// 다른사람의 풀이

// 본 문제는 원래 비트연산 문제로 분류돼있다.
// 2의 제곱인 수는 바이너리에서 한 자리만 1이고 그 수에서 1을 뺀 수는 나머지 모든 수가 1이다
// 그걸 이용해 &연산자를 사용하면 0이 되는걸 이용해서 풀이이다.
// https://leetcode.com/problems/power-of-two/discuss/1682310/js-bitwise-operation

var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) == 0;
};

