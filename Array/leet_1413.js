// https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let startValue = 1;

  while (true) {
    let flag = true;

    nums.reduce((acc, cur) => {
      if (acc + cur < 1) flag = false;
      return acc + cur;
    }, startValue);

    if (flag) break;
    startValue++;
  }

  return startValue;
};

console.log(minStartValue([-3, 2, -3, 4, 2]));

