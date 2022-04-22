// https://leetcode.com/problems/contains-duplicate/

// 풀이
// Set의 원소는 distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  return new Set(nums).size === nums.length ? false : true;
};
console.log(containsDuplicate([1, 2, 3, 1]));
