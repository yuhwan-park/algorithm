// https://leetcode.com/problems/maximum-product-difference-between-two-pairs/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  let min = [];
  let max = [];
  for (let i = 0; i < 2; i++) {
    const minNum = Math.min(...nums);
    const maxNum = Math.max(...nums);
    min.push(minNum);
    max.push(maxNum);
    nums.splice(nums.indexOf(minNum), 1);
    nums.splice(nums.indexOf(maxNum), 1);
  }
  return max[0] * max[1] - min[0] * min[1];
};
