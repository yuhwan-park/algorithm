// https://leetcode.com/problems/duplicate-zeros/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  const len = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i + 1, 0, 0);
      i++;
    }
  }
  arr.splice(len);
};

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]);

