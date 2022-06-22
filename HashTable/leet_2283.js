// https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/

/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  const m = new Map();
  let answer = true;
  for (let i = 0; i < num.length; i++) {
    m.set(i, +num[i]);
  }

  m.forEach((v, k) => {
    if (num.split(k).length - 1 !== Number(v)) {
      answer = false;
    }
  });
  return answer;
};

