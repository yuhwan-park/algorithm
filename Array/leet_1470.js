// https://leetcode.com/problems/shuffle-the-array/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const answer = [];
  for (let i = 0, j = n; j < nums.length; i++, j++) {
    answer.push(nums[i]);
    answer.push(nums[j]);
  }

  return answer;
};

