// https://leetcode.com/problems/binary-search/

// 풀이
// 이진탐색의 뼈대문제

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target, l = 0, r = nums.length - 1) {
  while (l <= r) {
    const mid = Math.floor((r + l) / 2);

    if (target === nums[mid]) return mid;

    if (target < nums[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));

