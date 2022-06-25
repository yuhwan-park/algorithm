// https://leetcode.com/problems/find-target-indices-after-sorting-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  const result = [];
  const sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === target) {
      result.push(i);
    }
  }

  return result;
};

targetIndices([1, 2, 5, 2, 3], 2);

