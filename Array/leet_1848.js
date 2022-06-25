// https://leetcode.com/problems/minimum-distance-to-the-target-element/

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {
  const arr = nums.map((n, i) => {
    if (n === target) {
      return Math.abs(i - start);
    } else {
      return Infinity;
    }
  });
  return Math.min(...arr);
};
