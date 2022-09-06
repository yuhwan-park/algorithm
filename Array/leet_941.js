// https://leetcode.com/problems/valid-mountain-array/

var validMountainArray = function (A) {
  if (A.length < 3) return false;

  var isDecreasing = false;
  var isIncreasing = false;

  for (var i = 1, j = 0; i < A.length; i++, j++) {
    if (A[j] < A[i] && !isDecreasing) {
      isIncreasing = true;
      continue;
    }

    isDecreasing = true;

    if (A[j] <= A[i]) return false;
  }

  return isDecreasing && isIncreasing;
};
