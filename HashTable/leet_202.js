// https://leetcode.com/problems/happy-number/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const map = new Map();
  while (n !== 1) {
    const newNum = n
      .toString()
      .split("")
      .reduce((acc, cur) => acc + cur ** 2, 0);
    n = newNum;
    if (map.has(newNum)) {
      return false;
    } else {
      map.set(newNum, true);
    }
  }
  return true;
};

console.log(isHappy(232));

