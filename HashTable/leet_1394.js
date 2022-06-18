// https://leetcode.com/problems/find-lucky-integer-in-an-array/

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let answer = [-1];
  const set = new Set(arr);
  for (let num of set) {
    const lucky = arr.filter((val) => val === num).length;
    if (lucky === num) answer.push(num);
  }
  return Math.max(...answer);
};

// Runtime: 99 ms, faster than 41.70%
// Memory Usage: 43.9 MB, less than 55.25%

